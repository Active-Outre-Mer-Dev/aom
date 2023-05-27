import { test, expect } from "@playwright/experimental-ct-react";
import { PasswordInput } from ".";

test.describe("ui/password-input", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<PasswordInput />);
    await expect(component).toBeVisible();
  });
  test("button is visible", async ({ mount }) => {
    const component = await mount(<PasswordInput />);
    await expect(component.getByRole("button", { includeHidden: true })).toBeVisible();
  });
  test("input type is password", async ({ mount }) => {
    const component = await mount(<PasswordInput />);
    expect(await component.getByRole("textbox").getAttribute("type")).toStrictEqual("password");
  });
  test("toggle button switches input type to text", async ({ mount }) => {
    const component = await mount(<PasswordInput />);
    await component.getByRole("button", { includeHidden: true }).click();
    expect(await component.getByRole("textbox").getAttribute("type")).toStrictEqual("text");
  });
});
