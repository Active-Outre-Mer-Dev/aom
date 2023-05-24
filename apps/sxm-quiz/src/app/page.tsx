import { Button } from "@/components/home";
import { Boxes, GraduationCap, BarChart3 } from "lucide-react";
import Image from "next/image";
import photo from "@/assets/Group 3.png";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <section className="mx-auto  pb-20 bg-white pt-10">
        <h2 className="text-center text-5xl font-medium mb-4 font-heading">
          Unveil the essence of Saint Martin
        </h2>
        <p className="text-center text-2xl mb-4">
          Written articles by the community to teach you everything about the island!
        </p>
        <Button variant={"neutral"} className="block mx-auto mb-5">
          Get started
        </Button>
        <figure className="mx-auto w-fit">
          <Image src={photo} alt={""} />
        </figure>
      </section>
      <section className="py-20 radial-gradient bg-gradient-to-r flex flex-col items-center gap-6 from-primary-800 to-neutral-900 text-white">
        <h2 className="text-center text-5xl font-medium  font-heading">Become a contributor</h2>
        <p className="text-center" style={{ width: "clamp(36ch, 90%, 50ch)" }}>
          Have some knowledge you&apos;d like to share with the island? Look no further! Become a contributor
          today and join our community!
        </p>
        <Button variant="neutral" className="text-primary-600">
          Learn more
        </Button>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <>
      <section className=" bg-white pt-10 pb-20 relative mb-36">
        <div className="w-3/5 mx-auto">
          <h1 className="text-8xl text-neutral-800  mb-8 font-heading">
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-primary-600 to-primary-400">
              Discover{" "}
            </span>
            the island <br /> of Saint Martin
          </h1>
          <p className=" text-2xl mb-8">
            Test your knowledge, explore hidden gems, and learn fascinating facts about Saint Martin!{" "}
          </p>
          <div className="  flex  gap-4">
            <Button size={"large"}>Start quiz</Button>
            <Button size={"large"} variant={"neutral"}>
              Learn more
            </Button>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1684516878">
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

function Features() {
  return (
    <>
      <section className="pb-36  relative">
        <div className="flex container mx-auto gap-4 ">
          <div className="grow basis-1/2">
            <header>
              <h2 className=" text-5xl font-medium mb-10 font-heading">Features</h2>
            </header>
            <p>
              In elit incididunt duis culpa do consectetur Lorem culpa. Ipsum aute eiusmod tempor ea consequat
              excepteur sunt in incididunt ea duis dolor irure veniam. Fugiat velit sit in eu proident quis
              sunt dolore elit commodo nisi.
            </p>
          </div>
          <div className="grid grid-cols-2  basis-1/2 grow  gap-4">
            <div className="bg-primary-800 flex-col text-white rounded-md aspect-video flex items-center justify-center gap-4  ">
              <Boxes className="" />
              <span className="text-white font-medium text-xl">Multiple Categories</span>
            </div>
            <div className="bg-error-600  flex flex-col items-center justify-center gap-4 text-white rounded-md aspect-video  ">
              <GraduationCap />
              <span className="text-white font-medium text-xl">Learn as you play</span>
            </div>
            <div className="bg-success-700  flex flex-col items-center justify-center gap-4 text-white rounded-md aspect-video  ">
              <BarChart3 />
              <span className="text-white font-medium text-xl">Leaderboards</span>
            </div>
            <div className="bg-warn-600  flex flex-col items-center justify-center gap-4 text-white rounded-md aspect-video   "></div>
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
