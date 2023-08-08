import { Meta, StoryObj } from "@storybook/react";
import { ThemeIcon } from "@aomdev/ui";
import { IconClockCog } from "@tabler/icons-react";

const meta = {
  title: "Molecules/ThemeIcon",
  component: ThemeIcon,
  args: { children: <IconClockCog size={"75%"} /> },
  argTypes: {
    //@ts-expect-error
    size: { type: "select", options: ["md", "lg", "xl"] },
    //@ts-expect-error
    variant: { type: "select", options: ["light", "outline", "filled"] },
    //@ts-expect-error
    radius: { type: "select", options: ["sm", "md", "lg", "xl", "full"] },
    color: {
      //@ts-expect-error
      type: "select",
      options: ["primary", "secondary", "success", "warn", "error", "gray", "tertiary"]
    }
  }
} satisfies Meta<typeof ThemeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
