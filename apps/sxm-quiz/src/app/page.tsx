import { Button } from "@/components/home";
import Image from "next/image";
import photo from "@/assets/Group 3.png";
import { FeatureList } from "./_components/feature-list";
import { Hero } from "./_components/hero";
import gradient from "@/assets/contribute-gradient.png";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureList />
      <section className="mx-auto relative  pb-20 bg-white pt-10 overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent
        via-primary-400 to-transparent `}
        />
        <h2
          className={`text-center text-5xl font-medium mb-10 font-heading
        bg-gradient-to-b from-neutral-600 to-neutral-900 bg-clip-text text-transparent `}
        >
          Unveil the essence of Saint Martin
        </h2>
        <p className="text-center text-2xl mb-4 ">
          Written articles by the community to teach you everything about the island!
        </p>
        <Button variant={"neutral"} className="block mx-auto mb-5 ">
          Get started
        </Button>
        <figure className="mx-auto w-fit ">
          <Image src={photo} alt={""} />
        </figure>
      </section>
      <section className="py-20 relative flex flex-col items-center gap-6 from-primary-800 to-neutral-900 text-white">
        <img src={gradient.src} loading="lazy" className="absolute top-0 left-0 w-full h-full object-fill" />
        <h2 className="text-center text-5xl font-medium  font-heading relative">Become a contributor</h2>
        <p className="text-center relative text-lg" style={{ width: "clamp(36ch, 90%, 50ch)" }}>
          Have some knowledge you&apos;d like to share with the island? Look no further! Become a contributor
          today and join our community!
        </p>
        <Button variant="neutral" className="text-primary-600 relative">
          Learn more
        </Button>
      </section>
    </main>
  );
}
