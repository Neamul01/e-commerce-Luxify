import { Aside } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import {
  IoBagHandleOutline,
  IoBasketballOutline,
  IoCameraOutline,
  IoShirtOutline,
} from "react-icons/io5";
import { TbBabyCarriage, TbDeviceGamepad2 } from "react-icons/tb";
import { GiCookingPot } from "react-icons/gi";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add the scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarItems = [
    { id: 1, name: "Computer and Laptops", icon: <BsLaptop size={"1.8rem"} /> },
    {
      id: 2,
      name: "Computer and Laptops",
      icon: <IoShirtOutline size={"1.7rem"} />,
    },
    {
      id: 3,
      name: "Computer and Laptops",
      icon: <TbDeviceGamepad2 size={"1.8rem"} />,
    },
    {
      id: 4,
      name: "Computer and Laptops",
      icon: <IoCameraOutline size={"1.9rem"} />,
    },
    {
      id: 5,
      name: "Computer and Laptops",
      icon: <GiCookingPot size={"2rem"} />,
    },
    {
      id: 6,
      name: "Computer and Laptops",
      icon: <IoBasketballOutline size={"1.7rem"} />,
    },
    {
      id: 7,
      name: "Computer and Laptops",
      icon: <IoBagHandleOutline size={"1.7rem"} />,
    },
    {
      id: 8,
      name: "Computer and Laptops",
      icon: <TbBabyCarriage size={"1.7rem"} />,
    },
  ];

  return (
    <>
      {(router.pathname === "/" || router.pathname === "/products") && (
        <Aside
          className={`${
            scrolled ? "fixed top-20" : "absolute top-40 "
          } bg-white shadow-2xl px-4 py-3 h-[34rem] w-[4.2rem] z-50 lg:left-0 hidden lg:block`}
        >
          <ul className="flex flex-col h-full justify-between text-gray-500 py-2">
            {sidebarItems.map((item) => (
              <li className="flex justify-center" key={item.id}>
                <Link href={"/"}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </Aside>
      )}
    </>
  );
};

export default Sidebar;
