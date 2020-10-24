import * as R from "ramda";

export const networkKeys = [
  "cosmos",
  "polkadot",
  "kava",
  "terra-money",
  // "iris",
  // "desmos",
  "likecoin",
  // "cyberd",
  "e-money",
  // "regen-network",
  "band-protocol",
  "akash",
  "iov",
  "kusama",
].sort();

export const getNewHeight = (e: any) => {
  const message = JSON.parse(e.data);
  const newHeight = R.pathOr(
    "---",
    ["result", "data", "value", "block", "header", "height"],
    message
  );
  return newHeight;
};
export const HEIGHT_QUERY =
  '{"jsonrpc": "2.0","method": "subscribe","id":"0","params":{"query":"tm.event=\'NewBlock\'"}}';

export const COSMOS_HEIGHT = "ws://rpc.cosmoshub.bigdipper.live/websocket";

export const AKASH_HEIGHT = "ws://rpc.akash.forbole.com/websocket";

export const KAVA_HEIGHT = "ws://rpc.kava.forbole.com/websocket";
