import React from "react";
import CommonLayout from "../../components/Layouts/CommonLayout";
import ImageHero from "../../components/ImageHero";
import NavBroadcrumbs from "../../components/NavBroadcrumbs";
import { Button, Input, Textarea } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";

export default function index() {
  const items = [{ title: "Contact us", href: "/contact" }];
  return (
    <div>
      {/* navigation */}
      <CommonLayout>
        <NavBroadcrumbs items={items} />
      </CommonLayout>
      {/* image hero */}
      <ImageHero image="/background/contact-us.jpg">contact us</ImageHero>
      <CommonLayout>
        {/* connect */}
        <div className="w-full grid grid-cols-12 gap-8 py-20">
          <div className="col-span-3 bg-gray-100 text-black rounded-lg p-6 flex flex-col gap-6">
            <div className="">
              <h3 className="text-xl font-bold mb-2">Headquarters</h3>
              <p className="text-gray-500 text-sm pb-2  ">
                1600 Amphitheatre Parkway New York WC1 1BA
              </p>
              <p className="text-gray-500 text-sm">New York WC1 1BA </p>
            </div>
            <div className="">
              <h3 className="text-xl font-bold mb-2">Phone Number</h3>
              <p className="text-gray-500 text-sm pb-2">+88494894</p>
              <p className="text-gray-500 text-sm ">+88494894</p>
            </div>
            <div className="">
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <div className="flex flex-col">
                <a
                  href="mailto:support@luxify.com"
                  className="text-gray-500 text-sm pb-2"
                >
                  support@luxify.com
                </a>
                <a
                  href="mailto:support@luxify.com"
                  className="text-gray-500 text-sm pb-2"
                >
                  support@luxify.com
                </a>
                <a
                  href="mailto:support@luxify.com"
                  className="text-gray-500 text-sm"
                >
                  support@luxify.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <h2 className="text-2xl font-extrabold capitalize mb-2">
              let's connect
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="flex gap-4 flex-col">
              <Textarea placeholder="Comment" minRows={7} className="" />
              <div className="flex gap-4 w-full">
                <Input placeholder="Name" required className="w-full" />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div className="mt-8">
              <Button
                rightIcon={<BsArrowRight size={"1.3rem"} />}
                size="lg"
                className="uppercase bg-black text-sm px-8 hover:!bg-gray-800"
              >
                Post comment
              </Button>
            </div>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
}
