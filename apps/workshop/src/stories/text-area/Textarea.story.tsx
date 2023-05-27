import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@aom/ui";

const meta = {
  title: "Molecules/Textarea",
  component: Textarea,
  args: { placeholder: "Write message", wrapperClass: "w-full" }
} satisfies Meta<typeof Textarea>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextAreaInput: Story = { args: { label: "Message" } };
