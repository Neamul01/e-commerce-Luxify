import { Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import CustomButton from "../../components/Buttons/CustomButton";
import img2 from "../../public/newsletter/4.jpg";
import NewsletterSideCard from "./NewsletterSideCard";
import { TbTruckDelivery, TbDatabase } from "react-icons/tb";
import { MdSupportAgent, MdOutlineDiscount } from "react-icons/md";

const facilitiesCard = [
  {
    id: 1,
    icon: <TbTruckDelivery className="text-5xl" />,
    title: " free shipping & return",
    description: "Get free delivery of your orders all over the world.",
    border: true,
  },
  {
    id: 2,
    icon: <MdSupportAgent className="text-5xl" />,
    title: " free shipping & return",
    description: "Get free delivery of your orders all over the world.",
    border: true,
  },
  {
    id: 3,
    icon: <TbDatabase className="text-5xl" />,
    title: " free shipping & return",
    description: "Get free delivery of your orders all over the world.",
    border: true,
  },
  {
    id: 4,
    icon: <MdOutlineDiscount className="text-5xl" />,
    title: " free shipping & return",
    description: "Get free delivery of your orders all over the world.",
  },
];

export default function NewsLetter() {
  return (
    <div className="bg-white w-full h-full pt-16 pb-10">
      <div className="flex flex-col gap-20 max-w-7xl mx-auto h-full">
        <div className="flex gap-6 justify-center w-full h-full">
          {/* side card */}
          <div className="w-[30%] h-auto flex flex-col justify-between shadow-lg">
            <NewsletterSideCard />
          </div>
          {/* full Image */}
          <div className="w-[70%]">
            <div className="relative">
              <Image src={img2} alt="newsletter" className="w-full h-full" />
              <div className="absolute top-0 left-10 w-[50%] h-full flex flex-col gap-3 justify-center text-white">
                <p className="text-xl font-bold uppercase">
                  THROUGH BLACK FRIDAY
                </p>
                <p className="text-5xl font-bold capitalize">
                  Mid Season's Sale Up to 30% Off
                </p>
                <p className="text-base">
                  Free shipping on all orders over $99.00
                </p>
                <div className="w-full">
                  <CustomButton
                    size="xl"
                    Bg="bg-white"
                    customClass="text-black uppercase text-base hover:text-white"
                    iconWithClass={<BsArrowRight className="ml-2" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* facilities */}
        <div className="w-full flex gap-8 justify-between">
          {facilitiesCard.map((item) => {
            return (
              <div className="w-full h-full flex justify-center">
                <div
                  className={`flex flex-col justify-center items-center gap-2 max-w-[15rem] ${
                    item.border ? "mr-auto" : "mx-auto"
                  }`}
                >
                  <p className="text-4xl text-blue-500">{item.icon}</p>
                  <p className="capitalize text-base font-bold">
                    free shipping & return
                  </p>
                  <Text
                    color="dimmed"
                    component="p"
                    className="text-base capitalize text-center"
                  >
                    Get free delivery of your orders all over the world.
                  </Text>
                </div>
                {item.border && (
                  <div className="w-[3px] rounded-lg h-36 bg-gray-100"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
