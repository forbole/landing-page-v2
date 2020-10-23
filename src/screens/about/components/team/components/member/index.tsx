import React from "react";
import { MemberCSS, SocialMediaContainerCSS } from "./styles";
import { LinkedIn, Twitter, Github } from "@icons";
const Member = (props: any) => {
  const {
    name = "",
    position = "",
    image = "static/images/team/123.png",
    links = {},
  } = props;

  return (
    <MemberCSS>
      <img src={image} />
      <p className="name">{name}</p>
      <p className="position">{position}</p>
      <SocialMediaContainerCSS>
        {!!links.twitter && <Twitter />}
        {!!links.linkedin && <LinkedIn />}
        {!!links.github && <Github />}
      </SocialMediaContainerCSS>
    </MemberCSS>
  );
};

export default Member;
