import { Spinner } from "@/components/ui/Spinner/Spinner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabButtons } from "@/components/ui/tabs";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import type { ChainMetadata } from "thirdweb/chains";
import type { TokenDetails } from "../hooks/useGetERC20Tokens";
import type { NFTDetails } from "../hooks/useGetNFTs";
import { NFTCard } from "./NFTCard";

interface TokenHoldingsProps {
  chain: ChainMetadata;
  tokens: TokenDetails[];
  nfts: NFTDetails[];
  isLoading: boolean;
}

export function TokenHoldings({
  chain,
  tokens,
  nfts,
  isLoading,
}: TokenHoldingsProps) {
  const [activeTab, setActiveTab] = useState<"erc20" | "nft">("erc20");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set items per page

  // Calculate the index of the last token on the current page
  const lastIndex = currentPage * itemsPerPage;
  // Calculate the index of the first token on the current page
  const firstIndex = lastIndex - itemsPerPage;
  // Get the current tokens to display
  const currentTokens = tokens.slice(firstIndex, lastIndex);
  // Calculate total pages
  const totalPages = Math.ceil(tokens.length / itemsPerPage);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <TabButtons
          tabs={[
            {
              name: "ERC20 Tokens",
              isActive: activeTab === "erc20",
              isEnabled: true,
              onClick: () => setActiveTab("erc20"),
            },
            {
              name: "NFTs",
              isActive: activeTab === "nft",
              isEnabled: true,
              onClick: () => setActiveTab("nft"),
            },
          ]}
          tabClassName="font-medium !text-sm"
        />

        {isLoading ? (
          <Spinner />
        ) : activeTab === "erc20" ? (
          <>
            <ERC20Table
              chain={chain}
              tokens={currentTokens}
              isLoading={isLoading}
            />
            {/* Pagination Controls */}
            <div className="pagination">
              <TabButtons
                tabs={[
                  {
                    name: "Previous",
                    isActive: currentPage === 1,
                    isEnabled: currentPage > 1,
                    onClick: () =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1)),
                  },
                  {
                    name: `Page ${currentPage} of ${totalPages}`,
                    isActive: true,
                    isEnabled: false,
                    onClick: () => {}, // No action needed
                  },
                  {
                    name: "Next",
                    isActive: currentPage === totalPages,
                    isEnabled: currentPage < totalPages,
                    onClick: () =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
                  },
                ]}
                tabClassName="font-medium !text-sm"
              />
            </div>
          </>
        ) : activeTab === "nft" ? (
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {nfts.map((nft, idx) => (
              <NFTCard
                key={`${nft.contractAddress}-${idx}`}
                nft={nft}
                chain={chain}
              />
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

function ERC20Table({
  chain,
  tokens,
  isLoading,
}: { chain: ChainMetadata; tokens: TokenDetails[]; isLoading: boolean }) {
  const explorer = chain.explorers?.[0];
  const totalValueUsdCents =
    tokens.reduce((sum, token) => sum + (token.totalValueUsdCents ?? 0), 0) *
    0.01;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={3} />
          <TableHead>Total: ${totalValueUsdCents.toPrecision(2)}</TableHead>
        </TableRow>
      </TableHeader>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Decimals</TableHead>
          <TableHead>Last Transferred</TableHead>
          <TableHead>Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading ? (
          <Spinner />
        ) : (
          tokens.map((token) => (
            <TableRow key={token.contractAddress}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/${token.symbol.toLowerCase()}.png`}
                    alt="token logo"
                    className="size-6"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/1a63530be6e374711a8554f31b17e4cb92c25fa5/128/icon/generic.png";
                    }}
                  />
                  <div>
                    <span className="inline-block max-w-[650px] truncate font-bold">
                      {token.symbol} ({token.name})
                    </span>
                    <div className="text-muted-foreground text-sm">
                      {explorer && token.contractAddress !== "Native" ? (
                        <a
                          href={`${explorer.url}/address/${token.contractAddress}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {token.contractAddress}
                        </a>
                      ) : (
                        token.contractAddress
                      )}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-muted-foreground text-sm">
                  {token.decimals}
                </span>
              </TableCell>
              <TableCell>
                {token.lastTransferredDate && (
                  <span
                    title={token.lastTransferredDate}
                    className="text-muted-foreground text-sm"
                  >
                    {formatDistanceToNow(new Date(token.lastTransferredDate), {
                      addSuffix: true,
                    })}
                  </span>
                )}
              </TableCell>
              <TableCell>
                <div>
                  <span className="font-bold">
                    {token.balanceTokens.toFixed(2)}
                  </span>
                  {token.totalValueUsdCents && (
                    <div className="text-muted-foreground text-sm">
                      ${(token.totalValueUsdCents * 0.01).toFixed(2)}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell />
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
