import { Meta, StoryObj } from "@storybook/react";
import { Skeleton as UiSkeleton } from "ui";

const meta = {
  title: "Skeleton",
  component: UiSkeleton,
  tags: ["autodocs"],
  args: {
    rounded: false
  }
} satisfies Meta<typeof UiSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Static: Story = {
  render: props => {
    return <UiSkeleton {...props} className={"h-6 w-64"} />;
  }
};

export const Animated: Story = {
  args: { animate: true },
  render: props => {
    return <UiSkeleton {...props} className={"h-6 w-64"} />;
  }
};

export const Group: Story = {
  args: { animate: true },
  render: props => {
    return (
      <div className="flex gap-1 items-center">
        <UiSkeleton {...props} rounded className="h-12 w-12" />
        <div className="space-y-2">
          <UiSkeleton {...props} className={"h-4 w-64"} />
          <UiSkeleton {...props} className={"h-4 w-48"} />
        </div>
      </div>
    );
  }
};
