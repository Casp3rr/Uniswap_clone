import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xe22b9E2645340EF344eea0d7C4e3314075261621";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/ADmm5DMwhv6p0ErknCMUC7VT97w-meoI",
  },
};