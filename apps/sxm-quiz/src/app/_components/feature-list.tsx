import { GraduationCap } from "lucide-react";
import { Feature } from "./feature";
import { Boxes } from "lucide-react";
import { Layers } from "lucide-react";

export function FeatureList() {
  return (
    <>
      <section className="pb-36  relative">
        <div className="w-4/5 mx-auto flex flex-col items-center ">
          <div className="mb-16">
            <header className="text-center">
              <h2 className=" text-5xl font-medium mb-10 font-heading">Features</h2>
            </header>
            <p style={{ width: "clamp(36ch, 90%, 72ch)" }} className="text-center mx-auto text-xl">
              Immerse yourself in the world of Saint Martin with our engaging quiz app! Explore a variety of
              topics, test your knowledge with different quiz formats, and unlock fascinating insights. Expand
              your understanding while enjoying a fun learning experience. Get ready to become an expert on
              Saint Martin!
            </p>
          </div>
          <div className="flex gap-6 justify-around">
            <Feature Icon={GraduationCap} title="Learn as you play">
              Say goodbye to mundane study sessions and hello to immersive learning! Our app allows you to
              learn as you play. Each question you encounter is an opportunity to expand your knowledge about
              Saint Martin.
            </Feature>
            <Feature Icon={Boxes} title="Multiple Topics, Endless Exploration">
              We believe in catering to diverse interests. That's why our quiz app covers a wide range of
              topics related to Saint Martin. Explore the facets of Saint Martin that intrigue you the most
              and dive deep into its rich tapestry of information.
            </Feature>
            <Feature Icon={Layers} title="Variety of quizzes">
              Variety is the spice of life, and we've made sure to sprinkle it generously in our app.
              Challenge yourself with a mix of quiz formats, including multiple choice, true or false, fill in
              the blanks, and more. Each quiz presents a unique set of questions, keeping you engaged and
              motivated throughout your learning journey.
            </Feature>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1684520909">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
