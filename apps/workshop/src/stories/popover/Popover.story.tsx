import { StoryObj, Meta } from "@storybook/react";
import { Popover, Button, TextInput } from "@aom/ui";
import { cardStyles } from "@aom/ui/src/card/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const meta = { component: Popover, title: "Molecules/Popover" } satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <div className="justify-center flex">
        <Popover>
          <Popover.Trigger asChild>
            <Button>Hello there</Button>
          </Popover.Trigger>
          <Popover.Content sideOffset={5} className={cardStyles({ variant: "filled" })}>
            <div className="flex justify-between">
              <span
                className={`font-heading font-medium text-lg block mb-2 text-neutral-800 
            dark:text-neutral-100`}
              >
                Settings
              </span>
              <Popover.Close aria-label="Close" />
            </div>
            <div className="space-y-4">
              <TextInput label="Width" size={"sm"} />
              <TextInput label="Height" size={"sm"} />
              <TextInput label="Position" size={"sm"} />
            </div>
          </Popover.Content>
        </Popover>
      </div>
    );
  }
};

export const Animated: Story = {
  render() {
    return <AnimatedPopover />;
  }
};

function AnimatedPopover() {
  const [open, setOpen] = useState(false);
  return (
    <div className="justify-center flex">
      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button>Hello there</Button>
        </Popover.Trigger>
        <AnimatePresence>
          {open && (
            <Popover.Content
              asChild
              portalProps={{ forceMount: true }}
              sideOffset={5}
              className={cardStyles({ variant: "filled" })}
            >
              <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                <div className="flex justify-between">
                  <span
                    className={`font-heading font-medium text-lg block mb-2 text-neutral-800 
        dark:text-neutral-100`}
                  >
                    Settings
                  </span>
                  <Popover.Close aria-label="Close" />
                </div>
                <div className="space-y-4">
                  <TextInput label="Width" size={"sm"} />
                  <TextInput label="Height" size={"sm"} />
                  <TextInput label="Position" size={"sm"} />
                </div>
              </motion.div>
            </Popover.Content>
          )}
        </AnimatePresence>
      </Popover>
    </div>
  );
}
