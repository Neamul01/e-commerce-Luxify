import { Avatar, Button, Text } from "@mantine/core";
import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function ShoppingCartTable({ item }: any) {
  const [count, setCount] = useState(Number(item.quantity));
  //   console.log(item);

  return (
    <tr key={item.id} className="!border-0">
      <td>
        <Avatar size={76} src={item.avatar} radius={26} />
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
            onClick={() => setCount(count - 1)}
            className="border-r-0 border py-2 px-3 cursor-pointer"
            disabled={count === 0}
          >
            -
          </button>
          <p className="border py-2 px-3">
            {" "}
            {count} {item.quantity}{" "}
          </p>
          <button
            onClick={() => setCount(count + 1)}
            className="border-l-0 border py-2 px-3 cursor-pointer"
          >
            +
          </button>
        </div>
      </td>
      <td className="!py-6">{item.subtotal}</td>
      <td className="!py-6">
        <Button
          variant="subtle"
          className="text-gray-700 hover:!bg-transparent border-none p-0"
        >
          <RiCloseCircleLine className="text-xl" />
        </Button>
      </td>
    </tr>
  );
}
