"use client";
import { Switch } from "@aomdev/ui/client/switch";
import { Tabs } from "@aomdev/ui/client/tabs";
import { cardStyles } from "@aomdev/ui/styles";
import { User, Settings } from "lucide-react";
import { useState } from "react";

export function TabsDemo() {
  const [grow, setGrow] = useState(false);
  return (
    <div className="flex gap-6">
      <Tabs className="basis-1/2 grow">
        <Tabs.List grow={grow}>
          <Tabs.Trigger value="account">
            {" "}
            <User
              className="inline-block mr-2"
              size={16}
            />
            Account
          </Tabs.Trigger>
          <Tabs.Trigger value="settings">
            {" "}
            <Settings
              className="inline-block mr-2"
              size={16}
            />
            Settings
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="settings">Settings Content</Tabs.Content>
      </Tabs>
      <div className={cardStyles({ className: "basis-1/3" })}>
        <h3
          style={{ marginTop: 0, marginBottom: "1rem" }}
          className="font-semibold text-xl"
        >
          Configuration
        </h3>
        <div className="flex gap-6 flex-col">
          <Switch
            label="Full width"
            checked={grow}
            onCheckedChange={setGrow}
          />
        </div>
      </div>
    </div>
  );
}
