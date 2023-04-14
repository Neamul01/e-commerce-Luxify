import { Anchor, Breadcrumbs, Button, Select } from "@mantine/core";
import React from "react";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";

export default function index() {
  const items = [{ title: "Products", href: "#" }].map((item, index) => (
    <Anchor href={item.href} key={index} className=" text-gray-600">
      {item.title}
    </Anchor>
  ));
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* navigation */}
        <div className="text-sm flex items-center gap-1 mt-2">
          <AiOutlineHome />
          <AiOutlineRight />
          <Breadcrumbs separator="→" className="py-2">
            {items}
          </Breadcrumbs>
        </div>

        {/* searches */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-sm text-gray-600">
            <Select
              placeholder="Select Size"
              size="xs"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              className="max-w-[7rem]"
            />
            <Select
              placeholder="Select Color"
              size="xs"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              className="max-w-[7rem]"
            />
            <Select
              placeholder="Select Price"
              size="xs"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              className="max-w-[7rem]"
            />
            <Select
              placeholder="Default Sorting"
              size="xs"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              className="max-w-[8rem]"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-black uppercase text-xs font-bold">Show:</p>
            <Select
              defaultValue={"12"}
              size="xs"
              data={[
                { value: "12", label: "12" },
                { value: "24", label: "24" },
                { value: "36", label: "36" },
              ]}
              className="max-w-[4rem]"
            />
            <div className="flex gap-3 ml-3">
              <Button className="cursor-pointer p-0 m-0 border-0 text-gray-800 h-auto hover:!bg-transparent">
                <FaList className="font-extrabold" />
              </Button>
              <Button
                disabled
                className="cursor-pointer p-0 m-0 border-0 text-gray-800 h-auto hover:!bg-transparent"
              >
                <BsFillGrid3X3GapFill />
              </Button>
            </div>
          </div>
        </div>

        {/* products */}
        <div className="w-full grid grid-cols-12"></div>
      </div>
    </div>
  );
}
