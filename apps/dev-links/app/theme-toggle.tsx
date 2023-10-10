import { ActionIcon, Dropdown } from "@aomdev/ui";
import { useState } from "react";

type Theme = {
  theme: "light" | "dark" | "system";
  resolvedTheme: "light" | "dark";
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>({ theme: "dark", resolvedTheme: "dark" });

  const onClick = (nextTheme: Theme["theme"]) => {
    const html = document.documentElement;
    if (nextTheme === "system") {
      const matches = window.matchMedia(`(prefers-color-scheme:dark)`).matches;
      setTheme({ theme: nextTheme, resolvedTheme: matches ? "dark" : "light" });
      if (matches) {
        html.classList.replace("light", "dark");
      } else {
        html.classList.replace("dark", "light");
      }
    } else {
      setTheme({ theme: nextTheme, resolvedTheme: nextTheme });
      if (nextTheme === "light") {
        html.classList.replace("dark", "light");
      } else {
        html.classList.replace("light", "dark");
      }
    }
  };

  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <ActionIcon
          variant={"subtle"}
          className="dark:bg-secondary-600/30 dark:text-secondary-200 bg-tertiary-200/30 text-tertiary-600"
          aria-label="Toggle theme"
        >
          <span className="dark:inline-block hidden">S</span>
          <span className="inline-block dark:hidden">M</span>
        </ActionIcon>
      </Dropdown.Trigger>
      <Dropdown.Content style={{ zIndex: 9999 }}>
        <Dropdown.Item onClick={() => onClick("light")}>Light</Dropdown.Item>
        <Dropdown.Item onClick={() => onClick("dark")}>Dark</Dropdown.Item>
        <Dropdown.Item onClick={() => onClick("system")}>System</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
