import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./product.module.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

const images = [
  {
    src: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-4.jpg",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-5.jpg",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-6.jpg",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-7.jpg",
  },
  {
    src: "https://swiperjs.com/demos/images/nature-8.jpg",
  },
];

export default function ProductImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full h-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-2"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index} className="!w-full relative !h-[400px]">
              {/* style={{ position: "relative", width: "100%", height: "500px" }} */}
              <Image src={image.src} alt="product image" fill />
              {/* <div className="absolute inset-0 flex justify-center items-center">
                <ImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src={"${image.src}"},
                    },
                    largeImage: {
                      src={image.src},
                      width: 1200,
                      height: 1800,
                    },
                    enlargedImageContainerClassName: "w-screen max-w-4xl",
                  }}
                />
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* onSwiper={setThumbsSwiper} */}
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index} className=" !h-[100px] relative">
              <Image alt="product" src={image.src} fill />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
