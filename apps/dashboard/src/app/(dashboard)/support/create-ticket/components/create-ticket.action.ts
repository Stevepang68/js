"use server";
import "server-only";

import { COOKIE_ACTIVE_ACCOUNT, COOKIE_PREFIX_TOKEN } from "@/constants/cookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCachedRawAccountForAuthToken } from "../../../../account/settings/getAccount";

type State = {
  success: boolean;
  message: string;
};

const UNTHREAD_API_KEY = process.env.UNTHREAD_API_KEY || "";

const planToCustomerId = {
  free: process.env.UNTHREAD_FREE_TIER_ID as string,
  growth: process.env.UNTHREAD_GROWTH_TIER_ID as string,
  pro: process.env.UNTHREAD_PRO_TIER_ID as string,
} as const;

function isValidPlan(plan: string): plan is keyof typeof planToCustomerId {
  return plan in planToCustomerId;
}

function prepareEmailTitle(
  product: string,
  problemArea: string,
  email: string,
  name: string,
) {
  const title =
    product && problemArea
      ? `${product}: ${problemArea} (${email})`
      : `New ticket from ${name} (${email})`;
  return title;
}

function prepareEmailBody(props: {
  product: string;
  markdownInput: string;
  email: string;
  name: string;
  extraInfoInput: Record<string, string>;
  walletAddress: string;
}) {
  const { extraInfoInput, email, walletAddress, product, name, markdownInput } =
    props;
  // Update `markdown` to include the infos from the form
  const extraInfo = Object.keys(extraInfoInput)
    .filter((key) => key.startsWith("extraInfo_"))
    .map((key) => {
      const prettifiedKey = `# ${key
        .replace("extraInfo_", "")
        .replaceAll("_", " ")}`;
      return `${prettifiedKey}: ${extraInfoInput[key] ?? "N/A"}\n`;
    })
    .join("");
  const markdown = `# Email: ${email}
  # Name: ${name}
  # Wallet address: ${walletAddress}
  # Product: ${product}
  ${extraInfo}
  # Message:
  ${markdownInput}
  `;
  return markdown;
}

export async function createTicketAction(
  _previousState: State,
  formData: FormData,
) {
  const cookieManager = await cookies();
  const activeAccount = cookieManager.get(COOKIE_ACTIVE_ACCOUNT)?.value;
  const token = activeAccount
    ? cookieManager.get(COOKIE_PREFIX_TOKEN + activeAccount)?.value
    : null;

  if (!activeAccount || !token) {
    // user is not logged in, make them log in
    redirect(`/login?next=${encodeURIComponent("/support")}`);
  }

  const account = await getCachedRawAccountForAuthToken(token);

  if (!account) {
    // user is not logged in, make them log in
    redirect(`/login?next=${encodeURIComponent("/support")}`);
  }

  const { plan } = account;

  const customerId = isValidPlan(plan) ? planToCustomerId[plan] : undefined;

  const product = formData.get("product")?.toString() || "";
  const problemArea = formData.get("extraInfo_Problem_Area")?.toString() || "";

  const title = prepareEmailTitle(
    product,
    problemArea,
    account.email || "",
    account.name || "",
  );

  const keyVal: Record<string, string> = {};
  for (const key of formData.keys()) {
    keyVal[key] = formData.get(key)?.toString() || "";
  }

  const markdown = prepareEmailBody({
    product,
    markdownInput: keyVal.markdown || "",
    email: account.email || "",
    name: account.name || "",
    extraInfoInput: keyVal,
    walletAddress: activeAccount,
  });

  const content = {
    type: "email",
    title,
    markdown,
    status: "open",
    onBehalfOf: {
      email: account.email,
      name: account.name,
      id: account.id,
    },
    customerId,
    emailInboxId: process.env.UNTHREAD_EMAIL_INBOX_ID,
    triageChannelId: process.env.UNTHREAD_TRIAGE_CHANNEL_ID,
  };

  // check files
  const files = formData.getAll("files") as File[];

  if (files.length > 10) {
    return { success: false, message: "You can only attach 10 files at once." };
  }
  if (files.some((file) => file.size > 10 * 1024 * 1024)) {
    return { success: false, message: "The max file size is 20MB." };
  }

  // add the content
  formData.append("json", JSON.stringify(content));

  const KEEP_FIELDS = ["attachments", "json"];
  const keys = [...formData.keys()];
  // delete everything except attachments off of the form data
  for (const key of keys) {
    if (!KEEP_FIELDS.includes(key)) {
      formData.delete(key);
    }
  }

  // actually create the ticket
  const res = await fetch("https://api.unthread.io/api/conversations", {
    method: "POST",
    headers: {
      "X-Api-Key": UNTHREAD_API_KEY,
    },
    body: formData,
  });
  if (!res.ok) {
    console.error(
      "Failed to create ticket",
      res.status,
      res.statusText,
      await res.text(),
    );
    return {
      success: false,
      message: "Failed to create ticket, please try again later.",
    };
  }

  return {
    success: true,
    message: "Ticket created successfully",
  };
}
