import { useEffect, useRef, useState } from "react";
import * as R from "ramda";
import {
  getNewHeight,
  HEIGHT_QUERY,
  COSMOS_HEIGHT,
  AKASH_HEIGHT,
  KAVA_HEIGHT,
  TERRA_HEIGHT,
  // IRIS_HEIGHT,
} from "./config";

export const useSupportedNetworkHook = () => {
  const [state, setState] = useState({
    cosmos: "---",
    akash: "---",
    kava: "---",
    terra: "---",
    // iris: "---",
  });

  const handleSetState = (stateChange: any) => {
    const newState = R.mergeDeepLeft(stateChange, state);
    setState(newState);
  };

  const networks = {
    cosmos: useRef(null),
    akash: useRef(null),
    kava: useRef(null),
    ["terra-money"]: useRef(null),
    // iris: useRef(null),
  };

  useEffect(() => {
    // connections
    networks.cosmos.current = new WebSocket(COSMOS_HEIGHT);
    networks.akash.current = new WebSocket(AKASH_HEIGHT);
    networks.kava.current = new WebSocket(KAVA_HEIGHT);
    networks["terra-money"].current = new WebSocket(TERRA_HEIGHT);
    // networks.iris.current = new WebSocket(IRIS_HEIGHT);

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
    networks["terra-money"].current.onopen = () => {
      networks["terra-money"].current.send(HEIGHT_QUERY);
    };
    // networks.iris.current.onopen = () => {
    //   networks.iris.current.send(HEIGHT_QUERY);
    // };
    // onclose
    if (process.env.NODE_ENV !== "production") {
      networks.cosmos.current.onclose = () => console.log("cosmos closed");
      networks.akash.current.onclose = () => console.log("akash closed");
      networks.kava.current.onclose = () => console.log("kava closed");
      networks["terra-money"].current.onclose = () =>
        console.log("terra closed");
      // networks.iris.current.onclose = () => console.log("iris closed");
    }

    // unsubscribe
    return () => {
      networks.cosmos.current.close();
      networks.akash.current.close();
      networks.kava.current.close();
      networks["terra-money"].current.close();
      // networks.iris.current.close();
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

    networks["terra-money"].current.onmessage = (e) => {
      handleSetState({
        ["terra-money"]: getNewHeight(e),
      });
    };

    // networks.iris.current.onmessage = (e) => {
    //   handleSetState({
    //     iris: getNewHeight(e),
    //   });
    // };
  }, [handleSetState]);
  return {
    state,
  };
};
