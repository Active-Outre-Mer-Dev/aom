import { test, expect } from "@playwright/experimental-ct-react";
import { Switch } from ".";

test.describe("ui/switch", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Switch />);
    await expect(component).toBeVisible();
  });
});
