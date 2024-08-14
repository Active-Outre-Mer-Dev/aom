import { Meta, StoryObj } from "@storybook/react";
import { Tabs as UiTabs, Button } from "@aomdev/ui/client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconUser, IconLock } from "@tabler/icons-react";
import { TextInput } from "@aomdev/ui";

const meta = { title: "Atoms/Tabs", component: UiTabs } satisfies Meta<typeof UiTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

function Account() {
  return (
    <>
      <h3 className="text-2xl font-heading font-medium mb-1">Account</h3>
      <p className="mb-4 text-neutral-700 dark:text-neutral-200">
        Make changes to your account here. Click save when you&apos;re done
      </p>
      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextInput label="Name" />
        <TextInput label="Username" />
        <Button className="block ml-auto">Save</Button>
      </form>
    </>
  );
}

function Password() {
  return (
    <>
      <h3 className="text-2xl font-heading font-medium mb-1">Password</h3>
      <p className="mb-4 text-neutral-700 dark:text-neutral-200">
        Change your password here. After saving, you&apos;ll be logged out.
      </p>
      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextInput label="Current password" />
        <TextInput label="New Password" />
        <Button className="block ml-auto">Save</Button>
      </form>
    </>
  );
}

export const Tabs: Story = {
  render: () => {
    return (
      <div className="flex justify-center">
        <UiTabs
          defaultValue="account"
          className="text-neutral-800 dark:text-neutral-100 w-2/4"
        >
          <UiTabs.List>
            <UiTabs.Trigger value="account">Account</UiTabs.Trigger>
            <UiTabs.Trigger value="password">Password</UiTabs.Trigger>
          </UiTabs.List>
          <UiTabs.Content value="account">
            <Account />
          </UiTabs.Content>
          <UiTabs.Content value="password">
            <Password />
          </UiTabs.Content>
        </UiTabs>
      </div>
    );
  }
};

const values = [
  { label: "Account", value: "account", Icon: IconUser },
  { label: "Password", value: "password", Icon: IconLock }
];

function FramerTab() {
  const [active, setActive] = useState("account");
  return (
    <div className="flex justify-center">
      <UiTabs
        value={active}
        onValueChange={setActive}
        className="text-neutral-800 dark:text-neutral-100 w-2/4"
      >
        <UiTabs.List>
          {values.map((tab, key) => {
            const last = key === values.length - 1;
            return (
              <UiTabs.Trigger
                disabled={last}
                customBg
                value={tab.value}
              >
                {active === tab.value && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute  bg-primary-500 bottom-0 h-[2px] w-full z-[5]"
                  ></motion.div>
                )}
                <span className="relative z-10">{tab.label}</span>
              </UiTabs.Trigger>
            );
          })}
        </UiTabs.List>
        <UiTabs.Content value="account">
          <Account />
        </UiTabs.Content>
        <UiTabs.Content value="password">
          <Password />
        </UiTabs.Content>
      </UiTabs>
    </div>
  );
}

export const AnimatedTabs: Story = { render: () => <FramerTab /> };

function Icons() {
  const [active, setActive] = useState("account");

  return (
    <div className="flex justify-center">
      <UiTabs
        value={active}
        onValueChange={setActive}
        className="text-neutral-800 dark:text-neutral-100 w-2/4"
      >
        <UiTabs.List>
          {values.map(({ Icon, ...tab }) => {
            return (
              <UiTabs.Trigger
                customBg
                value={tab.value}
              >
                {active === tab.value && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute  bg-primary-500 bottom-0 h-[2px] w-full z-[5]"
                  ></motion.div>
                )}
                <span className="relative flex gap-1 items-center z-10">
                  <Icon size={16} />
                  {tab.label}
                </span>
              </UiTabs.Trigger>
            );
          })}
        </UiTabs.List>
        <UiTabs.Content value="account">
          <Account />
        </UiTabs.Content>
        <UiTabs.Content value="password">
          <Password />
        </UiTabs.Content>
      </UiTabs>
    </div>
  );
}

export const WithIcons: Story = {
  render: () => <Icons />
};
