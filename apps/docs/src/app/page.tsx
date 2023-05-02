"use client";
import { Button, Tabs } from "ui";
import { Title } from "@/components/Title";
import { motion } from "framer-motion";
import { useState } from "react";

const values = [
  { label: "Food", value: "food", id: 0 },
  { label: "Drinks", value: "drinks", id: 1 }
];

export default function RootPage() {
  const [active, setActive] = useState("food");
  return (
    <>
      <Title />
      <p className="text-5xl text-neutral-400">Hello there</p>
      <Button />
      <Tabs onValueChange={setActive}>
        <Tabs.List>
          {values.map(tab => {
            return (
              <Tabs.Trigger value={tab.value}>
                {active === tab.value && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute bg-primary-200 w-full h-full"
                  ></motion.div>
                )}
                <span className="relative">{tab.label}</span>
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
        <Tabs.Content value="food">This is the food section</Tabs.Content>
      </Tabs>
    </>
  );
}
