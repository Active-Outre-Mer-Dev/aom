import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@aomdev/ui";

const meta = {
  title: "Molecules/Textarea",
  component: Textarea,
  args: { placeholder: "Write message" },
  //@ts-expect-error
  argTypes: { size: { type: "select", options: ["md", "sm", "lg"] } }
} satisfies Meta<typeof Textarea>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextAreaInput: Story = { args: { label: "Message" } };
