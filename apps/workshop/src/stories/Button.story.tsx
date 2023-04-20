import type { Meta, StoryObj } from "@storybook/react";
import { IconLoader2 as Spinner, IconMail } from "@tabler/icons-react";
import { Button } from "ui";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: { size: "medium", children: "Button" },
  argTypes: {
    //@ts-expect-error
    size: { options: ["small", "medium", "large"], type: "radio" },
    //@ts-expect-error
    disabled: { options: [false, true], type: "radio" },
    //@ts-expect-error
    fullWidth: { options: [true, false], type: "radio" }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary"
  }
};

export const Neutral: Story = {
  args: {
    variant: "neutral"
  }
};

export const Cta: Story = {
  args: {
    variant: "cta"
  }
};

export const Error: Story = {
  args: {
    variant: "error"
  }
};

export const Loading: Story = {
  args: {
    variant: "primary",
    loading: true
  },
  render: props => {
    return (
      <Button {...props} className=" ">
        {" "}
        {props.loading && <Spinner size={16} className="inline-block mr-2 animate-spin" />}
        {props.children}
      </Button>
    );
  }
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    children: "Send email"
  },
  render: props => {
    return (
      <Button {...props} className="inline-flex justify-center items-center">
        <IconMail size={16} className="inline-block mr-2" />
        {props.children}
      </Button>
    );
  }
};
