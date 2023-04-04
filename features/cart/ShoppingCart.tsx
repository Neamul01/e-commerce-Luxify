import { useState } from "react";
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

type TableSelectionProps = {
  id: string;
  avatar: string;
  product: string;
  price: string;
  quantity: string;
  subtotal: number;
}[];

const data: TableSelectionProps = [
  {
    id: "1",
    avatar: "https://avatars0.githubusercontent.com/u/9947422?s=460&v=4",
    product: "Fashionable Watch-Black-Large",
    price: "20",
    quantity: "2",
    subtotal: 200,
  },
  {
    id: "2",
    avatar: "https://avatars1.githubusercontent.com/u/9947422?s=460&v=4",
    product: "Artur Sinitsyn",
    price: "20",
    quantity: "2",
    subtotal: 200,
  },
  {
    id: "3",
    avatar: "https://avatars2.githubusercontent.com/u/9947422?s=460&v=4",
    product: "Artur Sinitsyn",
    price: "20",
    quantity: "2",
    subtotal: 200,
  },
];

export default function ShoppingCart() {
  const { classes } = useStyles();
  const [count, setCount] = useState(0);

  const rows = data.map((item) => {
    return (
      <tr key={item.id}>
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
      </tr>
    );
  });

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <ScrollArea>
          <Table miw={800} verticalSpacing="sm">
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </div>
      <div className="col-span-4"></div>
    </div>
  );
}
