import { Meta, StoryObj } from "@storybook/react";
import { ThemeIcon } from "@aomdev/ui";
import { IconClockCog } from "@tabler/icons-react";

const meta = {
  title: "Molecules/ThemeIcon",
  component: ThemeIcon,
  args: { children: <IconClockCog size={"75%"} className="stroke-white" /> },
  argTypes: {
    //@ts-expect-error
    size: { type: "select", options: ["md", "lg", "xl"] },
    //@ts-expect-error
    variant: { type: "select", options: ["light", "outline", "filled"] },
    //@ts-expect-error
    radius: { type: "select", options: ["sm", "md", "lg", "xl", "full"] },
    //@ts-expect-error
    color: { type: "select", options: ["primary", "secondary", "success", "warn", "error"] }
  }
} satisfies Meta<typeof ThemeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
