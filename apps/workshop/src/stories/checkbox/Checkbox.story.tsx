import { Meta, StoryObj } from "@storybook/react";
import { Checkbox as UiCheckbox } from "@aomdev/ui/client";
import { parameters } from "../../parameters";

const meta = {
  title: "Molecules/Checkbox",
  component: UiCheckbox,
  parameters,
  args: { label: "Subscribe", disabled: false },
  argTypes: {
    //@ts-expect-error
    size: { type: "select", options: ["sm", "md", "lg", "xl"] },
    //@ts-expect-error
    radius: { type: "select", options: ["sm", "md", "lg", "xl", "full"] }
  }
} satisfies Meta<typeof UiCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {};
