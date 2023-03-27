import { Tabs } from "@mantine/core";
import DescriptionTab from "./DescriptionTab";
import InformationTab from "./InformationTab";
import ReviewsTab from "./ReviewsTab";
import SizeTab from "./SizeTab";

export default function DetailsSection() {
  return (
    <Tabs defaultValue="description">
      <Tabs.List position="center" className="gap-8 border-b mb-8">
        <Tabs.Tab value="description" className="text-xl font-bold">
          Discription
        </Tabs.Tab>
        {/* <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}> */}
        <Tabs.Tab value="information" className="text-xl font-bold">
          Additional Information
        </Tabs.Tab>
        <Tabs.Tab value="size" className="text-xl font-bold">
          Size Guide
        </Tabs.Tab>
        <Tabs.Tab value="reviews" className="text-xl font-bold">
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
