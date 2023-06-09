import { Button } from "@/components/home";
import Image from "next/image";
import photo from "@/assets/Group 3.png";
import { FeatureList } from "./_components/feature-list";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureList />
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
