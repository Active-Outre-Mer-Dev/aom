import { expect, test } from "@playwright/experimental-ct-react";
import { Slider } from ".";

test.describe("ui/slider", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Slider />);
    await expect(component).toBeVisible();
  });
});
