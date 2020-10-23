import React from "react";
import { useTranslation } from "i18n";
import { Layout } from "@components";
import { NetworkContent, NetworkHeader } from "./components";

function Network(props: any) {
  const { t } = useTranslation("networks");
  const { networkKey } = props;
  return (
    <Layout title={t(`${networkKey}.title`)}>
      <NetworkHeader {...props} />
      <NetworkContent {...props} />
    </Layout>
  );
}

export default Network;
