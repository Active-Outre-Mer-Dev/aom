import { StoryObj, Meta } from "@storybook/react";
import { RingProgress } from "@aomdev/ui";

const meta = {
  title: "Molecules/RingProgress",
  component: RingProgress,
  args: { color: "success", value: 87, size: 150, rounded: false },
  argTypes: {
    value: { control: { type: "range", max: 100 } },
    //@ts-expect-error
    color: { type: "select", options: ["primary", "success", "error"] }
  }
} satisfies Meta<typeof RingProgress>;

export default meta;

type Story = StoryObj<typeof RingProgress>;

export const Default: Story = {};

export const WithLabel: Story = {
  render(props) {
    const color =
      props.color === "primary"
        ? "text-primary-600 dark:text-primary-500"
        : props.color === "success"
        ? "text-success-600  dark:text-success-500"
        : "text-error-600  dark:text-error-500";
    return <RingProgress {...props} label={<Label color={color} value={props.value} />} />;
  }
};

function Label({ color, value }: { color: string; value: number }) {
  return <p className={`font-heading text-2xl font-medium ${color}`}>{value}</p>;
}

export const WithBackground: Story = {
  render(props) {
    const bg =
      props.color === "primary"
        ? "fill-primary-200/30 dark:fill-primary-500/10"
        : props.color === "success"
        ? "fill-success-200/30  dark:fill-success-500/10"
        : "fill-error-200/30  dark:fill-error-500/10";
    const color =
      props.color === "primary"
        ? "text-primary-600 dark:text-primary-500"
        : props.color === "success"
        ? "text-success-600  dark:text-success-500"
        : "text-error-600  dark:text-error-500";
    return <RingProgress rootCircle={bg} {...props} label={<Label color={color} value={props.value} />} />;
  }
};
