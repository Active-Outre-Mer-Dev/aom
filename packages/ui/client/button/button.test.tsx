/* esbuild-ignore */
import { expect, test } from "@playwright/experimental-ct-react";
import { Button } from ".";

test.describe("ui/button", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<Button>Hello</Button>);
    await expect(component).toBeVisible();
  });
  test("children are rendered", async ({ mount }) => {
    const component = await mount(<Button>Get started</Button>);
    await expect(component).toContainText(/get started/gi);
  });
  test("receives event handlers", async ({ mount }) => {
    let clicked = false;
    const component = await mount(<Button onClick={() => (clicked = true)}>Click</Button>);
    await component.click();
    expect(clicked).toBeTruthy();
  });
});
