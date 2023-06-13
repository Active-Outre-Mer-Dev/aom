import { Meta, StoryObj } from "@storybook/react";
import { parameters } from "../../parameters";
import { Radio as UiRadio } from "@aom/ui";

const meta = { title: "Molecules/Radio", component: UiRadio, parameters } satisfies Meta<
  typeof UiRadio
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Radio: Story = {
  args: {},
  render: props => {
    return (
      <UiRadio {...props}>
        <UiRadio.Item  value="blue" label="Blue" />
        <UiRadio.Item value="red" label="Red" />
        <UiRadio.Item value="orange" label="Orange" />
      </UiRadio>
    );
  }
};
