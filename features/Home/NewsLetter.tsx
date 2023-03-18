import { Input, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import CustomButton from "../../components/Buttons/CustomButton";
import img1 from "../../public/newsletter/3.jpg";
import img2 from "../../public/newsletter/4.jpg";

export default function NewsLetter() {
  return (
    <div className="bg-white w-full h-full pt-16 pb-10">
      <div className="flex gap-6 justify-center max-w-7xl mx-auto h-full">
        <div className="w-[30%] h-auto flex flex-col justify-between shadow-lg">
          <div className="w-full h-auto flex flex-col justify-between relative">
            <Image src={img1} alt="newsletter" />
            <div className="absolute top-6 left-8">
              <p className="text-xl font-bold">Flash Sale</p>
              <p className="text-2xl font-extrabold uppercase text-blue-600">
                up to 50% off
              </p>
              <Text
                color="dimmed"
                component="p"
                className="capitalize text-sm mt-4"
              >
                From Luxify store
              </Text>
            </div>
          </div>
          <div className="text-3xl font-bold uppercase w-full text-center">
            SIGN UP TO OUR NEWSLETTER
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full px-6">
              <Input placeholder="Your email" size="xl" />
            </div>
            <div className="w-full pb-6 px-6">
              <CustomButton
                size="xl"
                customClass="w-full uppercase text-base"
                Bg="bg-blue-600"
                text="subscribe now"
              />
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          <Image src={img2} alt="newsletter" className="w-full" />
        </div>
      </div>
    </div>
  );
}
