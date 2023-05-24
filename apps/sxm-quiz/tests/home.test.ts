import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SXM Quiz/);
});

test("has get start quiz button", async ({ page }) => {
  await expect(page.getByRole("button", { name: "Start quiz" })).toBeVisible();
});
