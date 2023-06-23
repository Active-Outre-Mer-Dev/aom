import { Meta, StoryObj } from "@storybook/react";
import { IconCheck } from "@tabler/icons-react";
import { Alert as UiAlert } from "@aom/ui";
import { parameters } from "../../parameters";

const meta = {
  title: "Molecules/Alert",
  component: UiAlert,
  args: {
    children: "Ea occaecat non ipsum sunt consectetur.",
    title: "Alert",
    className: "w-2/4"
  },
  argTypes: {
    //@ts-expect-error
    color: { type: "select", options: ["primary", "secondary", "tertiary", "warn", "success", "error"] }
  },
  parameters
} satisfies Meta<typeof UiAlert>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Alert: Story = {};

export const CustomIcon: Story = {
  args: { icon: <IconCheck size={16} /> }
};
