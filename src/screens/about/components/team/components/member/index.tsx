import React from "react";
import Image from "next/image";
import { MemberCSS, SocialMediaContainerCSS } from "./styles";
import { LinkedIn, Twitter, Github } from "@icons";
const Member = (props: any) => {
  const {
    name = "",
    position = "",
    image = "/static/images/team/placeholder.jpg",
    links = {},
  } = props;

  return (
    <MemberCSS>
      <div className="image-container">
        <Image
          src={image}
          alt={"Teammates' Icon"}
          className="image"
          layout="fill"
        />
      </div>
      <p className="name">{name}</p>
      <p className="position">{position}</p>
      <SocialMediaContainerCSS>
        {!!links.twitter && (
          <a href={links.twitter} target="_blank" rel="noreferrer">
            <Twitter />
          </a>
        )}
        {!!links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <LinkedIn />
          </a>
        )}
        {!!links.github && (
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github />
          </a>
        )}
      </SocialMediaContainerCSS>
    </MemberCSS>
  );
};

export default Member;
