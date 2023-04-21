import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "ui";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    required: false,
    label: "Airplane mode",
    size: "md"
  },
  argTypes: {
    //@ts-expect-error
    size: { options: ["sm", "md", "lg"], type: "radio" }
  }
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchInput: Story = {
  args: {}
};
