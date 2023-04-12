import { Alert, Checkbox, Input, Select, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import OrderCard from "./OrderCard";
import { TbAlertCircle } from "react-icons/tb";

export default function Checkout() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
    },
  });
  return (
    <div className="w-full flex flex-col">
      <div className="w-full mb-8 flex flex-col gap-4">
        <Alert
          icon={<TbAlertCircle size="1rem" />}
          color="red"
          className="border"
        >
          Something terrible happened! You made a mistake and there is no going
          back, your data was lost forever!
        </Alert>
        <Alert icon={<TbAlertCircle size="1rem" />} className="cursor-pointer">
          Have a coupon?
          <a href="#" className="ml-2 text-blue-500">
            Click here to enter your code
          </a>
        </Alert>
      </div>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="col-span-7 flex flex-col gap-8 border p-4 md:p-0 md:border-none">
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-lg font-bold uppercase pb-4 border-b">
              Billing Details
            </h2>
            <div className="flex gap-4 w-full">
              <Input.Wrapper label="First Name" required className="w-full">
                <Input<any>
                  size="md"
                  {...form.getInputProps("email")}
                  placeholder="First Name"
                />
              </Input.Wrapper>
              <Input.Wrapper label="Last Name" required className="w-full">
                <Input<any>
                  size="md"
                  {...form.getInputProps("email")}
                  placeholder="Last Name"
                />
              </Input.Wrapper>
            </div>
            <Input.Wrapper label="Company Name (Optional)" className="w-full">
              <Input<any>
                size="md"
                {...form.getInputProps("email")}
                placeholder="Last Name"
              />
            </Input.Wrapper>
            <Select
              size="md"
              label="Country / Region"
              required
              placeholder="Pick one"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
            <Input.Wrapper
              label="Street Address"
              className="w-full flex flex-col gap-2"
            >
              <Input<any>
                size="md"
                required
                {...form.getInputProps("email")}
                placeholder="Hous number and street name"
              />
              <Input<any>
                size="md"
                {...form.getInputProps("email")}
                placeholder="Apartment, suite, unit etc. (optional)"
              />
            </Input.Wrapper>

            <div className="flex gap-4 w-full">
              <Input.Wrapper label="Town / City" required className="w-full">
                <Input<any> size="md" {...form.getInputProps("email")} />
              </Input.Wrapper>
              <Input.Wrapper label="State" required className="w-full">
                <Input<any> size="md" {...form.getInputProps("email")} />
              </Input.Wrapper>
            </div>

            <div className="flex gap-4 w-full">
              <Input.Wrapper label="Zip" required className="w-full">
                <Input<any> size="md" {...form.getInputProps("email")} />
              </Input.Wrapper>
              <Input.Wrapper label="Phone" required className="w-full">
                <Input<any> size="md" {...form.getInputProps("email")} />
              </Input.Wrapper>
            </div>

            <Input.Wrapper label="Email Address" required className="w-full">
              <Input<any>
                size="md"
                {...form.getInputProps("email")}
                placeholder="Last Name"
              />
            </Input.Wrapper>

            <div className="w-full flex flex-col gap-2">
              <Checkbox size="md" label="Create an account?" />
              <Checkbox size="md" label="Ship to a different address?" />
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-lg font-bold uppercase">
              additional information
            </h2>
            <Input.Wrapper label="Order Notes (Optional)" className="w-full">
              <Textarea
                size="md"
                {...form.getInputProps("email")}
                placeholder="Notes about your order, e.g. special notes for delivery."
                minRows={4}
              />
            </Input.Wrapper>
          </div>
        </div>
        <div className="col-span-7 md:col-span-5 w-full flex border p-6 px-8">
          <OrderCard />
        </div>
      </div>
    </div>
  );
}
