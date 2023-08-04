import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@aomdev/ui";

const meta = {
  title: "Molecules/Avatar",
  component: Avatar,
  argTypes: {
    //@ts-expect-error
    size: { type: "select", options: ["sm", "md", "lg"] },
    //@ts-expect-error
    color: { type: "select", options: ["gray", "primary", "success", "error"] }
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { src: "profile.jpg" } };

export const Fallback: Story = {
  render(props) {
    return <Avatar {...props}></Avatar>;
  }
};

export const CustomFallback: Story = {
  render(props) {
    return <Avatar {...props}>AC</Avatar>;
  }
};

export const Group: Story = {
  argTypes: {
    //@ts-expect-error
    size: { type: "select", options: ["sm", "md", "lg"] },
    spacing: { type: "select", options: ["sm", "md", "lg"] }
  },
  render(props) {
    return (
      // @ts-expect-error
      <Avatar.Group spacing={props.spacing}>
        <Avatar size={props.size} />
        <Avatar size={props.size} src={"/profile.jpg"} />
        <Avatar size={props.size} src={"/profile-2.jpg"} />
        <Avatar size={props.size} src={"/profile-3.jpg"} />
        <Avatar size={props.size} fallbackProps={{ className: "font-semibold " }}>
          +5
        </Avatar>
      </Avatar.Group>
    );
  }
};
