"use client";
import { ScrollArea } from "@aomdev/ui/client/scroll-area";
import { Tabs } from "@aomdev/ui/client/tabs";

export type PropTypes = {
  demoContent: React.ReactNode;
  children: React.ReactNode;
};

export function TabsDemo({ children, demoContent }: PropTypes) {
  return (
    <Tabs defaultValue="demo">
      <Tabs.List>
        <Tabs.Trigger value="demo">Demo</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="demo">{demoContent}</Tabs.Content>
      <Tabs.Content value="code">
        <ScrollArea>{children}</ScrollArea>
      </Tabs.Content>
    </Tabs>
  );
}
