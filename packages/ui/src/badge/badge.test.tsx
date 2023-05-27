import { test, expect } from "@playwright/experimental-ct-react";
import { Badge } from ".";

test.describe("ui/badge", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Badge />);
    await expect(component).toBeVisible();
  });
  test("renders children", async ({ mount }) => {
    const component = await mount(<Badge>Hello there</Badge>);
    await expect(component).toContainText("Hello there");
  });
});
