import Image from "next/image";
import yalo from "@/assets/yalo-frame.png";
import yaloLogo from "@/assets/logo.png";
import { Cards } from "@/components/Cards";
import { Button } from "@/components/shared";

export default function Home() {
  return (
    <main>
      <section className="h-screen mb-20  hero-gradient w-full flex flex-col justify-center  relative">
        <header>
          <h1 className="font-heading relative text-8xl text-center">
            From online obscurity <br /> to <span className="text-gradient">digital supremacy</span>
          </h1>
        </header>
        <p style={{ width: "clamp(36ch, 90%, 66ch)" }} className="text-center mx-auto mt-10 text-xl">
          Veniam ex incididunt incididunt tempor qui excepteur Lorem sunt eu tempor in in voluptate aliqua.
          Occaecat esse aliqua commodo labore veniam est pariatur ipsum eiusmod duis duis pariatur.
        </p>
        <Button size={"large"} className="w-fit mx-auto mt-16">
          Get started
        </Button>
      </section>
      <section className="mb-52 container mx-auto flex gap-4  relative">
        <article className="basis-2/4 grow">
          <header className="mb-7">
            <h2 className="text-4xl font-heading">
              From concept to launch, AOM will bring your{" "}
              <span className="text-gradient">vision to life</span>{" "}
            </h2>
          </header>
          <div className="">
            <p style={{ width: "clamp(36ch, 100%, 60ch)" }} className="text-lg mb-5">
              Non adipisicing cupidatat labore nostrud Lorem. Ea ea sunt aliquip pariatur excepteur occaecat
              id do adipisicing. Consectetur et tempor nostrud aliquip est qui commodo. Irure est id ad esse
              dolor deserunt consequat. Ex exercitation eu irure consequat. Non proident in occaecat commodo
              proident amet magna mollit. Aute exercitation pariatur voluptate in aute aliquip.
            </p>
            <Button>Learn more</Button>
          </div>
        </article>
        <div className="basis-2/4 grow bg-neutral-800 flex justify-center items-center relative"></div>
      </section>
      <section className="mb-36 container mx-auto ">
        <header className="flex flex-col items-center space-y-6 mb-16">
          <h2 className="text-4xl text-center font-heading ">
            Build your <span className="text-gradient">online presence</span>
          </h2>
          <p style={{ width: "clamp(36ch, 100%, 60ch)" }} className="text-center text-lg">
            In today&apos;s fast-paced business world, building a website is essential for any business
            looking to establish a strong online presence and succeed in the digital space.
          </p>
        </header>
        <div className="grid grid-cols-3 gap-4">
          <Cards />
          <div className="col-span-full mt-10 space-y-7 text-center">
            <h2 className="text-4xl font-heading">
              No matter your use case, <br /> AOM <span className="text-gradient">will deliver</span>
            </h2>
            <Button variant="neutral" className="mx-auto block ">
              Our services
            </Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-52">
        <div className="h-96 flex testimonial-gradient relative items-center gap-4 rounded-3xl px-16 py-5">
          <div className="basis-2/4 space-y-4">
            <div className="flex items-center gap-7 mb-4">
              <Image src={yaloLogo} alt={""} width={50} />
              <h2 className="font-heading  text-4xl">Yalography</h2>
            </div>
            <p className="text-lg">
              &quot;Ex labore irure labore proident excepteur aute ipsum ea exercitation ex officia fugiat.
              Aute culpa duis esse ut mollit ad aliqua aliquip consectetur. Est eiusmod occaecat ad Lorem elit
              mollit aute quis ipsum.&quot;
            </p>
            <div>
              <p className="text-neutral-200 mb-2">Yasmino Lousiy</p>
              <p className="text-neutral-300 text-sm">CEO of Yalography</p>
            </div>
          </div>
          <figure className="basis-2/4">
            <Image src={yalo} alt={""} />
          </figure>
        </div>
      </section>
      <section className="container mx-auto mb-52">
        <header className="flex flex-col items-center space-y-6 mb-7">
          <h2 className="text-4xl font-heading text-center">
            We build websites <span className="text-gradient">from the future</span>, today
          </h2>
          <p style={{ width: "clamp(36ch, 100%, 60ch)" }} className="text-center text-lg">
            We build websites using modern technologies to ensure that it remains relevant and effective for
            years to come. With rapid advances in technology, websites built using outdated technologies can
            quickly become obsolete and require costly updates.
          </p>
        </header>
        <Button variant="neutral" className="mx-auto block ">
          Our work
        </Button>
        <div style={{ gridAutoRows: "200px" }} className="grid grid-cols-12  gap-4 mt-10">
          <Project span={"col-span-3"} />
          <Project span={"col-span-6"} />
          <Project span={"col-span-3"} rowSpan={"row-span-2"} />
          <Project span={"col-span-4"} />
          <Project span={"col-span-5"} />
        </div>
      </section>
      <section className="px-16 cta-gradient py-20 ">
        <h2 className="text-center text-4xl font-heading mb-7">
          Ready to unlock your business&apos;s full potential and become a <br />
          <span className="text-gradient">digital game-changer</span>?
        </h2>
        <div>
          {" "}
          <Button className="mx-auto">Contact us</Button>{" "}
        </div>
      </section>
    </main>
  );
}

type PropTypes = {
  span: string;
  rowSpan?: string;
};

function Project({ span, rowSpan }: PropTypes) {
  return (
    <div
      className={`${span} ${rowSpan} gap-2 px-4 py-5 flex flex-col justify-end bg-neutral-800 noise rounded-xl`}
    >
      <p className="font-heading text-xl">SXM quiz</p>
      <p className="text-neutral-200">Elit amet est enim labore enim exercitation magna est.</p>
    </div>
  );
}
