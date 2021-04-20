import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import {
  CarouselCSS,
  ArrowCSS,
  CarouselArrowCSS,
  MaxWidthContainerCSS,
} from "./styles";
import useWindowSize from "@utils/get_screen_size";
import NetworkBlock from "../network_block";
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

const CarouselNetworks = ({ network }: any) => {
  const { width } = useWindowSize();
  const responsive: any = {
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 3,
      // partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1100, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      // partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      // partialVisibilityGutter: 10,
    },
  };

  const extraProps = {};

  if (width >= responsive.tablet.breakpoint.max) {
    extraProps["customButtonGroup"] = <ButtonGroup />;
    // extraProps["dotListClass"] = "react-multi-carousel-dot-list";
  }

  const [activeItem, setActiveItem] = useState(0);

  const active = (x) => {
    setActiveItem(x);
  };

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
          itemClass="carouselItem"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          // customButtonGroup={<ButtonGroup />}
          renderDotsOutside={true}
          responsive={responsive}
          showDots={width <= responsive.tablet.breakpoint.max ? true : false}
          // renderDotsOutside={true}
          sliderClass=""
          slidesToSlide={3}
          swipeable
          beforeChange={(nextSlide, { currentSlide }) => {
            active(nextSlide - 2);
          }}
          {...extraProps}
        >
          {network.map((x, i) => (
            <NetworkBlock
              key={i}
              icon={x.icon}
              denom={x.network?.denom}
              title={x.network?.title}
              usd={x.network?.totalMarketValue}
              token={x.network?.totalToken}
              percent={x.network?.voting?.percent}
              active={i == activeItem ? true : false}
            />
          ))}
        </Carousel>
      </MaxWidthContainerCSS>
    </CarouselCSS>
  );
};

export default CarouselNetworks;
