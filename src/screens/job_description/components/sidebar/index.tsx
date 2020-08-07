import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { Arrow } from "@icons";
import { SidebarCSS } from "./styles";
import { fakeData } from "../../config";

const Sidebar = (props: any) => {
  const { active } = props;
  const router = useRouter();
  console.log(props, "props");
  console.log(router.query, "pathname");
  const {
    query: { title = "" },
  } = router;

  return (
    <SidebarCSS>
      <ul>
        {fakeData.map((x) => (
          <Link key={x.position} href={`/positions/${x.key}`}>
            <a className={classNames({ active: x.key === title })}>
              <li>
                {x.position} <Arrow />
              </li>
              <hr />
            </a>
          </Link>
        ))}
      </ul>
    </SidebarCSS>
  );
};

export default Sidebar;
