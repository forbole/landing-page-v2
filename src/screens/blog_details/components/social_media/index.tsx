import React from "react";
import { useRouter } from "next/router";
import { Telegram, Facebook, Twitter, LinkedIn } from "@icons";
import { SocialMediaCSS } from "./styles";

const SocialMedia = (props: any) => {
  const { title = "Forbole " } = props;
  const router = useRouter();
  const path = router.asPath;
  const shareUrl = `${process.env.NEXT_PUBLIC_URL}${path}`;
  console.log(shareUrl);

  const handleClick = (url: string) => {
    const config: { [key: string]: string | number } = {
      height: 400,
      width: 550,
      location: "no",
      toolbar: "no",
      status: "no",
      directories: "no",
      menubar: "no",
      scrollbars: "yes",
      resizable: "no",
      centerscreen: "yes",
      chrome: "yes",
    };

    window.open(
      url,
      "",
      Object.keys(config)
        .map((key) => `${key}=${config[key]}`)
        .join(", ")
    );
  };
  return (
    <SocialMediaCSS className="social-media-container">
      <span
        onClick={() =>
          handleClick(
            `https://telegram.me/share/?url=${shareUrl}&text=${title}`
          )
        }
      >
        <Telegram />
      </span>
      <span
        onClick={() =>
          handleClick(
            `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${title}`
          )
        }
      >
        <Facebook />
      </span>
      <span
        onClick={() =>
          handleClick(
            `https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`
          )
        }
      >
        <Twitter />
      </span>

      <span
        onClick={() =>
          handleClick(
            `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&text=${title}`
          )
        }
      >
        <LinkedIn />
      </span>
    </SocialMediaCSS>
  );
};

export default SocialMedia;
