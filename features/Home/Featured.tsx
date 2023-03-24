import Image, { StaticImageData } from "next/image";
import React from "react";
import ProductCard from "../../components/Products/ProductCard";
import img1 from "../../public/products/1.jpg";
import img2 from "../../public/products/2.jpg";
import banner1 from "../../public/featured/5.jpg";
import banner2 from "../../public/featured/6.jpg";
import CustomButton from "../../components/Buttons/CustomButton";
import { BsArrowRight } from "react-icons/bs";

type ProductCard = {
  id: number;
  img: StaticImageData[];
  title: string;
  price: number;
  rating: number;
  status?: string;
}[];

const productCards: ProductCard = [
  {
    id: 1,
    img: [img1, img2],
    title: "Fashionable Watch",
    price: 29,
    rating: 4.5,
    status: "sale",
  },
  {
    id: 2,
    img: [img2, img1],
    title: "Fashionable Watch",
    price: 59,
    rating: 4.5,
  },
  {
    id: 3,
    img: [img1, img2],
    title: "Fashionable Watch",
    price: 39,
    rating: 3.5,
  },
  {
    id: 4,
    img: [img2, img1],
    title: "Fashionable Watch",
    price: 39,
    rating: 3.5,
  },
];
const bottomBanner = [
  {
    id: 1,
    title: "New Accessories",
    img: banner1,
    customClass: "text-black",
  },
  {
    id: 2,
    title: "Comfort Shoes",
    img: banner2,
    customClass: "text-white",
  },
];

export default function Featured() {
  return (
    <div className="bg-[#f7fbfe] w-full h-full pt-24 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col items-center justify-center ">
          <h2 className="text-3xl text-black font-semibold w-full text-center mb-6">
            Featured
          </h2>
          <div className="w-full grid md:grid-cols-4 gap-1">
            {productCards.map((card) => {
              return (
                <div className="px-4 md:px-0" key={card.id}>
                  <ProductCard props={card} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex gap-2 items-center">
          {bottomBanner.map((banner) => (
            <div key={banner.id} className="w-full relative">
              <Image src={banner.img} alt="banner" className="w-full" />
              <div
                className={`w-full h-full absolute top-0 left-10 flex flex-col justify-center ${
                  banner.customClass && banner.customClass
                }`}
              >
                <p className="font-bold text-3xl">{banner.title}</p>
                <div className="w-full">
                  <CustomButton
                    size="lg"
                    customClass={`!bg-transparent pl-0 ${banner.customClass}`}
                    iconWithClass={<BsArrowRight className="ml-2" />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
