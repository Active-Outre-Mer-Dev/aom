"use client";
import { ContainerProvider } from "./container.context";
import { Card } from "@aom/ui";
import { QuizTabs } from "../quiz-tabs";
import type { QuestionCategory } from "@/questions";

type PropTypes = {
  children: React.ReactNode;
  type: QuestionCategory;
  title: string;
  description: string;
  questionCount: number;
};

export function Container({ children, ...props }: PropTypes) {
  return (
    <ContainerProvider {...props}>
      <Card className="basis-2/5">
        <QuizTabs />
      </Card>
      <Card className="basis-3/5 ">{children}</Card>
    </ContainerProvider>
  );
}
