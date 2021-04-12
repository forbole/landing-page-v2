import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import {
  CarouselCSS,
  ArrowCSS,
  CarouselArrowCSS,
  MaxWidthContainerCSS,
} from "./styles";
import useWindowSize from "@utils/get_screen_size";
import { useForboleStakesHook } from "../../hooks";
import { INetworkDataProps } from "../../interfaces";
import NetworkBlock from "../carousel_item/network_block";
import { Next } from "@icons";
import { networkFunctions } from "@src/screens/stake_now/utils";

const ButtonGroup = (props: any) => {
  console.log(`props`, props);
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

const CarouselNetworks = ({ network }: any) => {
  // const networks = props;
  // const networkData = { props };
  // console.log(`props`, typeof networkData);
  // const {
  //   cosmos,
  //   terra,
  //   kava,
  //   likecoin,
  //   iov,
  //   band,
  //   akash,
  //   emoney,
  //   iris,
  //   vsys,
  //   totalUSD,
  //   selected,
  // }: // isLoading,
  // any = props;
  // const selectedData: INetworkDataProps[] = [
  //   { network: cosmos, icon: "cosmos-hub" },
  //   { network: terra, icon: "terra" },
  //   { network: kava, icon: "kava" },
  //   { network: likecoin, icon: "likecoin" },
  //   { network: iov, icon: "iov" },
  //   { network: band, icon: "band-protocol" },
  //   { network: akash, icon: "akash" },
  //   { network: emoney, icon: "e-money" },
  //   { network: iris, icon: "iris" },
  //   { network: vsys, icon: "v-system" },
  // ];
  // console.log(`hiiiiiiiiiii`, selectedData);
  const { width } = useWindowSize();
  const responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // slidesToSlide: 2 // optional, default to 1.
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
      partialVisibilityGutter: 10,
    },
  };

  const extraProps = {};

  if (width >= responsive.tablet.breakpoint.max) {
    extraProps["customButtonGroup"] = <ButtonGroup />;
    // extraProps["dotListClass"] = "react-multi-carousel-dot-list";
  }
  return (
    <CarouselCSS>
      <MaxWidthContainerCSS>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={width <= responsive.tablet.breakpoint.max ? true : false}
          className=""
          containerClass="container"
          customLeftArrow={<></>}
          customRightArrow={<></>}
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          // customButtonGroup={<ButtonGroup />}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={width <= responsive.tablet.breakpoint.max ? true : false}
          sliderClass=""
          slidesToSlide={3}
          swipeable
          {...extraProps}
        >
          {network.map((x, i) => (
            // <NetworkBlock key={i} props={x} />
            <>
              <NetworkBlock
                key={i}
                icon={x.icon}
                denom={x.network?.denom}
                title={x.network?.title}
                usd={x.network?.totalMarketValue}
                token={x.network?.totalToken}
                percent={x.network?.voting?.percent}
                itemClass
                active={true}
              />
            </>
          ))}
        </Carousel>
      </MaxWidthContainerCSS>
    </CarouselCSS>
  );
};

export default CarouselNetworks;
