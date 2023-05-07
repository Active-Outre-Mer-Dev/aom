import { Title } from "ui";
import { Button } from "@/components/home";

export default function Home() {
  return (
    <main>
      <section className="container">
        <Title
          order={1}
          className="text-transparent bg-gradient-to-r bg-clip-text from-primary-600 to-tertiary-400 text-center mb-5 font-heading"
        >
          SXM Quiz
        </Title>
        <p className="text-center text-3xl mb-8">
          Test your knowledge of Saint Martin - Are you a local expert or a tourist?
        </p>
        <div className="mx-auto  flex justify-center gap-4">
          <Button size={"large"} variant={"cta"}>
            Start quiz
          </Button>
          <Button size={"large"} variant={"neutral"}>
            Sign up
          </Button>
        </div>
      </section>
    </main>
  );
}
