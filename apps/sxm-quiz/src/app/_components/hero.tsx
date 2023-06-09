import { GetStarted } from "@/components/home/get-started";
import { Button } from "@/components/home";

export function Hero() {
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
            <GetStarted />
            <Button size={"lg"} variant={"neutral"}>
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
