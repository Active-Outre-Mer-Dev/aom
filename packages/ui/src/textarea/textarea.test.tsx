import { test, expect } from "@playwright/experimental-ct-react";
import { Textarea } from ".";

test.describe("ui/textarea", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Textarea />);
    await expect(component).toBeVisible();
  });
  test("renders label", async ({ mount }) => {
    const component = await mount(<Textarea label="Custom message" />);
    await expect(component).toContainText("Custom message");
  });
});
