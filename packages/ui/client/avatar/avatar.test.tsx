import { test, expect } from "@playwright/experimental-ct-react";
import { Avatar } from ".";

test.describe("ui/Avatar", () => {
  test("it renders", async ({ mount }) => {
    const component = await mount(<Avatar />);
    await expect(component).toBeVisible();
  });
  test("renders custom fallback", async ({ mount }) => {
    const customText = "AC";
    const component = await mount(<Avatar>{customText}</Avatar>);
    await expect(component).toContainText(customText);
  });
});
