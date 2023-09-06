import { createStyles, Table, ScrollArea, Button, Input } from "@mantine/core";
import CustomButton from "../../components/Buttons/CustomButton";
import ShoppingCartTable from "./ShoppingCartTable";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CardTotal from "./CardTotal";
import { useSelector } from "react-redux";
import { selectCartState } from "../../store/slices/cartSlice";

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
  const cart = useSelector(selectCartState);

  console.log(cart);
  return (
    <div className="grid md:grid-cols-12 gap-4">
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return <ShoppingCartTable key={item} item={item} />;
              })}
            </tbody>
          </Table>
        </ScrollArea>
        <div className="w-full flex justify-between my-6">
          <div className="w-full">
            <CustomButton
              text="Continue Shopping"
              iconWithClass={
                <AiOutlineArrowLeft className="font-bold text-xl mr-2" />
              }
              iconPosition="left"
            />
          </div>
          <div className="w-full flex justify-end">
            <Button
              className="text-gray-500 border-gray-500"
              size="md"
              variant="outline"
            >
              Update cart
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 my-12">
          <h2 className="text-xl font-extrabold uppercase">coupon discount</h2>
          <Input
            type="text"
            variant="unstyled"
            placeholder="Enter coupon code here..."
            className="p-2 border-b"
          />
          <div className="">
            <Button
              size="md"
              variant="outline"
              className="text-black border-black"
            >
              Apply Coupon
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-4 border p-6 md:px-10">
        <CardTotal />
      </div>
    </div>
  );
}
