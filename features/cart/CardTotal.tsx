import { Button, Group, Input, Radio, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { selectCartTotal } from "../../store/slices/cartSlice";
import { useSelector } from "react-redux";

export default function CardTotal() {
  const cartTotal = useSelector(selectCartTotal);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
    },
  });
  return (
    <div>
      <h2 className="text-lg font-bold uppercase pb-4 border-b">card totals</h2>
      <p className="text-base font-bold flex justify-between py-4 border-b">
        <span>Subtotal</span>
        <span>${cartTotal}</span>
      </p>
      <div className="w-full">
        <p className="text-base font-bold flex justify-between pt-5 pb-3">
          Calculate Shipping
        </p>
        <Radio.Group name="favoriteFramework">
          <Group mt="xs" className="flex flex-col w-full">
            <Radio
              value="flat"
              label="Flat rate"
              className="w-full !cursor-pointer"
            />
            <Radio
              value="free"
              label="Free shipping"
              className="w-full !cursor-pointer"
            />
            <Radio
              value="local"
              label="Local pickup"
              className="w-full !cursor-pointer"
            />
          </Group>
        </Radio.Group>
        <div className="flex flex-col gap-4 mt-4 border-b pb-5">
          <p className="text-base text-gray-500">
            Shipping to <span className="font-bold uppercase">ca.</span>
          </p>
          <Select
            placeholder="Pick one"
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
          <Select
            placeholder="Pick one"
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
          <Input placeholder="Town/City" />
          <Input placeholder="ZIP" />
          <div className="">
            <Button
              variant="outline"
              className="text-gray-800 border-gray-800 uppercase"
            >
              Update Totals
            </Button>
          </div>
        </div>
        <p className="text-base font-bold flex justify-between py-4">
          <span>Total</span>
          <span className="text-lg">${cartTotal}</span>
        </p>
        <Button
          variant="filled"
          className="bg-gray-700 hover:!bg-gray-800 w-full uppercase text-sm"
          size="lg"
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
}
