import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@aom/ui";

const meta = {
  title: "Molecules/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    className: "w-2/4"
  }
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SliderDefault: Story = {};
