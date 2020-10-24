import { useEffect, useRef, useState } from "react";
import * as R from "ramda";
import {
  getNewHeight,
  HEIGHT_QUERY,
  COSMOS_HEIGHT,
  AKASH_HEIGHT,
  KAVA_HEIGHT,
} from "./config";

export const useSupportedNetworkHook = () => {
  const [state, setState] = useState({
    cosmos: "---",
    akash: "---",
    kava: "---",
  });

  const handleSetState = (stateChange: any) => {
    const newState = R.mergeDeepLeft(stateChange, state);
    setState(newState);
  };

  const networks = {
    cosmos: useRef(null),
    akash: useRef(null),
    kava: useRef(null),
  };

  useEffect(() => {
    // connections
    networks.cosmos.current = new WebSocket(COSMOS_HEIGHT);
    networks.akash.current = new WebSocket(AKASH_HEIGHT);
    networks.kava.current = new WebSocket(KAVA_HEIGHT);

    // on open
    networks.cosmos.current.onopen = () => {
      networks.cosmos.current.send(HEIGHT_QUERY);
    };
    networks.akash.current.onopen = () => {
      networks.akash.current.send(HEIGHT_QUERY);
    };
    networks.kava.current.onopen = () => {
      networks.kava.current.send(HEIGHT_QUERY);
    };
    // onclose
    networks.cosmos.current.onclose = () => console.log("cosmos closed");
    networks.akash.current.onclose = () => console.log("akash closed");
    networks.kava.current.onclose = () => console.log("kava closed");

    // unsubscribe
    return () => {
      networks.cosmos.current.close();
      networks.akash.current.close();
      networks.kava.current.close();
    };
  }, []);

  useEffect(() => {
    networks.cosmos.current.onmessage = (e) => {
      handleSetState({
        cosmos: getNewHeight(e),
      });
    };

    networks.akash.current.onmessage = (e) => {
      handleSetState({
        akash: getNewHeight(e),
      });
    };

    networks.kava.current.onmessage = (e) => {
      handleSetState({
        kava: getNewHeight(e),
      });
    };
  }, [handleSetState]);
  return {
    state,
  };
};
