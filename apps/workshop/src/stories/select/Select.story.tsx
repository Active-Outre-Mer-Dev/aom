import { Meta, StoryObj } from "@storybook/react";
import { Select as UiSelect } from "@aomdev/ui";

const meta = {
  title: "Molecules/Select",
  component: UiSelect,
  args: {
    items: [
      { label: "Blue", value: "blue" },
      { label: "Orange", value: "orange" },
      { label: "Pink", value: "pink" }
    ],

    fullWidth: false,
    triggerProps: { "aria-label": "Color" }
  },
  argTypes: {
    //@ts-expect-error
    size: { type: "select", options: ["sm", "md", "lg"] }
  }
} satisfies Meta<typeof UiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Select: Story = {};

export const WithGroups: Story = {
  args: { placeholder: "Select food" },
  render: props => {
    return (
      <UiSelect fullWidth={props.fullWidth} placeholder={props.placeholder}>
        <UiSelect.Group label="Fruits">
          <UiSelect.Item value="orange">Orange</UiSelect.Item>
          <UiSelect.Item value="apple">Apple</UiSelect.Item>
          <UiSelect.Item value="banana">Banana</UiSelect.Item>
        </UiSelect.Group>
        <UiSelect.Group label="Vegetables">
          <UiSelect.Item value="salad">Salad</UiSelect.Item>
          <UiSelect.Item value="carrots">Carrots</UiSelect.Item>
          <UiSelect.Item value="pumpkin">Pumpkin</UiSelect.Item>
        </UiSelect.Group>
        <UiSelect.Group label="Meat">
          <UiSelect.Item value="chicken">Chicken</UiSelect.Item>
          <UiSelect.Item value="steak">Steak</UiSelect.Item>
          <UiSelect.Item value="pork">Pork</UiSelect.Item>
        </UiSelect.Group>
      </UiSelect>
    );
  }
};
