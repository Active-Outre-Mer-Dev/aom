import { StoryObj, Meta } from "@storybook/react";
import { RingProgress } from "ui";

const meta = {
  title: "Molecules/RingProgress",
  component: RingProgress,
  args: { color: "success", value: 87, size: 150 },
  argTypes: {
    value: { control: { type: "range", max: 100 } },
    //@ts-expect-error
    color: { type: "select", options: ["primary", "success", "error"] }
  }
} satisfies Meta<typeof RingProgress>;

export default meta;

type Story = StoryObj<typeof RingProgress>;

export const Default: Story = {};
