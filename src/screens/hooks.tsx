import { useEffect, useRef, useState } from "react";
import * as R from "ramda";
import {
  getNewHeight,
  HEIGHT_QUERY,
  POLKADOT_HEIGHT_QUERY,
  getNetworkInfo,
  getPolkadotNewHeight,
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
    iov: "---",
    ["e-money"]: "---",
    polkadot: "---",
    kusama: "---",
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
    iov: useRef(null),
    ["e-money"]: useRef(null),
    polkadot: useRef(null),
    kusama: useRef(null),
  };

  useEffect(() => {
    // ===============================
    // connections
    // ===============================
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
    networks.iov.current = new WebSocket(getNetworkInfo("iov")?.heightSocket);
    networks["e-money"].current = new WebSocket(
      getNetworkInfo("e-money")?.heightSocket
    );
    networks.polkadot.current = new WebSocket(
      getNetworkInfo("polkadot")?.heightSocket
    );
    networks.kusama.current = new WebSocket(
      getNetworkInfo("kusama")?.heightSocket
    );
    // ===============================
    // on open
    // ===============================
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
    networks.iov.current.onopen = () => {
      networks.iov.current.send(HEIGHT_QUERY);
    };
    networks["e-money"].current.onopen = () => {
      networks["e-money"].current.send(HEIGHT_QUERY);
    };
    networks.polkadot.current.onopen = () => {
      networks.polkadot.current.send(POLKADOT_HEIGHT_QUERY);
    };
    networks.kusama.current.onopen = () => {
      networks.kusama.current.send(POLKADOT_HEIGHT_QUERY);
    };
    // ===============================
    // onclose
    // ===============================
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
      networks.iov.current.onclose = () => console.log("iov closed");
      networks["e-money"].current.onclose = () => console.log("e-money closed");
      networks.polkadot.current.onclose = () => console.log("polkadot closed");
      networks.kusama.current.onclose = () => console.log("kusama closed");
    }
    // ===============================
    // unsubscribe
    // ===============================
    return () => {
      networks.cosmos.current.close();
      networks.akash.current.close();
      networks.kava.current.close();
      networks.likecoin.current.close();
      networks["terra-money"].current.close();
      networks["band-protocol"].current.close();
      networks.iris.current.close();
      networks.iov.current.close();
      networks["e-money"].current.close();
      networks.polkadot.current.close();
      networks.kusama.current.close();
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
      handleSetState({
        iris: getNewHeight(e),
      });
    };

    networks.iov.current.onmessage = (e) => {
      handleSetState({
        iov: getNewHeight(e),
      });
    };

    networks["e-money"].current.onmessage = (e) => {
      handleSetState({
        ["e-money"]: getNewHeight(e),
      });
    };

    networks.polkadot.current.onmessage = (e) => {
      handleSetState({
        polkadot: getPolkadotNewHeight(e),
      });
    };

    networks.kusama.current.onmessage = (e) => {
      handleSetState({
        kusama: getPolkadotNewHeight(e),
      });
    };
  }, [handleSetState]);
  return {
    state,
  };
};
