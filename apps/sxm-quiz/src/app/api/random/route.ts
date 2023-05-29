import { allQuizzes } from "@/quizzes";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export const GET = () => {
  const headers = new Headers();
  headers.set("content-type", "application/json");
  const randomQuiz = allQuizzes.all[Math.floor(Math.random() * allQuizzes.all.length)];
  return new Response(JSON.stringify({ data: randomQuiz }), { status: 200, headers });
};
