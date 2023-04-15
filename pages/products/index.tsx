import { Button, Pagination, Select } from "@mantine/core";
import React from "react";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import img1 from "../../public/products/1.jpg";
import img2 from "../../public/products/2.jpg";
import { StaticImageData } from "next/image";
import ProductCard from "../../components/Products/ProductCard";
import NavBroadcrumbs from "../../components/NavBroadcrumbs";

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

export default function index() {
  const items = [{ title: "Products", href: "#" }];
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 pb-20">
        {/* navigation */}
        <NavBroadcrumbs items={items} />

        {/* searches */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-sm text-gray-600">
            <Select
              placeholder="Select Size"
              size="xs"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              className="max-w-[7rem]"
            />
            <Select
              placeholder="Select Color"
              size="xs"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              className="max-w-[7rem]"
            />
            <Select
              placeholder="Select Price"
              size="xs"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              className="max-w-[7rem]"
            />
            <Select
              placeholder="Default Sorting"
              size="xs"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              className="max-w-[8rem]"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-black uppercase text-xs font-bold">Show:</p>
            <Select
              defaultValue={"12"}
              size="xs"
              data={[
                { value: "12", label: "12" },
                { value: "24", label: "24" },
                { value: "36", label: "36" },
              ]}
              className="max-w-[4rem]"
            />
            <div className="flex gap-3 ml-3">
              <Button className="cursor-pointer p-0 m-0 border-0 text-gray-800 h-auto hover:!bg-transparent">
                <FaList className="font-extrabold" />
              </Button>
              <Button
                disabled
                className="cursor-pointer p-0 m-0 border-0 text-gray-800 h-auto hover:!bg-transparent"
              >
                <BsFillGrid3X3GapFill />
              </Button>
            </div>
          </div>
        </div>

        {/* products */}
        <div className="">
          <div className="w-full grid md:grid-cols-4 gap-[1px] bg-gray-200">
            {productCards.map((card) => {
              return (
                <div className="px-4 md:px-0" key={card.id}>
                  <ProductCard props={card} />
                </div>
              );
            })}
          </div>

          {/* pagination */}
          <div className="flex justify-between items-center pt-10  border-t">
            <p className="text-sm">Showing 1–12 of 20 results</p>
            <Pagination total={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
