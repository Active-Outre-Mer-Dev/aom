import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "@aomdev/ui";
import { cardStyles } from "@aomdev/ui/src/card/styles";

const meta = { title: "Molecules/Tooltip", component: Tooltip } satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <>
        <Tooltip providerProps={{ delayDuration: 200 }}>
          <Tooltip.Trigger asChild>
            <Button>Hello there</Button>
          </Tooltip.Trigger>
          <Tooltip.Content
            sideOffset={5}
            className={cardStyles({ variant: "filled", className: "dark:text-gray-100 text-gray-800" })}
          >
            This is crazy
          </Tooltip.Content>
        </Tooltip>
      </>
    );
  }
};
