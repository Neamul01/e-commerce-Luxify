import React, { useState } from "react";
import { Timeline, Text, Tabs } from "@mantine/core";
import CommonLayout from "../../components/Layouts/CommonLayout";
import { BsArrowRight } from "react-icons/bs";

export default function index() {
  const [activeTab, setActiveTab] = useState("data");
  return (
    <CommonLayout customClass="py-6 px-4">
      <Tabs defaultValue="description">
        <Tabs.List
          position="center"
          className="md:gap-8 flex-row w-full overflow-x-scroll md:overflow-x-hidden overflow-y-hidden flex-nowrap border-b mb-8 pb-1 border-none"
        >
          <Tabs.Tab
            value="description"
            className={`text-lg md:text-xl font-bold ${
              activeTab === "data" && "!text-blue-500 mb-0 border-none"
            }`}
            rightSection={<BsArrowRight />}
            onClick={() => setActiveTab("data")}
          >
            Discription
          </Tabs.Tab>
          {/* <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}> */}
          <Tabs.Tab
            value="information"
            className={`text-lg md:text-xl font-bold ${
              activeTab === "info" && "!text-blue-500 mb-0 border-none"
            }`}
            rightSection={<BsArrowRight />}
            onClick={() => setActiveTab("info")}
          >
            Additional Information
          </Tabs.Tab>
          <Tabs.Tab
            value="size"
            className={`text-lg md:text-xl font-bold ${
              activeTab === "size" && "!text-blue-500 mb-0 border-none"
            }`}
            rightSection={<BsArrowRight />}
            onClick={() => setActiveTab("size")}
          >
            Size Guide
          </Tabs.Tab>
          <Tabs.Tab
            value="reviews"
            className={`text-lg md:text-xl font-bold ${
              activeTab === "review" && "!text-blue-500 mb-0 border-none"
            }`}
            onClick={() => setActiveTab("review")}
          >
            Reviews(1)
          </Tabs.Tab>
        </Tabs.List>

        {/* tab contents */}
        <Tabs.Panel value="description" pt="xs">
          {/* <DescriptionTab /> */}descirpt
        </Tabs.Panel>
        <Tabs.Panel value="information" pt="xs">
          {/* <InformationTab /> */} info
        </Tabs.Panel>
        <Tabs.Panel value="size" pt="xs">
          {/* <SizeTab /> */}size
        </Tabs.Panel>
        <Tabs.Panel value="reviews" pt="xs">
          {/* <ReviewsTab /> */}review
        </Tabs.Panel>
      </Tabs>
    </CommonLayout>
  );
}
