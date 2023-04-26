import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "ui";

const meta = {
  title: "Molecules/Badge",
  component: Badge,
  args: { children: "Incomplete" },
  argTypes: {
    size: {
      //@ts-expect-error
      type: "radio",
      options: ["sm", "md", "lg"]
    },
    color: {
      //@ts-expect-error
      type: "select",
      options: ["primary", "secondary", "success", "warn", "error", "tertiary"]
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { color: "primary" } };
