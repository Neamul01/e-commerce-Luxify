import { Tabs } from "@mantine/core";

export default function DetailsTab() {
  return (
    <Tabs defaultValue="description">
      <Tabs.List position="center" className="gap-8 border-b">
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

      <Tabs.Panel value="description" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="information" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="size" pt="xs">
        Settings tab content
      </Tabs.Panel>

      <Tabs.Panel value="reviews" pt="xs">
        reviews tab content
      </Tabs.Panel>
    </Tabs>
  );
}
