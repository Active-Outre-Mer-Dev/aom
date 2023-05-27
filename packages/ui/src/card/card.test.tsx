import { test, expect } from "@playwright/experimental-ct-react";
import { Card } from ".";

test.describe("ui/card", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Card>Hello there</Card>);
    await expect(component).toBeVisible();
  });
  test("renders chidlren", async ({ mount }) => {
    const component = await mount(<Card>Hello there</Card>);
    await expect(component).toContainText("Hello there");
  });
});
