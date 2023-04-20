import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "ui";

const meta = {
  title: "Textarea",
  component: TextArea,
  args: { placeholder: "Write message", wrapperClass: "w-full" }
} satisfies Meta<typeof TextArea>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextAreaInput: Story = { args: { label: "Message" } };
