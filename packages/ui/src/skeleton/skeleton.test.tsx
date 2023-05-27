import { test, expect } from "@playwright/experimental-ct-react";
import { Skeleton } from ".";

test.describe("ui/skeleton", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Skeleton className="w-36 h-2" />);
    await expect(component).toBeVisible();
  });
});
