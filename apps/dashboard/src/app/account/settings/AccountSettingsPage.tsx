"use client";

import { redirectToBillingPortal } from "@/actions/billing";
import { confirmEmailWithOTP } from "@/actions/confirmEmail";
import { apiServerProxy } from "@/actions/proxies";
import { updateAccount } from "@/actions/updateAccount";
import { useDashboardRouter } from "@/lib/DashboardRouter";
import type { Account } from "@3rdweb-sdk/react/hooks/useApi";
import type { ThirdwebClient } from "thirdweb";
import { upload } from "thirdweb/storage";
import { doLogout } from "../../login/auth-actions";
import { AccountSettingsPageUI } from "./AccountSettingsPageUI";

export function AccountSettingsPage(props: {
  account: Account;
  client: ThirdwebClient;
  defaultTeamSlug: string;
  defaultTeamName: string;
}) {
  const router = useDashboardRouter();
  return (
    <div>
      <header className="border-border border-b py-10">
        <div className="container max-w-[950px]">
          <h1 className="font-semibold text-3xl tracking-tight">
            Account Settings
          </h1>
        </div>
      </header>

      <div className="container max-w-[950px] grow pt-8 pb-20">
        <AccountSettingsPageUI
          client={props.client}
          defaultTeamSlug={props.defaultTeamSlug}
          defaultTeamName={props.defaultTeamName}
          onAccountDeleted={async () => {
            await doLogout();
            router.replace("/login");
          }}
          deleteAccount={async () => {
            // TODO - test this once the API is functional
            try {
              const res = await apiServerProxy({
                method: "DELETE",
                pathname: "/v1/account",
              });

              return {
                status: res.status,
              };
            } catch (error) {
              console.error(error);
              return { status: 500 };
            }
          }}
          redirectToBillingPortal={redirectToBillingPortal}
          updateAccountAvatar={async (file) => {
            let uri: string | undefined = undefined;

            if (file) {
              // upload to IPFS
              uri = await upload({
                client: props.client,
                files: [file],
              });
            }

            await updateAccount({
              image: uri,
            });

            router.refresh();
          }}
          account={props.account}
          updateEmailWithOTP={async (otp) => {
            const res = await confirmEmailWithOTP(otp);
            if (res?.errorMessage) {
              throw new Error(res.errorMessage);
            }
            router.refresh();
          }}
          updateName={async (name) => {
            const res = await updateAccount({ name });
            if (res?.errorMessage) {
              throw new Error(res.errorMessage);
            }
            router.refresh();
          }}
          // yes, this is weird -
          // to send OTP to email, we use updateAccount
          sendEmail={async (email) => {
            const res = await updateAccount({ email });
            if (res?.errorMessage) {
              throw new Error(res.errorMessage);
            }
          }}
        />
      </div>
    </div>
  );
}
