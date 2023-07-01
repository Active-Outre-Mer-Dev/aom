import { Meta, StoryObj } from "@storybook/react";
import { WindowFrame } from "@aomdev/ui";

const meta = { title: "Molecules/WindowFrame", component: WindowFrame } satisfies Meta<typeof WindowFrame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <WindowFrame heading="sxm-quiz.js" className="h-64 w-2/4 mx-auto">
        <p>Hello there</p>
      </WindowFrame>
    );
  }
};
