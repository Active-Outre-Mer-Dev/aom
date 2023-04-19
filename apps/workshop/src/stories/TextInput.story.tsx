import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "ui";

const meta = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: { placeholder: "Placeholder" }
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {};
