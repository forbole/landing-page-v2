import React from "react";
import Carousel from "react-multi-carousel";
import {
  CarouselCSS,
  TestCSS,
  MoreTestCSS,
  MaxWidthContainerCSS,
} from "./styles";
import { dummyData } from "../carousel_item/config";
import Post from "../carousel_item/news_posts";
import { Next } from "@icons";

const { main, blogs } = dummyData;

const ButtonGroup = (props: any) => {
  const { next, previous } = props;

  return (
    <MoreTestCSS>
      <TestCSS onClick={() => previous()} className="left">
        <Next />
      </TestCSS>
      <TestCSS onClick={() => next()} className="right">
        <Next />
      </TestCSS>
    </MoreTestCSS>
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
<<<<<<< HEAD
          customLeftArrow={<CustomArrows direction="left" />}
          customRightArrow={<CustomArrows direction="right" />}
=======
          customLeftArrow={<></>}
          customRightArrow={<></>}
          // customLeftArrow={<CustomArrows direction="left" />}
          // customRightArrow={<CustomArrows direction="right" />}
>>>>>>> 94bf926b36c9918c916fde083fbd7b407cd03774
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
<<<<<<< HEAD
          renderButtonGroupOutside={false}
=======
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
>>>>>>> 94bf926b36c9918c916fde083fbd7b407cd03774
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
<<<<<<< HEAD
          slidesToSlide={1}
=======
          slidesToSlide={3}
>>>>>>> 94bf926b36c9918c916fde083fbd7b407cd03774
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
