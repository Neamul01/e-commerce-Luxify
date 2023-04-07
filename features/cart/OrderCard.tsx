import { Button, Checkbox, Group, Input, Radio, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

export default function OrderCard() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
    },
  });
  return (
    <div>
      <h2 className="text-lg font-bold uppercase pb-4 border-b">Your Orders</h2>

      <div className="py-4 border-b">
        <p className="text-base font-bold mb-2">Product</p>
        <div className="text-gray-500 text-sm flex justify-between">
          <p>
            Fashionable Watch-Black-Large <span> x 1</span>
          </p>
          <span>$30.00</span>
        </div>
      </div>

      <p className="text-base font-bold flex justify-between py-4 border-b">
        <span>Subtotal</span>
        <span>$30.00</span>
      </p>
      <div className="w-full">
        <div className="mb-4">
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
        </div>

        <p className="text-base font-bold flex justify-between py-4 my-5 border-y">
          <span>Total</span>
          <span className="text-lg">$30.00</span>
        </p>

        <div className="my-2">
          <p className="text-base font-bold">Payment Methods</p>
          <Radio.Group name="paymentMethods" className="pb-6 mt-4 border-b">
            <Group mt="xs" className="flex flex-col w-full">
              <Radio
                value="payment"
                label="Check payments"
                className="w-full !cursor-pointer"
              />
              <div className="w-full">
                <Radio
                  value="COD"
                  label="Cash On Delivery"
                  className="w-full !cursor-pointer"
                />
                <p className="text-xs text-gray-500 ml-8">
                  Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.
                </p>
              </div>
            </Group>
          </Radio.Group>
          <Checkbox
            required
            label={
              <>
                <span className="text-gray-600 mr-1">
                  I have read and agree to the website
                </span>
                <a href="https://mantine.dev" target="_blank">
                  terms and conditions
                </a>
              </>
            }
            className="my-8"
          />
        </div>

        <Button
          variant="filled"
          className="bg-gray-700 hover:!bg-gray-800 w-full uppercase text-sm"
          size="lg"
        >
          place order
        </Button>
      </div>
    </div>
  );
}
