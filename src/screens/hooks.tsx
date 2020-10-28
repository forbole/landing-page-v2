import { useEffect, useRef, useState } from "react";
import * as R from "ramda";
import {
  getNewHeight,
  HEIGHT_QUERY,
  getNetworkInfo,
} from "@src/utils/network_info";

export const useGetLatestHeightHook = () => {
  const [state, setState] = useState({
    cosmos: "---",
    akash: "---",
    kava: "---",
    terra: "---",
    ["band-protocol"]: "---",
    likecoin: "---",
    iris: "---",
  });

  const handleSetState = (stateChange: any) => {
    const newState = R.mergeDeepLeft(stateChange, state);
    setState(newState);
  };

  const networks = {
    cosmos: useRef(null),
    akash: useRef(null),
    kava: useRef(null),
    likecoin: useRef(null),
    ["terra-money"]: useRef(null),
    ["band-protocol"]: useRef(null),
    iris: useRef(null),
  };

  useEffect(() => {
    // connections
    networks.cosmos.current = new WebSocket(
      getNetworkInfo("cosmos")?.heightSocket
    );
    networks.akash.current = new WebSocket(
      getNetworkInfo("akash")?.heightSocket
    );
    networks.kava.current = new WebSocket(getNetworkInfo("kava")?.heightSocket);
    networks.likecoin.current = new WebSocket(
      getNetworkInfo("likecoin")?.heightSocket
    );
    networks["terra-money"].current = new WebSocket(
      getNetworkInfo("terra-money")?.heightSocket
    );
    networks["band-protocol"].current = new WebSocket(
      getNetworkInfo("band-protocol")?.heightSocket
    );
    networks.iris.current = new WebSocket(getNetworkInfo("iris")?.heightSocket);

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
    networks.likecoin.current.onopen = () => {
      networks.likecoin.current.send(HEIGHT_QUERY);
    };
    networks["terra-money"].current.onopen = () => {
      networks["terra-money"].current.send(HEIGHT_QUERY);
    };
    networks["band-protocol"].current.onopen = () => {
      networks["band-protocol"].current.send(HEIGHT_QUERY);
    };
    networks.iris.current.onopen = () => {
      networks.iris.current.send(HEIGHT_QUERY);
    };

    // onclose
    if (process.env.NODE_ENV !== "production") {
      networks.cosmos.current.onclose = () => console.log("cosmos closed");
      networks.akash.current.onclose = () => console.log("akash closed");
      networks.kava.current.onclose = () => console.log("kava closed");
      networks.likecoin.current.onclose = () => console.log("likecoin closed");
      networks["terra-money"].current.onclose = () =>
        console.log("terra closed");
      networks["band-protocol"].current.onclose = () =>
        console.log("band-protocol closed");
      networks.iris.current.onclose = () => console.log("iris closed");
    }

    // unsubscribe
    return () => {
      networks.cosmos.current.close();
      networks.akash.current.close();
      networks.kava.current.close();
      networks.likecoin.current.close();
      networks["terra-money"].current.close();
      networks["band-protocol"].current.close();
      networks.iris.current.close();
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

    networks.likecoin.current.onmessage = (e) => {
      handleSetState({
        likecoin: getNewHeight(e),
      });
    };

    networks["terra-money"].current.onmessage = (e) => {
      handleSetState({
        ["terra-money"]: getNewHeight(e),
      });
    };

    networks["band-protocol"].current.onmessage = (e) => {
      handleSetState({
        ["band-protocol"]: getNewHeight(e),
      });
    };

    networks.iris.current.onmessage = (e) => {
      console.log("iris");
      console.log(JSON.parse(e.data));
      handleSetState({
        iris: getNewHeight(e),
      });
    };
  }, [handleSetState]);
  return {
    state,
  };
};
