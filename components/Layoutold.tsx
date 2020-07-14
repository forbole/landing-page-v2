import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import "./Navbar.scss";
import "./Layoutdef.scss";
import "./indexdef.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="Layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header className="main-header">
      <div className="logo">
        <Link href="/">
          <a>
            <img
              src="/forbole_logo/forbole_logo_red.svg"
              alt="Forbole Logo"
            ></img>
          </a>
        </Link>
      </div>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="menu-icon_line"></span>
      </label>
      <ul className="nav-links">
        <li className="nav-link">
          <Link href="stake-now">
            <a>Stake Now</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="staking">
            <a>Staking</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="big-dipper">
            <a>Big Dipper</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="desmos">
            <a>Desmos</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="about">
            <a>About</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="contact">
            <a>Contact</a>
          </Link>
        </li>
        <li className="nav-link dropdown">
          <Link href="language">
            <ul className="dropdown-menu">
              <li className="dropdown-item">ENG</li>
              <li className="dropdown-item">CHN</li>
            </ul>
          </Link>
        </li>
      </ul>
    </header>
    {children}
    <footer>
      <hr />
      <span>(Footer)</span>
    </footer>
  </div>
);

export default Layout;
