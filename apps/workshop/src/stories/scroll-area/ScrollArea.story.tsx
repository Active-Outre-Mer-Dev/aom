import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "ui";

const meta = {
  title: "Molecules/Scroll Area",
  component: ScrollArea,
  args: {
    scrollHideDelay: 500
  },
  argTypes: {
    //@ts-expect-error
    type: { options: ["always", "hover", "scroll", "never"], type: "select" }
  }
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scroll: Story = {
  args: {
    children: (
      <p className="p-2 w-96">
        Duis non esse est velit velit culpa ad ex. Esse est dolor consectetur exercitation officia et. Ut
        deserunt est laboris in excepteur Lorem ea nisi in Lorem. Incididunt ullamco sint occaecat pariatur
        sunt ad labore fugiat sunt. Ex ad deserunt laborum minim ipsum exercitation esse. Voluptate dolore
        enim ex ut cupidatat labore consectetur ex duis et ea. Tempor reprehenderit in aute reprehenderit
        reprehenderit ut eiusmod laborum. Aute occaecat dolor labore sunt velit mollit dolor labore Lorem.
        Consequat ex non tempor exercitation veniam deserunt duis deserunt ipsum nulla laborum tempor. Anim ex
        mollit id dolor qui non. Do culpa reprehenderit exercitation consectetur laborum pariatur aliqua ex
        esse. Quis laborum eu est excepteur exercitation laboris incididunt culpa velit non qui consequat. Ut
        ad dolore excepteur dolor sint duis esse anim enim. Culpa proident laboris ullamco laboris culpa
        fugiat labore dolor aute et occaecat. Fugiat fugiat aliqua sunt excepteur proident incididunt cillum
        dolore laboris consequat esse.Tempor proident Lorem Lorem et incididunt nisi dolor velit tempor ea
        velit. Mollit dolore nulla cupidatat sint et nulla aute enim. Irure culpa non esse minim. Ex nisi
        pariatur consectetur qui voluptate tempor occaecat sunt ea commodo veniam est deserunt laboris.
      </p>
    ),
    className: "h-96 w-72 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100",
    type: "hover"
  }
};
