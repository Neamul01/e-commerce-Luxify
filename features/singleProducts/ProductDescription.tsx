import { Button, Divider, Rating, Select } from "@mantine/core";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFacebook, BsHeart, BsInstagram, BsTwitter } from "react-icons/bs";
import CustomButton from "../../components/Buttons/CustomButton";
import DetailsSection from "./DetailsSection";

export default function ProductDescription() {
  const [rating, setRating] = useState(4.5);
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2">
        <div className="col-span-1">image</div>
        <div className="col-span-1 border-l pl-5">
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-bold">Fashionable Watch</p>
            <p className="text-xs text-gray-400 flex gap-6">
              <span>SKU: 123453420</span>
              <span>CATEGORIES: Electronics</span>
            </p>
            <p className="text-4xl font-bold">$39.00</p>
            <div className="flex gap-4">
              <Rating value={rating} fractions={2} readOnly />
              <p className="text-xs text-gray-400">(1 reviews)</p>
            </div>
            <p className="text-sm text-gray-500">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </p>
            <div className="w-full">
              <div className="text-base text-gray-600 flex items-center gap-2">
                <p className="">Color: </p>
                <Select
                  placeholder="Choose an option"
                  data={[
                    { value: "BLACK", label: "Black" },
                    { value: "WHITE", label: "white" },
                  ]}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="text-base text-gray-600 flex items-center gap-2">
                <p className="mr-2">Size:</p>
                <Select
                  placeholder="Choose an option"
                  data={[
                    { value: "MEDIUM", label: "Medium" },
                    { value: "LARGE", label: "Large" },
                  ]}
                />
              </div>
            </div>
            <div className="w-full border-t border-b py-3 flex items-center gap-4">
              <div className="text-base text-gray-600 flex items-center">
                <button
                  onClick={() => setCount(count - 1)}
                  className="border-r-0 border py-2 px-3 cursor-pointer"
                  disabled={count === 0}
                >
                  -
                </button>
                <p className="border py-2 px-3"> {count} </p>
                <button
                  onClick={() => setCount(count + 1)}
                  className="border-l-0 border py-2 px-3 cursor-pointer"
                >
                  +
                </button>
              </div>
              <div className="w-full">
                <CustomButton
                  disabled={count === 0 && true}
                  text="Add To Cart"
                  Bg="bg-blue-600"
                  customClass="!flex !flex-row-reverse"
                  iconPosition="left"
                  iconWithClass={
                    <AiOutlineShoppingCart className="font-bolder mr-2" />
                  }
                />
              </div>
            </div>
            <div className="flex items-center gap-8 text-gray-500">
              <p className="flex items-center gap-6 ">
                <BsFacebook />
                <BsTwitter />
                <BsInstagram />
              </p>
              <div className="h-[1.6rem] w-[1px] bg-gray-400"></div>
              <div className="" onClick={() => console.log("clicked")}>
                <CustomButton
                  text="Add To Wishlist"
                  Bg="bg-transparent"
                  customClass="text-gray-500 hover:text-blue-400 hover:!bg-transparent pl-0"
                  iconPosition="left"
                  iconWithClass={<BsHeart className="font-bolder mr-2" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-16">
        <DetailsSection />
      </div>
    </div>
  );
}
