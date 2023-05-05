import { Meta, StoryObj } from "@storybook/react";
import { Checkbox as UiCheckbox } from "ui/src/client";
import { parameters } from "../../parameters";

const meta = {
  title: "Molecules/Checkbox",
  component: UiCheckbox,
  parameters,
  args: { label: "Subscribe", disabled: false }
} satisfies Meta<typeof UiCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {};
