import React from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { useForm } from "@mantine/form";
import { Button, Checkbox, Input, Select, Textarea } from "@mantine/core";

export default function profile() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
    },
  });
  return (
    <DashboardLayout>
      <div className="col-span-7 flex flex-col gap-4 md:gap-8 mb-10">
        <div className="w-full flex flex-col gap-6 border p-4 md:border-none md:p-0">
          <div className="flex flex-col md:flex-row gap-4 w-full">
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
          <Input.Wrapper label="Display Name" className="w-full">
            <Input<any>
              size="md"
              {...form.getInputProps("email")}
              placeholder="Last Name"
            />
            <p className="text-xs text-gray-500">
              This will be how your name will be displayed in the account
              section and in reviews
            </p>
          </Input.Wrapper>
          <Input.Wrapper label="Email Address" className="w-full">
            <Input<any>
              size="md"
              required
              {...form.getInputProps("email")}
              placeholder="Hous number and street name"
            />
          </Input.Wrapper>
        </div>

        <div className="w-full flex flex-col gap-6 border p-4 mt-10">
          <p className="text-gray-500 text-base font-bold">Password Change</p>
          <Input.Wrapper
            label="Current password (leave blank to leave unchanged)"
            required
            className="w-full"
          >
            <Input<any>
              size="md"
              {...form.getInputProps("email")}
              placeholder="First Name"
            />
          </Input.Wrapper>
          <Input.Wrapper
            label="New password (leave blank to leave unchanged)"
            required
            className="w-full"
          >
            <Input<any>
              size="md"
              {...form.getInputProps("email")}
              placeholder="First Name"
            />
          </Input.Wrapper>
          <Input.Wrapper
            label="Confirm new password"
            required
            className="w-full"
          >
            <Input<any>
              size="md"
              {...form.getInputProps("email")}
              placeholder="First Name"
            />
          </Input.Wrapper>
        </div>
        <div className="mb-10">
          <Button
            size="lg"
            className="uppercase bg-blue-700 hover:bg-blue-500 text-sm"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
