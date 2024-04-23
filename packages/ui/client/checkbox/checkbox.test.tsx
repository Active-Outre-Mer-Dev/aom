import { test, expect } from "@playwright/experimental-ct-react";
import { Checkbox } from ".";

test.describe("ui/checkbox", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Checkbox label="Hello world" />);
    await expect(component).toBeVisible();
  });
  test("renders label", async ({ mount }) => {
    const component = await mount(<Checkbox label="Hello world" />);
    await expect(component).toHaveText("Hello world");
  });
});
