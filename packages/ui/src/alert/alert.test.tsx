import { test, expect } from "@playwright/experimental-ct-react";
import { Alert } from ".";

test.describe("ui/alert", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Alert />);
    await expect(component).toBeVisible();
  });
  test("renders children", async ({ mount }) => {
    const component = await mount(<Alert>Child</Alert>);
    await expect(component).toContainText("Child");
  });
  test("has alert role", async ({ mount }) => {
    const component = await mount(<Alert />);
    expect(await component.getAttribute("role")).toStrictEqual("alert");
  });
  test("renders custom icon", async ({ mount }) => {
    const component = await mount(<Alert icon="icon" />);
    await expect(component).toContainText("icon");
  });
});
