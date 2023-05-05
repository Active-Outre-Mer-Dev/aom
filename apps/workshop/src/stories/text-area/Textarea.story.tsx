import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "ui/src/client";

const meta = {
  title: "Molecules/Textarea",
  component: TextArea,
  args: { placeholder: "Write message", wrapperClass: "w-full" }
} satisfies Meta<typeof TextArea>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextAreaInput: Story = { args: { label: "Message" } };
