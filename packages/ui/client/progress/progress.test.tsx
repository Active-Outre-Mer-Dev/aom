import { test, expect } from "@playwright/experimental-ct-react";
import { Progress } from ".";

test.describe("ui/progress", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Progress className="w-36" />);
    await expect(component).toBeVisible();
  });
});
