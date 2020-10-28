import React from "react";
import Link from "next/link";
import { useTranslation } from "i18n";
import { FooterItemsCSS } from "./styles";
import {
  forboleFooterItems,
  bigDipperFooterItems,
  desmosFooterItems,
} from "../../config";

const FooterItems = () => {
  const { t } = useTranslation("footer");
  return (
    <FooterItemsCSS>
      <hr />
      <div className="footer-content">
        {forboleFooterItems.map((x, i) => {
          if (i == 0) {
            return <li key={x.title}>{t(x.title)}</li>;
          } else {
            return (
              <Link href={x.to} key={x.display}>
                <a>
                  <li>{t(x.display)}</li>
                </a>
              </Link>
            );
          }
        })}
      </div>
      <hr />
      <div className="footer-content">
        {bigDipperFooterItems.map((y, i) => {
          if (i == 0) {
            return <li key={y.title}>{t(y.title)}</li>;
          } else {
            return (
              <a href={y.to} key={y.to} target="_blank" rel="noreferrer">
                <li>{t(y.display)}</li>
              </a>
            );
          }
        })}
      </div>
      <hr />
      <div className="footer-content">
        {desmosFooterItems.map((z, i) => {
          if (i == 0) {
            return <li key={z.title}>{t(z.title)}</li>;
          } else {
            return (
              <a href={z.to} key={z.to} rel="noreferrer" target="_blank">
                <li>{t(z.display)}</li>
              </a>
            );
          }
        })}
      </div>
      <hr />
    </FooterItemsCSS>
  );
};

export default FooterItems;
