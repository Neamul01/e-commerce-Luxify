import { StaticImageData } from "next/image";
import React from "react";
import ProductCard from "../../components/Products/ProductCard";
import img1 from "../../public/products/1.jpg";
import img2 from "../../public/products/2.jpg";

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
  {
    id: 5,
    img: [img1, img2],
    title: "Fashionable Watch",
    price: 39,
    rating: 3.5,
  },
  {
    id: 6,
    img: [img2, img1],
    title: "Fashionable Watch",
    price: 39,
    rating: 3.5,
  },
  {
    id: 7,
    img: [img1, img2],
    title: "Fashionable Watch",
    price: 39,
    rating: 3.5,
  },
  {
    id: 8,
    img: [img2, img1],
    title: "Fashionable Watch",
    price: 39,
    rating: 3.5,
  },
];

export default function BestSeller() {
  return (
    <div className="bg-[#f7fbfe] w-full h-full pt-24 pb-10">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold w-full text-center mb-6">
          Best Sellers
        </h2>
        <div className="w-full h-10 bg-white"></div>
        <div className="w-full grid grid-cols-4 gap-1">
          {productCards.map((card) => {
            return (
              <div className="" key={card.id}>
                <ProductCard props={card} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
