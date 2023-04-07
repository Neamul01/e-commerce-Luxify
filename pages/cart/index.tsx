import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import CommonLayout from "../../components/Layouts/CommonLayout";
import { IoIosArrowForward } from "react-icons/io";
import ShoppingCart from "../../features/cart/ShoppingCart";
import Checkout from "../../features/cart/Checkout";
import CompleteOrder from "../../features/cart/CompleteOrder";

export default function index() {
  const [activeTab, setActiveTab] = useState("data");
  return (
    <CommonLayout customClass="pt-6 px-4 pb-20">
      <Tabs defaultValue="shopping-cart">
        <Tabs.List
          position="center"
          className="flex-row items-center w-full overflow-x-scroll md:overflow-x-hidden overflow-y-hidden flex-nowrap border-b mb-8 pb-1 border-none"
        >
          <Tabs.Tab
            value="shopping-cart"
            className={`text-lg md:text-lg font-bold uppercase ${
              activeTab === "data" && "!text-blue-500 mb-0 border-none "
            }`}
            onClick={() => setActiveTab("data")}
          >
            1.Shopping Cart
          </Tabs.Tab>
          <IoIosArrowForward className="text-xl text-gray-500 font-extrabold" />
          {/* <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}> */}
          <Tabs.Tab
            value="checkout"
            className={`text-lg md:text-lg font-bold uppercase ${
              activeTab === "info" && "!text-blue-500 mb-0 border-none "
            }`}
            onClick={() => setActiveTab("info")}
          >
            2.Checkout
          </Tabs.Tab>
          <IoIosArrowForward className="text-xl text-gray-500 font-extrabold" />
          <Tabs.Tab
            value="complete-order"
            className={`text-lg md:text-lg font-bold uppercase ${
              activeTab === "size" && "!text-blue-500 mb-0 border-none "
            }`}
            onClick={() => setActiveTab("size")}
          >
            3.complete order
          </Tabs.Tab>
        </Tabs.List>

        {/* tab contents */}
        <Tabs.Panel value="shopping-cart" pt="xs">
          <ShoppingCart />
        </Tabs.Panel>
        <Tabs.Panel value="checkout" pt="xs">
          <Checkout />
        </Tabs.Panel>
        <Tabs.Panel value="complete-order" pt="xs">
          <CompleteOrder />
        </Tabs.Panel>
      </Tabs>
    </CommonLayout>
  );
}
