import React from "react";
import { Carousel } from "@mantine/carousel";
import img1 from "../../public/hero/1.jpg";
import img2 from "../../public/hero/2.jpg";
import img11 from "../../public/hero/11.jpg";
import img12 from "../../public/hero/12.jpg";
import Image, { StaticImageData } from "next/image";
import { Button } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import CustomButton from "../../components/Buttons/CustomButton";

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
    placement: "right",
  },
];

const heroCards = [
  {
    id: 1,
    img: img11,
    collection_name: "new collection",
    name: "summer sale",
    customClass: "!text-white !uppercase !font-bold !pl-0",
  },
  {
    id: 2,
    img: img12,
    collection_name: "new collection",
    name: "summer sale",
    customClass: "!text-black !uppercase !font-bold !pl-0",
  },
];

function Hero() {
  const carouselItem = carouselinner.map((item) => {
    return (
      <Carousel.Slide
        key={item.id}
        className="relative overflow-hidden h-[25rem] md:h-auto"
      >
        <Image
          priority
          className="w-full h-full transform scale-125 md:scale-0 md:transform-none"
          src={item.img}
          alt={item.subtitle}
        />
        <div className="w-full h-full absolute top-0 left-0 text-black">
          <div
            className={`flex ${
              item.placement === "right" && "justify-end"
            } md:ml-32 ml-10 h-full`}
          >
            <div className="w-64 md:!w-[30rem] flex flex-col justify-center">
              <h2 className="text-lg md:text-2xl font-bold mb:mb-2">
                {item.subtitle}
              </h2>
              <h1 className="text-2xl md:text-4xl font-extrabold">
                {item.title}
              </h1>
              <h3 className="text-lg md:text-2xl font-bold text-blue-500 my-1 md:my-3">
                {item.discount}{" "}
                <span className="text-base text-gray-600">
                  For {item.collection}'s collection
                </span>
              </h3>
              <div className="!w-3xl">
                <p className="w-[12rem]">
                  <CustomButton
                    iconWithClass={<BsArrowRight className="ml-2" />}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Slide>
    );
  });

  const cards = heroCards.map((card) => {
    return (
      <div className="w-auto h-auto relative" key={card.id}>
        <Image src={card.img} alt={card.name} className="w-full" />
        <div
          className={`w-full h-full absolute top-0 left-10 ${card.customClass}`}
        >
          <div className="flex flex-col h-full justify-center uppercase">
            <h3 className="md:text-base text-xs">{card.collection_name}</h3>
            <h2 className="md:text-3xl text-xl font-bold mb-2 md:mb-7">
              {card.name}
            </h2>
            <p className=" md:flex md:justify-start ">
              <CustomButton
                size="md"
                Bg="!bg-transparent"
                hoverBg="!bg-transparent"
                customClass={card.customClass}
                iconWithClass={<BsArrowRight className="ml-2" />}
              />
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="pb-16 !bg-white w-full h-full">
      <div className="w-full max-w-7xl mx-auto h-full relative ">
        <Carousel
          mx="auto"
          withIndicators
          className=" max-w-7xl h-auto text-white"
        >
          {carouselItem}
        </Carousel>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2 w-full mt-5 ">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default Hero;
