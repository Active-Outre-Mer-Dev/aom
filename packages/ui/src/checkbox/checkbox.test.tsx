import { test, expect } from "@playwright/experimental-ct-react";
import { Checkbox } from ".";

test.describe("ui/checkbox", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Checkbox />);
    await expect(component).toBeVisible();
  });
});
