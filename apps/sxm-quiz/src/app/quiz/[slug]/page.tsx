import { allQuizzes } from "@/quizzes";
import { randomize } from "@/randomize-quiz";
import { Container } from "./_components/container";
import { Suspense, lazy } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

const Quiz = lazy(() => import("./_components/question-quiz"));
const ListQuiz = lazy(() => import("./_components/list-quiz"));

export default async function Page({ params }: { params: { slug: string } }) {
  const quizGame =
    params.slug === "random"
      ? allQuizzes.all[Math.floor(Math.random() * allQuizzes.all.length)]
      : allQuizzes.all.find(({ slug }) => slug === params.slug)!;
  const questions = quizGame.type === "question" ? randomize(quizGame.questions) : [];
  const supabase = createServerComponentClient<Database>({ cookies });
  const quizPromise = supabase.from("quiz").select("completed, slug").eq("slug", quizGame.slug).single();
  const scorePromise = supabase.from("scores").select("score").eq("quiz_slug", quizGame.slug);

  const [{ data, error }, { error: scoreError, data: scoreData }] = await Promise.all([
    quizPromise,
    scorePromise
  ]);

  if (error || scoreError) notFound();

  const avg = scoreData ? Math.round(scoreData.reduce((a, c) => a + c.score, 0) / scoreData.length) : 0;

  const update = async () => {
    "use server";
    revalidatePath(`/quiz/${quizGame.slug}`);
  };

  return (
    <main style={{ minHeight: "calc(100vh - 64px - 80px)" }} className="flex gap-5 w-4/5 mx-auto mt-5 mb-36">
      <Container
        relatedArticles={quizGame.relatedArticles}
        update={update}
        average={avg || 0}
        category={quizGame.category}
        questionCount={quizGame.type === "question" ? questions.length : quizGame.options.length}
        description={quizGame.description}
        count={data?.completed ?? 0}
        title={quizGame.title}
        type={quizGame.type}
      >
        <Suspense fallback={<p>Loading quiz...</p>}>
          {quizGame.type === "list" && <ListQuiz options={quizGame.options} task={quizGame.task} />}
          {quizGame.type === "question" && <Quiz questions={questions} />}
        </Suspense>
      </Container>
    </main>
  );
}
