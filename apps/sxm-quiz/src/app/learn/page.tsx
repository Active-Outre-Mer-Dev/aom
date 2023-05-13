import { Title } from "ui";
import { Button } from "@/components/learn";
import { RandomFacts } from "./random-facts";
import blobGeo from "@/assets/blob-geo.svg";
import blobHistory from "@/assets/blob-hist.svg";
import blobHistory2 from "@/assets/blob-hist-2.svg";
import blobGeo2 from "@/assets/blob-geo-2.svg";
import blobGeo3 from "@/assets/blob-geo-3.svg";
import blobEco from "@/assets/blob-eco.svg";
import blobEco2 from "@/assets/blob-eco-2.svg";
import blobEco3 from "@/assets/blob-eco-3.svg";
import { Articles } from "./Articles";

const blobs = {
  geo: [blobGeo, blobGeo2, blobGeo3],
  history: [blobHistory, blobHistory2],
  economy: [blobEco, blobEco2, blobEco3],
  getRandomBlob(key: "history" | "geo" | "economy") {
    return () => {
      return this[key][Math.floor(Math.random() * this[key].length)];
    };
  }
};

export default function Page() {
  return (
    <>
      <section className="mb-20 container mx-auto">
        <Title order={1} className="font-heading text-neutral-800 text-center leading-none mb-2">
          Lessons
        </Title>
        <p className="text-xl text-center text-neutral-600">For Saint Martiners, by Saint Martiners</p>
      </section>
      <section className="container mx-auto mb-36">
        <Articles getRandomBlob={blobs.getRandomBlob("history")} type="history" title="Featured" />
      </section>
      <section className="mb-36">
        <div className="bg-primary-600 p-4 w-3/4 mx-auto text-primary-100  rounded-xl">
          <Title order={2} className="text-primary-50 font-heading mb-2">
            Become a contributor
          </Title>
          <p style={{ width: "clamp(36ch, 90%, 64ch)" }} className="text-xl mb-4">
            Have some knowledge you&apos;d like to share with the island? Look no further! Become a
            contributor today and join our community!
          </p>
          <Button variant="cta">Get started</Button>
        </div>
      </section>
      <section className="container mx-auto mb-36">
        <Articles getRandomBlob={blobs.getRandomBlob("geo")} title="Community" type="geography" />
      </section>
      <section className="mb-36">
        <RandomFacts />
      </section>
      <section className="container mx-auto mb-36">
        <Articles getRandomBlob={blobs.getRandomBlob("economy")} title="Recently added" type="economy" />
      </section>
    </>
  );
}
