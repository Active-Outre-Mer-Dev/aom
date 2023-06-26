"use client";
import { ContainerProvider } from "./container.context";
import { Card } from "@aom/ui";
import { QuizTabs } from "../quiz-tabs";
import type { QuestionCategory } from "@/questions";
import { RelatedArticle } from "@/quizzes";

type PropTypes = {
  children: React.ReactNode;
  type: "question" | "list";
  title: string;
  description: string;
  questionCount: number;
  category: QuestionCategory;
  count: number;
  update: () => Promise<void>;
  average: number;
  relatedArticles: RelatedArticle[];
};

export function Container({ children, ...props }: PropTypes) {
  return (
    <ContainerProvider {...props}>
      <Card className="basis-2/5">
        <QuizTabs count={props.count} />
      </Card>
      <Card className="basis-3/5 ">{children}</Card>
    </ContainerProvider>
  );
}
