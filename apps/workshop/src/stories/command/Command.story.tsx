import { Button, Command } from "@aomdev/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = { title: "Atoms/Command", component: Command } satisfies Meta<typeof Command>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: props => {
    return <MyCommand />;
  }
};

function MyCommand() {
  const [state, setState] = useState(false);

  return (
    <>
      <Button onClick={() => setState(true)}>Open menu</Button>
      <Command contentProps={{ className: "w-4/5" }} open={state} onOpenChange={setState}>
        <Command.Input placeholder="Search quizzes" />
        <Command.List>
          <Command.Group heading="Question quizzes">
            <Command.Item>History quiz</Command.Item>
            <Command.Item>Geography quiz</Command.Item>
            <Command.Item>Economy quiz</Command.Item>
          </Command.Group>
          <Command.Seperator />
          <Command.Group heading="List quizzes">
            <Command.Item>All beaches</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </>
  );
}
