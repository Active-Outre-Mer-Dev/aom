import { Meta, StoryObj } from "@storybook/react";
import { TextInput, PasswordInput as UiPassword } from "@aomdev/ui";
import { IconAt } from "@tabler/icons-react";
import { Button } from "@aomdev/ui";

const meta = {
  title: "Molecules/Input",
  component: TextInput,
  args: { placeholder: "Placeholder", description: "", error: "" },
  //@ts-expect-error
  argTypes: { size: { type: "select", options: ["sm", "md", "lg"] } }
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Email",
    required: true
  }
};

export const WithIcon: Story = {
  args: {
    icon: <IconAt size={14} />,
    label: "Email",
    required: false
  }
};

export const PasswordInput: Story = {
  render: props => {
    return <UiPassword {...props} label="Password" placeholder="" />;
  }
};

export const TestInput: Story = {
  render: props => {
    return (
      <div className="flex gap-2">
        <TextInput {...props} />
        <Button size={"small"}>Hello there</Button>
      </div>
    );
  }
};
