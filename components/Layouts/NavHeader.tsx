import React from "react";
import { Header } from "@mantine/core";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setAuthState } from "../../store/slices/authSlice";
import { selectCartState, selectCartTotal } from "../../store/slices/cartSlice";

function NavHeader() {
  const authState = useSelector(selectAuthState);
  const cart = useSelector(selectCartState);
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);

  // const cartTotal = () => {
  //   let total = 0;
  //   cart.map((c) => {
  //     if (c.count > 1) {
  //       return (total = total + c.price * c.count);
  //     } else if (c.count === 0) {
  //       return total;
  //     } else {
  //       return (total += c.price);
  //     }
  //   });
  //   return total;
  // };

  return (
    <Header height={"auto"} className="border-none">
      <div className="!bg-[#2f7fd0] py-6 px-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <div className="hidden md:flex justify-center items-center gap-2 font-sans">
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
            <span className="hidden md:block">
              <Link href={"/dashboard"}>
                <CgProfile className="text-4xl" />
              </Link>
            </span>
            <span className="hidden  sm:block">
              <AiOutlineHeart className="text-4xl" />
            </span>
            <p className="w-[1px] h-6 mx-2 bg-gray-400 my-auto hidden sm:block" />
            <p className="hidden md:flex flex-col gap-1 text-xs">
              <span className="">Shopping Cart</span>
              <span className="font-bold">$ {cart && cartTotal}</span>
            </p>
            <Link href={"/cart"} className="relative">
              <small className="absolute -top-3 -right-1 font-bold bg-rose-500 px-2 py-[2px] rounded-full flex items-center justify-center">
                {cart.length && cart.length}
              </small>
              <AiOutlineShoppingCart className="text-4xl" />
            </Link>
            <div>
              <div>{authState ? "Logged in" : "Not Logged In"}</div>
              <button
                onClick={() =>
                  authState
                    ? dispatch(setAuthState(false))
                    : dispatch(setAuthState(true))
                }
              >
                {authState ? "Logout" : "LogIn"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default NavHeader;
