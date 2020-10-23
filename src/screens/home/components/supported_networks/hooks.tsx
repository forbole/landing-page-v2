import { useEffect, useRef, useState } from "react";
import * as R from "ramda";

export const useSupportedNetworkHook = () => {
  const [state, setState] = useState({
    cosmos: "---",
  });

  const handleSetState = (stateChange: any) => {
    const newState = R.mergeDeepLeft(stateChange, state);
    setState(newState);
  };

  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(
      "ws://rpc.cosmoshub.bigdipper.live/websocket?tm.event='NewBlock'"
    );
    ws.current.onopen = () => {
      ws.current.send(
        '{"jsonrpc": "2.0","method": "subscribe","id":"0","params":{"query":"tm.event=\'NewBlock\'"}}'
      );
    };
    ws.current.onclose = () => console.log("ws closed");

    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      const newHeight = R.pathOr(
        "---",
        ["result", "data", "value", "block", "header", "height"],
        message
      );
      handleSetState({
        cosmos: newHeight,
      });
    };
  }, []);
  return {
    state,
  };
};
