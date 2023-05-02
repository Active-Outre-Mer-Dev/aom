import { Meta, StoryObj } from "@storybook/react";
import { Tabs as UiTabs } from "ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconGrillFork, IconBottle, IconMilkshake } from "@tabler/icons-react";

const meta = { title: "Atoms/Tabs", component: UiTabs } satisfies Meta<typeof UiTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  render: () => {
    return (
      <div className="flex justify-center">
        <UiTabs defaultValue="food" className="text-neutral-100">
          <UiTabs.List>
            <UiTabs.Trigger value="food">Food</UiTabs.Trigger>
            <UiTabs.Trigger value="drink">Drinks</UiTabs.Trigger>
            <UiTabs.Trigger value="desserts">Desserts</UiTabs.Trigger>
          </UiTabs.List>
          <UiTabs.Content value="food">This is the food section</UiTabs.Content>
          <UiTabs.Content value="drink">This is the drinks section</UiTabs.Content>
          <UiTabs.Content value="desserts">This is the desserts section</UiTabs.Content>
        </UiTabs>
      </div>
    );
  }
};

const values = [
  { label: "Food", value: "food", Icon: IconBottle },
  { label: "Drinks", value: "drinks", Icon: IconGrillFork },
  { label: "Desserts", value: "desserts", Icon: IconMilkshake }
];

function FramerTab() {
  const [active, setActive] = useState("food");
  return (
    <div className="flex justify-center">
      <UiTabs value={active} onValueChange={setActive} className="text-neutral-100">
        <UiTabs.List>
          {values.map(tab => {
            return (
              <UiTabs.Trigger customBg value={tab.value}>
                {active === tab.value && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute  bg-primary-500 bottom-0 h-[2px] w-full z-[5]"
                  ></motion.div>
                )}
                <span className="relative z-10">{tab.label}</span>
              </UiTabs.Trigger>
            );
          })}
        </UiTabs.List>
        <UiTabs.Content value="food">This is the food section</UiTabs.Content>
        <UiTabs.Content value="drinks">This is the drinks section</UiTabs.Content>
        <UiTabs.Content value="desserts">This is the desserts section</UiTabs.Content>
      </UiTabs>
    </div>
  );
}

export const AnimatedTabs: Story = { render: () => <FramerTab /> };

function Icons() {
  const [active, setActive] = useState("food");

  return (
    <div className="flex justify-center">
      <UiTabs value={active} onValueChange={setActive} className="text-neutral-100">
        <UiTabs.List>
          {values.map(({ Icon, ...tab }) => {
            return (
              <UiTabs.Trigger customBg value={tab.value}>
                {active === tab.value && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute  bg-primary-500 bottom-0 h-[2px] w-full z-[5]"
                  ></motion.div>
                )}
                <span className="relative flex gap-1 items-center z-10">
                  <Icon size={16} />
                  {tab.label}
                </span>
              </UiTabs.Trigger>
            );
          })}
        </UiTabs.List>
        <UiTabs.Content value="food">This is the food section</UiTabs.Content>
        <UiTabs.Content value="drinks">This is the drinks section</UiTabs.Content>
        <UiTabs.Content value="desserts">This is the desserts section</UiTabs.Content>
      </UiTabs>
    </div>
  );
}

export const WithIcons: Story = {
  render: () => <Icons />
};
