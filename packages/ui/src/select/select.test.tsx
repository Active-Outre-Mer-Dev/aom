import { test, expect } from "@playwright/experimental-ct-react";
import { Select } from ".";

test.describe("ui/select", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Select />);
    await expect(component).toBeVisible();
  });
});
