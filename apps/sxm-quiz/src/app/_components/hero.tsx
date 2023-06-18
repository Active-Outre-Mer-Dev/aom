import { GetStarted } from "@/components/home/get-started";
import { Button } from "@/components/home";
import bg from "@/assets/home-gradient.png";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <section
        style={{ height: "calc(100vh - 64px)" }}
        className="bg-neutral-900  pt-10 pb-20 relative  relative"
      >
        <img src={bg.src} alt={""} className="object-fill absolute top-0 left-0 w-full h-full" />
        <div className="w-3/5 text-neutral-100 mx-auto relative dark flex flex-col justify-center h-full gap-4">
          <Link
            href={"/blog/introducing-sxm-quiz"}
            className={`px-4 py-1 block border border-neutral-700 mb-6 rounded-full
             bg-neutral-900 text-neutral-200 hover:border-primary-500 duration-200 ease-out w-fit`}
          >
            Introducing SXM Quiz. <span className="text-neutral-300 font-medium">Read blog →</span>
          </Link>
          <h1 className="text-7xl text-neutral-50  mb-4 font-heading">
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-primary-500 to-primary-50">
              Discover{" "}
            </span>
            the island of <br /> Saint Martin
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
      </section>
    </>
  );
}
