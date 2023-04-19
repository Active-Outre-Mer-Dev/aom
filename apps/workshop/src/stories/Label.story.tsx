import { StoryObj, Meta } from "@storybook/react";
import { Label } from "ui";

const meta = {
  title: "Label",
  component: Label,
  tags: ["autodocs"],
  args: { htmlFor: "", children: "First name" }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RegularLabel: Story = { args: { htmlFor: "" } };
