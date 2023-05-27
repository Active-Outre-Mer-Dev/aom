import { StoryObj, Meta } from "@storybook/react";
import { Dialog, Button, TextInput } from "@aom/ui";
import { IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const meta = { title: "Atoms/Dialog", component: Dialog } satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultDialog: Story = {
  render: () => {
    return (
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>Open modal</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <div className="flex justify-between items-center ">
            <Dialog.Title>Account</Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label="Close">
                <IconX size={15} className="text-neutral-700 dark:text-neutral-200" />
              </button>
            </Dialog.Close>
          </div>
          <div className="space-y-4">
            <TextInput label="First name" />
            <TextInput label="Last name" />
            <Button className="block ml-auto">Save</Button>
          </div>
        </Dialog.Content>
      </Dialog>
    );
  }
};

export const AnimatedDialog: Story = {
  render: () => {
    return <Animated />;
  }
};

function Animated() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Open modal</Button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Content portalProps={{ forceMount: true }} asChild>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4 ">
                <Dialog.Title>Account</Dialog.Title>
                <Dialog.Close asChild>
                  <button aria-label="Close">
                    <IconX size={15} className="text-neutral-700 dark:text-neutral-200" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="space-y-4">
                <TextInput label="First name" />
                <TextInput label="Last name" />
                <Button className="block ml-auto">Save</Button>
              </div>
            </motion.div>
          </Dialog.Content>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
