import { test, expect } from "@playwright/experimental-ct-react";
import { Progress } from ".";

test.describe("ui/progress", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Progress className="w-36" />);
    await expect(component).toBeVisible();
  });
  test("receives value", async ({ mount }) => {
    let value = 45;
    const component = await mount(<Progress className="w-36" value={45} />);
    expect(await component.getAttribute("aria-valuenow")).toStrictEqual(value.toString());
  });
});
