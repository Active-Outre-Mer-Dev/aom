import { StoryObj, Meta } from "@storybook/react";
import { Dropdown } from "ui";
import {
  IconSettings,
  IconMessage,
  IconPhoto,
  IconSearch,
  IconTransferOut,
  IconTrash
} from "@tabler/icons-react";

const meta = { title: "atoms/Dropdown", component: Dropdown } satisfies Meta<typeof Dropdown>;
import { Button } from "ui";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

export default meta;

type Story = StoryObj<typeof meta>;

export const Drop: Story = {
  render: () => {
    return (
      <div className="flex justify-center">
        <Dropdown>
          <Dropdown.Trigger asChild>
            <Button>Menu</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item rightSection={"⌘+T"}>New Tab </Dropdown.Item>
            <Dropdown.Item rightSection={"⌘+N"}>New Window </Dropdown.Item>
            <Dropdown.Item disabled rightSection={" ⇧+⌘+N"}>
              New Private Window{" "}
            </Dropdown.Item>
            <Dropdown.Separator className="h-[1px] bg-neutral-100 my-[5px]" />
            <Dropdown.Label className="text-xs h-5 flex items-center text-neutral-500 mb-[2px] px-[5px] relative pl-[25px]">
              Project
            </Dropdown.Label>
            <Dropdown.Item>Share</Dropdown.Item>
            <Dropdown.Item>Bookmark</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </div>
    );
  }
};

export const WithIcons: Story = {
  render: () => {
    return (
      <div className="flex justify-center">
        <Dropdown>
          <Dropdown.Trigger asChild>
            <Button>Menu</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Label>Application</Dropdown.Label>
            <Dropdown.Item icon={<IconSettings size={14} />}>Settings</Dropdown.Item>
            <Dropdown.Item icon={<IconMessage size={14} />}>Message</Dropdown.Item>
            <Dropdown.Item icon={<IconPhoto size={14} />}>Photo</Dropdown.Item>
            <Dropdown.Item disabled rightSection={"⌘+K"} icon={<IconSearch size={14} />}>
              Search
            </Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Label>Dangerzone</Dropdown.Label>
            <Dropdown.Item icon={<IconTransferOut size={14} />}>Transfer my account</Dropdown.Item>
            <Dropdown.Item icon={<IconTrash size={14} />}>Delete my account</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </div>
    );
  }
};

export const Animated: Story = {
  render: () => {
    return <AnimatedDropdown />;
  }
};

const variant: Variants = {
  enter: {
    y: -5,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -5,
    opacity: 0
  }
};

function AnimatedDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <Dropdown open={open} onOpenChange={setOpen}>
        <Dropdown.Trigger asChild>
          <Button>Menu</Button>
        </Dropdown.Trigger>
        <AnimatePresence>
          {open && (
            <Dropdown.Content asChild portalProps={{ forceMount: true }}>
              <motion.div
                key={"animated"}
                variants={variant}
                initial={"enter"}
                animate={"visible"}
                exit={"exit"}
              >
                <Dropdown.Label>Application</Dropdown.Label>
                <Dropdown.Item icon={<IconSettings size={14} />}>Settings</Dropdown.Item>
                <Dropdown.Item icon={<IconMessage size={14} />}>Message</Dropdown.Item>
                <Dropdown.Item icon={<IconPhoto size={14} />}>Photo</Dropdown.Item>
                <Dropdown.Item disabled rightSection={"⌘+K"} icon={<IconSearch size={14} />}>
                  Search
                </Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Label>Dangerzone</Dropdown.Label>
                <Dropdown.Item icon={<IconTransferOut size={14} />}>Transfer my account</Dropdown.Item>
                <Dropdown.Item icon={<IconTrash size={14} />}>Delete my account</Dropdown.Item>
              </motion.div>
            </Dropdown.Content>
          )}
        </AnimatePresence>
      </Dropdown>
    </div>
  );
}
