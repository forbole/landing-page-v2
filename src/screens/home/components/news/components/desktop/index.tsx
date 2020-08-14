import React from "react";
import Carousel from "react-multi-carousel";
import { CarouselCSS } from "./styles";
import { dummyData } from "../carousel_item/config";
import Post from "../carousel_item/news_posts";
import { MaxWidthContainerCSS } from "@styles/components";
import CustomArrows from "./components";

const { main, blogs } = dummyData;

const CarouselBlogPosts = () => {
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
          customLeftArrow={<CustomArrows />}
          customRightArrow={<CustomArrows />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
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
          slidesToSlide={1}
          swipeable
        >
          <Post main post={main} />
          {blogs.map((x, i) => (
            <Post key={i} post={x} />
          ))}
        </Carousel>
      </MaxWidthContainerCSS>
    </CarouselCSS>
  );
};

export default CarouselBlogPosts;
