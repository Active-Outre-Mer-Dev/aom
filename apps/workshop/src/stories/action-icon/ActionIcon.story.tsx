import { StoryObj, Meta } from "@storybook/react";
import { ActionIcon } from "@aom/ui";
import { IconCheck } from "@tabler/icons-react";

const meta = {
  title: "Molecules/ActionIcon",
  component: ActionIcon,
  args: {
    children: <IconCheck size={"70%"} />,
    size: "md",
    label: "Check task",
    variant: "light",
    color: "primary"
  },
  argTypes: {
    // @ts-expect-error
    size: { type: "select", options: ["md", "lg", "xl"] },
    // @ts-expect-error
    variant: { type: "radio", options: ["light", "subtle"] },
    // @ts-expect-error
    color: { type: "select", options: ["primary", "success", "secondary", "warn", "error"] }
  }
} satisfies Meta<typeof ActionIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
