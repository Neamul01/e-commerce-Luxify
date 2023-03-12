import React from "react";
import { useState } from "react";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";

function NavHeader() {
  return (
    <Header height={"auto"} className="">
      <div className="!bg-[#2f7fd0] py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <div className="flex justify-center items-center gap-2 font-sans">
            <span>
              <BsTelephone className="text-4xl" />
            </span>
            <p className="flex flex-col">
              <span className="text-xs">Call us now:</span>
              <span className="text-base font-semibold  ">8842323</span>
            </p>
          </div>
          <div className="">
            <span className="uppercase text-4xl font-bold text-white font-popins">
              LuxiFy
            </span>
          </div>
          <div className="flex gap-2">
            <span>
              <CgProfile className="text-4xl" />
            </span>
            <span className="">
              <AiOutlineHeart className="text-4xl" />
            </span>
            <p className="w-[1px] h-6 mx-2 bg-gray-400 my-auto"></p>
            <p className="flex flex-col gap-1 text-xs">
              <span className="">Shopping Cart</span>
              <span className="font-bold">$00</span>
            </p>
            <AiOutlineShoppingCart className="text-4xl" />
          </div>
        </div>
      </div>
    </Header>
  );
}

export default NavHeader;
