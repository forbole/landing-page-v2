import { useEffect, useRef, useState } from "react";
import * as R from "ramda";
import {
  getNewHeight,
  HEIGHT_QUERY,
  COSMOS_HEIGHT,
  AKASH_HEIGHT,
} from "./config";

export const useSupportedNetworkHook = () => {
  const [state, setState] = useState({
    cosmos: "---",
    akash: "---",
  });

  const handleSetState = (stateChange: any) => {
    const newState = R.mergeDeepLeft(stateChange, state);
    setState(newState);
  };

  const networks = {
    cosmos: useRef(null),
    akash: useRef(null),
  };

  useEffect(() => {
    // connections
    networks.cosmos.current = new WebSocket(COSMOS_HEIGHT);
    networks.akash.current = new WebSocket(AKASH_HEIGHT);
    // on open
    networks.cosmos.current.onopen = () => {
      networks.cosmos.current.send(HEIGHT_QUERY);
    };
    networks.akash.current.onopen = () => {
      networks.akash.current.send(HEIGHT_QUERY);
    };
    // onclose
    networks.cosmos.current.onclose = () => console.log("cosmos closed");
    networks.akash.current.onclose = () => console.log("akash closed");

    // unsubscribe
    return () => {
      networks.cosmos.current.close();
      networks.akash.current.close();
    };
  }, []);

  useEffect(() => {
    networks.cosmos.current.onmessage = (e) => {
      const newHeight = getNewHeight(e);
      handleSetState({
        cosmos: newHeight,
      });
    };

    networks.akash.current.onmessage = (e) => {
      const newHeight = getNewHeight(e);
      handleSetState({
        akash: newHeight,
      });
    };
  }, [handleSetState]);
  return {
    state,
  };
};
