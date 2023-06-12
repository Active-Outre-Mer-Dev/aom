import { test, expect } from "@playwright/experimental-ct-react";
import { ListQuiz } from "../src/app/quiz/[slug]/_components/list-quiz";

const options = ["Maho", "Orient Bay", "Simpson Bay"];
const task = "Name every beach";

test("Shows task", async ({ mount }) => {
  const component = await mount(<ListQuiz task={task} options={options} />);
  await expect(component).toContainText(task);
});

test("Start button renders input and give up button", async ({ mount }) => {
  const component = await mount(<ListQuiz options={options} task={task} />);
  await component.getByRole("button", { name: /start/gi }).click();
  await expect(component.getByRole("textbox")).toBeVisible();
  await expect(component.getByRole("button", { name: /give up/gi })).toBeVisible();
});

test("Filling input with correct option resets it", async ({ mount }) => {
  const component = await mount(<ListQuiz options={options} task={task} />);
  await component.getByRole("button", { name: /start/gi }).click();
  const input = component.getByRole("textbox");
  await input.fill("Maho");
  expect(await input.inputValue()).toBeFalsy();
});

test("Shows options already filled", async ({ mount }) => {
  const component = await mount(<ListQuiz options={options} task={task} />);
  await component.getByRole("button", { name: /start/gi }).click();
  const slicedOptions = options.slice(0, 2);
  const input = component.getByRole("textbox");
  for (const option of slicedOptions) {
    const regex = new RegExp(`.${option}`, "gi");
    await input.fill(option);
    await expect(component).toContainText(regex);
  }
});

test("Filling all options shows summary", async ({ mount }) => {
  const component = await mount(<ListQuiz options={options} task={task} />);
  await component.getByRole("button", { name: /start/gi }).click();
  const input = component.getByRole("textbox");
  for (const option of options) {
    await input.fill(option);
  }
  await expect(component).toContainText("Summary");
});

test("Give up button instantly shows summary", async ({ mount }) => {
  const component = await mount(<ListQuiz options={options} task={task} />);
  await component.getByRole("button", { name: /start/gi }).click();
  await component.getByRole("button", { name: /give up/gi }).click();
  await expect(component).toContainText("Summary");
});
