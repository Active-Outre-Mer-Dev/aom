import { test, expect } from "@playwright/experimental-ct-react";
import { Title } from ".";

test.describe("ui/title", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Title order={1}>Hello there</Title>);
    await expect(component).toBeVisible();
  });
  test("renders children", async ({ mount }) => {
    const component = await mount(<Title>Hello there</Title>);
    await expect(component).toContainText("Hello there");
  });
});
