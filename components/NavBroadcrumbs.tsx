import { Breadcrumbs } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";

export default function NavBroadcrumbs(props: {
  items: { title: string | React.ReactNode; href: string }[];
}) {
  const items = [{ title: <AiOutlineHome />, href: "/" }, ...props.items].map(
    (item, index) => (
      <Link
        href={item.href}
        key={index}
        className=" text-gray-600 hover:underline capitalize"
      >
        {item.title}
      </Link>
    )
  );
  return (
    <div className="text-sm flex items-center pt-4 pb-2">
      <Breadcrumbs separator={<AiOutlineRight size={"0.6rem"} />}>
        {items}
      </Breadcrumbs>
    </div>
  );
}
