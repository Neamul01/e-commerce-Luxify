import React from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { Button } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";

export default function index() {
  return (
    <div>
      <DashboardLayout>
        <div className="w-full text-gray-500">
          <p className="">Hello user</p>
          <p className="">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
        </div>
        <div className="mt-10">
          <Button
            rightIcon={<BsArrowRight size={"1.3rem"} />}
            size="lg"
            className="bg-black hover:!bg-gray-800"
          >
            Go to Shop
          </Button>
        </div>
      </DashboardLayout>
    </div>
  );
}
