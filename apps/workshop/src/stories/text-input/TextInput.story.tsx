import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "ui";
import { IconAt } from "@tabler/icons-react";

const meta = {
  title: "Molecules/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: { placeholder: "Placeholder", description: "", error: "" }
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Email",
    required: true
  }
};

export const WithIcon: Story = {
  args: {
    icon: <IconAt size={14} />,
    label: "Email",
    required: false
  }
};
