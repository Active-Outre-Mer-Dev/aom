import { Feature } from "./feature";
import { Title } from "@aom/ui";
import { QuizDemo } from "./quiz-demo";

export function FeatureList() {
  return (
    <>
      <section className="pb-36 bg-white pt-24  relative">
        <div className="w-5/6 mx-auto flex flex-col gap-36">
          <div className="flex gap-4">
            <div className="basis-1/2">
              <Title
                order={2}
                className="bg-gradient-to-b mb-8 text-5xl font-heading font-medium from-neutral-600 to-neutral-900 bg-clip-text text-transparent"
              >
                Learn as you play
              </Title>
              <p style={{ width: "calc(36ch, 90%, 72ch)" }} className="text-lg leading-relaxed">
                Say goodbye to mundane study sessions and hello to immersive learning! Our app allows you to
                learn as you play. Each question you encounter is an opportunity to expand your knowledge
                about Saint Martin.
              </p>
            </div>
            <Card />
          </div>
          <div className="flex gap-4">
            <Card />
            <div className="basis-1/2">
              <Title order={2} className=" mb-8 text-5xl font-heading font-medium ">
                <span className="bg-gradient-to-b from-neutral-600 to-neutral-900 bg-clip-text text-transparent">
                  Multiple Topics,
                </span>{" "}
                <br />
                <span className="bg-gradient-to-b from-neutral-600 to-neutral-900 bg-clip-text text-transparent">
                  Endless Exploration
                </span>
              </Title>
              <p style={{ width: "calc(36ch, 90%, 72ch)" }} className="text-lg leading-relaxed">
                We believe in catering to diverse interests. That's why our quiz app covers a wide range of
                topics related to Saint Martin. Explore the facets of Saint Martin that intrigue you the most
                and dive deep into its rich tapestry of information.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="basis-1/2">
              <Title order={2} className=" mb-8 text-5xl font-heading font-medium ">
                <span className="bg-gradient-to-b from-neutral-600 to-neutral-900 bg-clip-text text-transparent">
                  Variety of quizzes
                </span>{" "}
              </Title>
              <p style={{ width: "calc(36ch, 90%, 72ch)" }} className="text-lg leading-relaxed">
                Variety is the spice of life, and we've made sure to sprinkle it generously in our app.
                Challenge yourself with a mix of quiz formats, including multiple choice, true or false, fill
                in the blanks, and more. Each quiz presents a unique set of questions, keeping you engaged and
                motivated throughout your learning journey.
              </p>
            </div>
            <QuizDemo />
          </div>
        </div>
      </section>
    </>
  );
}

function Card() {
  return (
    <div className="basis-1/2  relative aspect-video">
      <div className="-inset-0.5 bg-primary-300 blur-md absolute" />
      <div className="relative bg-white w-full h-full" />
    </div>
  );
}
