"use client";
import { Command } from "@aom/ui";
import { useState, useEffect } from "react";
import { SearchIcon, FileText, Circle } from "lucide-react";
import { ListQuiz, QuestionQuiz } from "@/quizzes";
import Link from "next/link";

type PropTypes = {
  quizzes: {
    questionQuizzes: QuestionQuiz[];
    listQuizzes: ListQuiz[];
  };
};

export function Search({ quizzes }: PropTypes) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const openMenu = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", openMenu);
    return () => window.removeEventListener("keydown", openMenu);
  }, []);

  const onClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md items-center flex gap-1 px-4 min-w-fit text-neutral-500 h-8 ring-1 ring-neutral-200"
      >
        <SearchIcon size={14} className="text-neutral-500" />
        Search...
        <kbd className="text-xs bg-neutral-200/30 ring-1 ring-neutral-100 inline-block ml-6 p-[1px] rounded-sm">
          Ctrl + K
        </kbd>
      </button>
      <Command contentProps={{ className: "w-2/4", blur: true }} open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Search" />
        <Command.List>
          <Command.Group heading="Articles">
            <Command.Item>
              <Link
                onClick={onClose}
                className="w-full h-full -m-3 p-3 block"
                href={`/learn/history/sxm-history`}
              >
                <FileText size={16} className="inline-block mr-2 text-neutral-700" />
                SXM History Intro
              </Link>
            </Command.Item>
          </Command.Group>
          <Command.Group heading="Question Quizzes">
            {quizzes.questionQuizzes.map(quiz => {
              return (
                <Command.Item key={quiz.slug}>
                  <Link
                    onClick={onClose}
                    className="w-full h-full -m-3 p-3 block"
                    href={`/quiz/${quiz.slug}`}
                  >
                    <Circle size={16} className="inline-block mr-2 text-neutral-700" />
                    {quiz.title}
                  </Link>
                </Command.Item>
              );
            })}
          </Command.Group>
          <Command.Group heading="List Quizzes">
            {quizzes.listQuizzes.map(quiz => {
              return (
                <Command.Item key={quiz.slug}>
                  <Link
                    onClick={onClose}
                    className="w-full h-full -m-3 p-3 block"
                    href={`/quiz/${quiz.slug}`}
                  >
                    <Circle size={16} className="inline-block mr-2 text-neutral-700" />
                    {quiz.title}
                  </Link>
                </Command.Item>
              );
            })}
          </Command.Group>
        </Command.List>
      </Command>
    </>
  );
}
