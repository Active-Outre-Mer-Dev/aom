import { StoryObj, Meta } from "@storybook/react";
import { ActionIcon } from "ui";
import { IconCheck } from "@tabler/icons-react";

const meta = {
  title: "Molecules/ActionIcon",
  component: ActionIcon,
  args: { children: <IconCheck size={"70%"} />, size: "md", label: "Check task" },
  // @ts-expect-error
  argTypes: { size: { type: "select", options: ["md", "lg", "xl"] } }
} satisfies Meta<typeof ActionIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
