import { test, expect } from "@playwright/experimental-ct-react";
import { Quiz } from "../src/app/quiz/[slug]/quiz";
import { allQuizzes } from "../src/quizzes";

const history = allQuizzes.question.find(({ category }) => category === "history")!;

test("contains four buttons", async ({ mount }) => {
  const component = await mount(<Quiz questions={history.questions} title={"test"} />);
  const buttons = await component.getByRole("button").all();
  expect(buttons.length).toStrictEqual(4);
});

test("Correct answer is visible as an option", async ({ mount }) => {
  const component = await mount(<Quiz questions={history.questions} title="test" />);
  for (const question of history.questions) {
    const button = component.getByRole("button", { name: question.answer });
    await expect(button).toBeVisible();
    await button.click();
  }
});

test("Choosing correct option increments streak by 1", async ({ mount }) => {
  const component = await mount(<Quiz questions={history.questions} title="test" />);
  const question = history.questions[0];
  await component.getByRole("button", { name: question.answer }).click();
  await expect(component).toContainText(/Streak: 1/gi);
});

test("Question is rendered", async ({ mount }) => {
  const component = await mount(<Quiz questions={history.questions} title="test" />);
  const question = history.questions[0];
  await expect(component).toContainText(question.question);
});
