import { test, expect } from "@playwright/experimental-ct-react";
import { ThemeIcon } from ".";

test.describe("ui/ThemeIcon", () => {
  test("it renders", async ({ mount }) => {
    const component = await mount(<ThemeIcon />);
    await expect(component).toBeVisible();
  });
});
