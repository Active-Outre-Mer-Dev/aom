import { Card } from "ui";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: <p className="text-neutral-900 dark:text-neutral-100">Hello there!</p>,
    className: "w-fit"
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: { variant: "filled" }
};

export const Outline: Story = {
  args: { variant: "outline" }
};
