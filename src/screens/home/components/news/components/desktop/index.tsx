import React from "react";
import Carousel from "react-multi-carousel";
import { CarouselCSS, TestCSS } from "./styles";
import { dummyData } from "../carousel_item/config";
import Post from "../carousel_item/news_posts";
import { MaxWidthContainerCSS } from "@styles/components";
import { Next } from "@icons";

const { main, blogs } = dummyData;


const CustomArrows = ({ onClick, direction }: any) => {
  return (
    <TestCSS
      className={direction}
      // className="react-multiple-carousel__arrow"
      onClick={onClick}
    >
      <Next />
    </TestCSS>
  )
}

const ButtonGroup = (props: any) => {
  const {
    next,
    previous,
    carouselState: { currentSlide, totalItems, slidesToShow }
  } = props;

  return (
    <div>
      <TestCSS
        onClick={() => previous()}><Next /></TestCSS>
      <TestCSS
        // className={currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"}
        onClick={() => next()}
      >
        <Next />
      </TestCSS>
    </div>
  );
};

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
          customLeftArrow={<></>}
          customRightArrow={<></>}
          // customLeftArrow={<CustomArrows direction="left" />}
          // customRightArrow={<CustomArrows direction="right" />}
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
