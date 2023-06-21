import { test, expect } from "@playwright/experimental-ct-react";
import { WindowFrame } from ".";

test.describe("Window Frame", () => {
  test("it renders", async ({ mount }) => {
    const component = await mount(<WindowFrame />);
    await expect(component).toBeVisible();
  });
  test("renders children", async ({ mount }) => {
    const component = await mount(<WindowFrame>Hello there</WindowFrame>);
    await expect(component).toContainText(/hello there/gi);
  });
});
