import { Avatar, Button, Text } from "@mantine/core";
import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decreaseCartCount,
  increaseCartCount,
  removeCartState,
} from "../../store/slices/cartSlice";

export default function ShoppingCartTable({ item }: any) {
  // const [count, setCount] = useState(Number(item.count));
  const dispatch = useDispatch();
  //   console.log(item);

  return (
    <tr key={item.id} className="!border-0">
      <td>
        <Avatar size={76} src={item.img[0].src} radius={26} />
      </td>
      <td className="!py-6">
        <Text size="sm" weight={500} className="max-w-[10rem]">
          {item.product}
        </Text>
      </td>
      <td className="!py-6">${item.price}</td>
      <td className="!py-6">
        <div className="text-base text-gray-600 flex items-center">
          <button
            onClick={() => dispatch(decreaseCartCount(item))}
            className="border-r-0 border py-2 px-3 cursor-pointer"
            disabled={item.count === 0}
          >
            -
          </button>
          <p className="border py-2 px-3"> {item.count} </p>
          <button
            onClick={() => dispatch(increaseCartCount(item))}
            className="border-l-0 border py-2 px-3 cursor-pointer"
          >
            +
          </button>
        </div>
      </td>
      <td className="!py-6">{item.title}</td>
      <td className="!py-6">
        <Button
          variant="subtle"
          onClick={() => dispatch(removeCartState(item))}
          className="text-gray-700 hover:!bg-transparent border-none p-0"
        >
          <RiCloseCircleLine className="text-xl" />
        </Button>
      </td>
    </tr>
  );
}
