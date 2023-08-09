import type { Meta, StoryObj } from "@storybook/react";
import { IconLoader2 as Spinner, IconMail } from "@tabler/icons-react";
import { Button } from "@aomdev/ui";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecules/Button",
  component: Button,
  args: { size: "md", children: "Button" },
  argTypes: {
    children: { type: "string", description: "Button label" },
    disabled: { type: "boolean", defaultValue: false, description: "Disabled state" },
    fullWidth: { type: "boolean", description: "Sets button to 100% width of parent element" },
    size: {
      options: ["sm", "md", "lg"],
      // @ts-expect-error
      type: "radio",
      defaultValue: "md",
      description: "Predefined button size"
    },
    variant: {
      options: ["primary", "neutral", "cta", "error"],
      //@ts-expect-error
      type: "select",
      // controls: { type: "select" },
      description: "Determines the role of the button"
    }
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

export const CTA: Story = {
  args: {
    variant: "cta"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline"
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
