import React from "react";
import Carousel from "react-multi-carousel";
import {
  CarouselCSS,
  ArrowCSS,
  CarouselArrowCSS,
  MaxWidthContainerCSS,
} from "./styles";
import Post from "../carousel_item/news_posts";
import { Next } from "@icons";

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
  const { posts } = props;
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
          {posts.map((x, i) => (
            <Post key={i} post={x} />
          ))}
        </Carousel>
      </MaxWidthContainerCSS>
    </CarouselCSS>
  );
};

export default CarouselBlogPosts;
