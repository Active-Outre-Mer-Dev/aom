import { test, expect } from "@playwright/experimental-ct-react";
import { TextInput } from ".";

test.describe("ui/text-input", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<TextInput />);
    await expect(component).toBeVisible();
  });
  test("renders icon", async ({ mount }) => {
    const component = await mount(<TextInput icon={"icon"} />);
    await expect(component).toContainText("icon");
  });
  test("renders label", async ({ mount }) => {
    const component = await mount(<TextInput label="Email" />);
    await expect(component).toContainText("Email");
  });
  test("renders star when input is required", async ({ mount }) => {
    const component = await mount(<TextInput label="Email" required />);
    await expect(component.getByLabel("required")).toBeVisible();
    await expect(component).toContainText("*");
  });
  test("renders description", async ({ mount }) => {
    const component = await mount(<TextInput description="Enter email" />);
    await expect(component).toContainText("Enter email");
  });
});
