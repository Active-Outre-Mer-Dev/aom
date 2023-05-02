import { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "ui";

const meta = { title: "Molecules/Password Input", component: PasswordInput } satisfies Meta<
  typeof PasswordInput
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {};
