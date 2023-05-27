import { test, expect } from "@playwright/experimental-ct-react";
import { RingProgress } from ".";

test.describe("ui/ring-progress", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<RingProgress size={50} value={50} />);
    await expect(component).toBeVisible();
  });
});
