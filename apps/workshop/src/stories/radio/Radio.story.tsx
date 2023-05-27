import { Meta, StoryObj } from "@storybook/react";
import { parameters } from "../../parameters";
import { Radio as UiRadio } from "@aom/ui";

const meta = { title: "Molecules/Radio", component: UiRadio.Group, parameters } satisfies Meta<
  typeof UiRadio.Group
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Radio: Story = {
  args: {},
  render: props => {
    return (
      <UiRadio.Group {...props}>
        <UiRadio value="blue" label="Blue" />
        <UiRadio value="red" label="Red" />
        <UiRadio value="orange" label="Orange" />
      </UiRadio.Group>
    );
  }
};
