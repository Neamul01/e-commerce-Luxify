import React from "react";
import { Carousel } from "@mantine/carousel";
import img1 from "../../public/hero/1.jpg";
import img2 from "../../public/hero/2.jpg";
import Image, { StaticImageData } from "next/image";

type CarouselInner = {
  id: number;
  img: StaticImageData;
  subtitle: string;
  title: string;
  discount?: string;
  collection: string | null;
  placement: "left" | "right";
}[];
const carouselinner: CarouselInner = [
  {
    id: 1,
    img: img1,
    subtitle: "From online store",
    title: "Highly recommended mid seasons",
    discount: "50% off",
    collection: "men",
    placement: "left",
  },
  {
    id: 2,
    img: img2,
    subtitle: "From online store",
    title: "Mid seasons sale for women's",
    discount: "10% off",
    collection: null,
    placement: "left",
  },
];

function Hero() {
  const carouselItem = carouselinner.map((item) => {
    return (
      <Carousel.Slide className="relative">
        <Image className="w-full h-full" src={item.img} alt={item.subtitle} />
        <div className="w-full h-full absolute top-0 left-0 text-black">
          <div className="w-full h-full flex flex-col">
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <h2 className="text-2xl font-bold">{item.subtitle}</h2>
            <h3 className="text-2xl font-bold">{item.discount}</h3>
          </div>
        </div>
      </Carousel.Slide>
    );
  });
  return (
    <div className="w-full h-full">
      <Carousel
        mx="auto"
        withIndicators
        className=" max-w-7xl h-[70vh] text-white"
      >
        {carouselItem}
      </Carousel>
    </div>
  );
}

export default Hero;
