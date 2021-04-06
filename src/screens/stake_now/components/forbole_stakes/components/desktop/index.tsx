import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import {
  CarouselCSS,
  ArrowCSS,
  CarouselArrowCSS,
  MaxWidthContainerCSS,
} from "./styles";
import { useForboleStakesHook } from "../../hooks";
import { INetworkDataProps } from "../../interfaces";
import NetworkBlock from "../carousel_item/network_block";
import { Next } from "@icons";
import { networkFunctions } from "@src/screens/stake_now/utils";

const ButtonGroup = (props: any) => {
  const { next, previous } = props;

  return (
    <CarouselArrowCSS>
      <ArrowCSS onClick={() => previous()} className="left">
        <Next />
      </ArrowCSS>
      <ArrowCSS onClick={() => next()} className="right">
        <Next />
      </ArrowCSS>
    </CarouselArrowCSS>
  );
};

const CarouselBlogPosts = (props: any) => {
  // const networks = props;
  const hookProps = useForboleStakesHook();
  const {
    cosmos,
    terra,
    kava,
    likecoin,
    iov,
    band,
    akash,
    emoney,
    iris,
    vsys,
    totalUSD,
    selected,
  }: // isLoading,
  any = hookProps;
  const selectedData: INetworkDataProps[] = [
    { network: cosmos, icon: "cosmos-hub" },
    { network: terra, icon: "terra" },
    { network: kava, icon: "kava" },
    { network: likecoin, icon: "likecoin" },
    { network: iov, icon: "iov" },
    { network: band, icon: "band-protocol" },
    { network: akash, icon: "akash" },
    { network: emoney, icon: "e-money" },
    { network: iris, icon: "iris" },
    { network: vsys, icon: "v-system" },
  ];
  // console.log(`hiiiiiiiiiii`, selectedData);
  return (
    <CarouselCSS>
      <MaxWidthContainerCSS>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          customLeftArrow={<></>}
          customRightArrow={<></>}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={3}
          swipeable
        >
          {selectedData.map((x, i) => (
            <NetworkBlock key={i} props={x} />
          ))}
        </Carousel>
      </MaxWidthContainerCSS>
    </CarouselCSS>
  );
};

export default CarouselBlogPosts;
