import { Meta, StoryObj } from "@storybook/react";
import { Progress as UiProgress } from "ui";

const meta = {
  title: "Molecules/Progress",
  component: UiProgress,
  args: { value: 0, max: 100 },
  argTypes: {
    value: { control: { type: "range", max: 100 } },
    //@ts-expect-error
    size: { type: "select", options: ["sm", "md", "lg"] }
  }
} satisfies Meta<typeof UiProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Progress: Story = {
  args: {}
};

export const Indeterminate: Story = {
  args: { value: undefined }
};
