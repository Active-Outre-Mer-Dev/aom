import { Meta, StoryObj } from "@storybook/react";
import { TextInput, PasswordInput as UiPassword } from "ui/src/client";
import { IconAt } from "@tabler/icons-react";

const meta = {
  title: "Molecules/Input",
  component: TextInput,
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

export const PasswordInput: Story = {
  render: props => {
    return <UiPassword {...props} label="Password" placeholder="" />;
  }
};
