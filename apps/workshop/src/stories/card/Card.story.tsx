import { Card } from "ui";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "ui";

const meta = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: <p className="text-neutral-900 dark:text-neutral-100">Hello there!</p>,
    className: "w-fit"
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: { variant: "filled" }
};

export const Outline: Story = {
  args: { variant: "outline" }
};

export const WithSection: Story = {
  args: {
    variant: "filled"
  },
  render: props => {
    return (
      <>
        <Card {...props} className="text-neutral-900 w-[300px] dark:text-neutral-50">
          <Card.Section className="overflow-hidden">
            <img src={"/pixel.webp"} width={"100%"} />
          </Card.Section>
          <h3 className="text-2xl mb-2 font-semibold mt-2">Pixel art</h3>
          <p className="dark:text-neutral-100 mb-4 text-neutral-800">
            Incididunt commodo ullamco pariatur. Dolor adipisicing deserunt voluptate dolore ut mollit dolor.
            In ad ea consequat ut amet nisi officia culpa voluptate consequat consequat eu sunt. Eu incididunt
            sint ea Lorem
          </p>
          <Button fullWidth>Get started</Button>
        </Card>
      </>
    );
  }
};
