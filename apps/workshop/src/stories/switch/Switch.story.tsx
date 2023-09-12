import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@aomdev/ui";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useState } from "react";

const meta = {
  title: "Molecules/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    required: false,
    label: "My crazy label",
    size: "md"
  },
  argTypes: {
    //@ts-expect-error
    size: { options: ["sm", "md", "lg"], type: "radio" }
  }
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchInput: Story = {
  args: {}
};

export const SwitchWithIcon: Story = {
  render() {
    return <CustomSwitch />;
  }
};

function CustomSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      onCheckedChange={setChecked}
      label={"Toggle mode"}
      thumbIcon={checked ? <IconMoonStars size={12} /> : <IconSun size={12} />}
    />
  );
}
