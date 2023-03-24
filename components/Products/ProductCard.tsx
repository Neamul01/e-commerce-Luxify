import { createStyles, Rating, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "../Buttons/CustomButton";

type props = {
  props: {
    id: number;
    img: StaticImageData[];
    title: string;
    price: number;
    rating: number;
    status?: string;
  };
};
export default function ProductCard(props: props) {
  const { hovered, ref } = useHover();
  const { id, img, title, price, rating, status } = props.props;

  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center bg-white py-4 cursor-pointer relative`}
      ref={ref}
    >
      {status && (
        <p className="absolute top-4 left-8 bg-yellow-500 text-white text-sm font-bold py-1 px-3 rounded-sm">
          {status}
        </p>
      )}
      <Image src={hovered ? img[1] : img[0]} alt="product" />
      {hovered && (
        <Link
          href={`/products/${id}`}
          className="absolute bottom-[23%] bg-green-600 w-full text-center"
        >
          <CustomButton Bg="bg-blue-600" customClass="uppercase w-full" />
        </Link>
      )}
      <div className="flex flex-col gap-2 justify-center items-center">
        <Text component="p" color="dimmed" size="sm">
          {title}
        </Text>
        <Text component="p" size="md">
          ${price}
        </Text>
        <Rating value={rating} fractions={2} readOnly />
      </div>
    </div>
  );
}
