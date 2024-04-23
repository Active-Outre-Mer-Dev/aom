/* esbuild-ignore */
import { test, expect } from "@playwright/experimental-ct-react";
import { ActionIcon } from ".";

test.describe("ui/action-icon", () => {
  test("is visible", async ({ mount }) => {
    const component = await mount(<ActionIcon>P</ActionIcon>);
    await expect(component).toBeVisible();
  });
  test("renders children", async ({ mount }) => {
    const component = await mount(
      <ActionIcon>
        <p>H</p>
      </ActionIcon>
    );
    expect((await component.all()).length).toStrictEqual(1);
  });

  test("receives event handlers", async ({ mount }) => {
    let clicked = false;
    const component = await mount(<ActionIcon onClick={() => (clicked = true)}>H</ActionIcon>);
    await component.click();
    expect(clicked).toBeTruthy();
  });
});
