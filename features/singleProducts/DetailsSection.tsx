import { Tabs } from "@mantine/core";
import DescriptionTab from "./DescriptionTab";
import InformationTab from "./InformationTab";
import ReviewsTab from "./ReviewsTab";
import SizeTab from "./SizeTab";

export default function DetailsSection() {
  return (
    <Tabs defaultValue="description">
      <Tabs.List
        position="center"
        className="md:gap-8 flex-row w-full overflow-x-scroll md:overflow-x-hidden overflow-y-hidden flex-nowrap border-b mb-8 pb-1"
      >
        <Tabs.Tab value="description" className="text-lg md:text-xl font-bold">
          Discription
        </Tabs.Tab>
        {/* <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}> */}
        <Tabs.Tab value="information" className="text-lg md:text-xl font-bold">
          Additional Information
        </Tabs.Tab>
        <Tabs.Tab value="size" className="text-lg md:text-xl font-bold">
          Size Guide
        </Tabs.Tab>
        <Tabs.Tab value="reviews" className="text-lg md:text-xl font-bold">
          Reviews(1)
        </Tabs.Tab>
      </Tabs.List>

      {/* tab contents */}
      <Tabs.Panel value="description" pt="xs">
        <DescriptionTab />
      </Tabs.Panel>
      <Tabs.Panel value="information" pt="xs">
        <InformationTab />
      </Tabs.Panel>
      <Tabs.Panel value="size" pt="xs">
        <SizeTab />
      </Tabs.Panel>
      <Tabs.Panel value="reviews" pt="xs">
        <ReviewsTab />
      </Tabs.Panel>
    </Tabs>
  );
}
