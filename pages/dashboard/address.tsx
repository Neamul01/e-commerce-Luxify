import React from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { Button } from "@mantine/core";
import { BiEdit } from "react-icons/bi";

export default function address() {
  return (
    <DashboardLayout>
      <div className="w-full flex flex-col gap-6 mt-7">
        <h2 className="text-gray-500">
          The following addresses will be used on the checkout page by default.
        </h2>
        <div className="flex justify-between mt-4">
          <div className="">
            <h2 className="font-bold text-lg uppercase mb-4">
              billing address
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500">Noman</p>
              <p className="text-gray-500">Luxify Company</p>
              <p className="text-gray-500">Panthopoth Dhaka</p>
              <p className="text-gray-500">29 sector 7 Dhaka</p>
              <p>
                <Button
                  variant="subtle"
                  className="p-0 border-none text-yellow-500 hover:!bg-transparent hover:underline"
                  rightIcon={<BiEdit size={"1rem"} />}
                >
                  Edit
                </Button>
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="font-bold text-lg uppercase mb-4">
              shipping address
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500">Noman</p>
              <p className="text-gray-500">Luxify Company</p>
              <p className="text-gray-500">Panthopoth Dhaka</p>
              <p className="text-gray-500">29 sector 7 Dhaka</p>
              <p>
                <Button
                  variant="subtle"
                  className="p-0 border-none text-yellow-500 hover:!bg-transparent hover:underline"
                  rightIcon={<BiEdit size={"1rem"} />}
                >
                  Edit
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
