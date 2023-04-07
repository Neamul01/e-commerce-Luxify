import { Button, Notification } from "@mantine/core";
import React from "react";
import { BsArrowLeft, BsCheck2Circle } from "react-icons/bs";
import OrderSummeryCard from "./OrderSummeryCard";

export default function CompleteOrder() {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-sm mx-auto border p-4 flex justify-center items-center shadow-lg rounded-xl">
        <BsCheck2Circle size="6rem" className="bg-transparent text-green-500" />
        <div className="w-full pl-4">
          <p className="text-xl font-bold">Thank You</p>
          <p className="text-gray-500">Your order has been received</p>
        </div>
      </div>
      <OrderSummeryCard />

      {/* order details */}
      <div className="w-full my-10">
        <h2 className="text-2xl font-bold uppercase mb-4">order details</h2>
        <div className="py-8 px-12 border">
          <p className="font-bold capitalize pb-6 border-b text-lg">product</p>
          <p className="w-full flex justify-between text-sm py-8">
            <span>Fashionable Watch-Black-Large x 1</span>
            <span>$30</span>
          </p>
          <p className="w-full flex justify-between pb-6 border-b  text-md">
            <span className="font-bold">Subtotal</span>
            <span>$30</span>
          </p>
          <p className="w-full flex justify-between py-6 border-b  text-md">
            <span className="font-bold">Shipping</span>
            <span>Free shipping</span>
          </p>
          <p className="w-full flex justify-between py-6 border-b  text-md">
            <span className="font-bold">Payment method</span>
            <span>Cash On Delivery</span>
          </p>
          <p className="w-full flex justify-between py-4 text-md">
            <span className="font-bold">Total</span>
            <span className="font-bold text-xl">$30</span>
          </p>
        </div>
      </div>

      {/* billing address */}
      <div className="w-full border-b pb-4">
        <h2 className="text-xl font-bold uppercase mb-4">billing address</h2>
        <div className="flex flex-col gap-3">
          <p className="text-gray-500 text-sm">John Doe</p>
          <p className="text-gray-500 text-sm">Luxufy Company</p>
          <p className="text-gray-500 text-sm">Dhaka</p>
          <p className="text-gray-500 text-sm">29 pathopoth</p>
          <p className="text-gray-500 text-sm">014839384</p>
          <p className="text-gray-500 text-sm my-8">mail@example.com</p>
        </div>
      </div>
      <div className="mb-8">
        <Button
          leftIcon={<BsArrowLeft size={"1.5rem"} />}
          size="lg"
          className="uppercase bg-gray-900 text-sm"
        >
          back to list
        </Button>
      </div>
    </div>
  );
}
