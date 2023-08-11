import { StoryObj, Meta } from "@storybook/react";
import { ActionIcon } from "@aomdev/ui";
import { IconCheck } from "@tabler/icons-react";

const meta = {
  title: "Molecules/ActionIcon",
  component: ActionIcon,
  args: {
    children: <IconCheck size={"70%"} />,
    size: "md",
    // variant: "light",
    // color: "primary",
    "aria-label": "Check task"
  },
  argTypes: {
    // @ts-expect-error
    size: { type: "select", options: ["md", "lg", "xl"] },
    // @ts-expect-error
    variant: { type: "radio", options: ["light", "subtle", "filled"] },
    // @ts-expect-error
    color: { type: "select", options: ["primary", "success", "secondary", "warn", "error", "gray"] }
  }
} satisfies Meta<typeof ActionIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
