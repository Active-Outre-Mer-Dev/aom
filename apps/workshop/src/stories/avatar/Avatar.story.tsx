import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@aomdev/ui";

const meta = { title: "Molecules/Avatar", component: Avatar } satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { src: "profile.jpg" } };

export const Fallback: Story = {
  render() {
    return <Avatar></Avatar>;
  }
};

export const CustomFallback: Story = {
  render() {
    return <Avatar>AC</Avatar>;
  }
};

export const Group: Story = {
  render() {
    return (
      <Avatar.Group>
        <Avatar src={"/profile.jpg"} />
        <Avatar />
        <Avatar />
        <Avatar>+5</Avatar>
      </Avatar.Group>
    );
  }
};
