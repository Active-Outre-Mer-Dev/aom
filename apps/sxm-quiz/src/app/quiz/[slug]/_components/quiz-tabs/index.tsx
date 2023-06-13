"use client";
import { Tabs } from "@aom/ui";
import { Description } from "./description";
import { SummaryResult } from "./summary";
import { useQuiz } from "../container/container.context";
import { Feedback } from "./feedback";

export function QuizTabs() {
  const { complete, tab, onTabChange } = useQuiz();
  return (
    <Tabs>
      <Tabs value={tab} onValueChange={onTabChange}>
        <Tabs.List>
          <Tabs.Trigger value="description">Description</Tabs.Trigger>
          <Tabs.Trigger disabled={!complete} value="summary">
            Summary
          </Tabs.Trigger>
          <Tabs.Trigger value="feedback">Feedback</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content noPadding value="description">
          <Description />
        </Tabs.Content>
        <Tabs.Content value="summary">
          <SummaryResult />
        </Tabs.Content>
        <Tabs.Content value="feedback">
          <Feedback />
        </Tabs.Content>
      </Tabs>
    </Tabs>
  );
}
