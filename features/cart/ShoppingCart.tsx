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
  name: string;
  email: string;
  job: string;
  subtotal: number;
}[];

const data: TableSelectionProps = [
  {
    id: "1",
    avatar: "https://avatars0.githubusercontent.com/u/9947422?s=460&v=4",
    name: "Artur Sinitsyn",
    email: "example@e.com",
    job: "Frontend developer",
    subtotal: 200,
  },
  {
    id: "2",
    avatar: "https://avatars1.githubusercontent.com/u/9947422?s=460&v=4",
    name: "Artur Sinitsyn",
    email: "example@e.com",
    job: "Frontend developer",
    subtotal: 200,
  },
  {
    id: "3",
    avatar: "https://avatars2.githubusercontent.com/u/9947422?s=460&v=4",
    name: "Artur Sinitsyn",
    email: "example@e.com",
    job: "Frontend developer",
    subtotal: 200,
  },
];

export default function ShoppingCart() {
  const { classes } = useStyles();

  const rows = data.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <Group spacing="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>
        <td>{item.email}</td>
        <td>{item.job}</td>
        <td>{item.subtotal}</td>
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
