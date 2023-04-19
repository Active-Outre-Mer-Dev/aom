import type { Meta, StoryObj } from "@storybook/react";
// import { Button } from "./Button";
import { Button } from "ui";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: { size: "medium", children: "Button" },
  argTypes: {
    //@ts-expect-error
    size: { options: ["small", "medium", "large"], type: "radio" },
    //@ts-expect-error
    disabled: { options: [false, true], type: "radio" },
    //@ts-expect-error
    fullWidth: { options: [true, false], type: "radio" }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary"
  }
};

export const Neutral: Story = {
  args: {
    variant: "neutral"
  }
};
