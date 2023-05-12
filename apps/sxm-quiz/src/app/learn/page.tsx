import { Card, Title, Badge } from "ui";
import { Button } from "@/components/learn";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import blobGeo from "@/assets/blob-geo.svg";
import blobHistory from "@/assets/blob-hist.svg";
import blobHistory2 from "@/assets/blob-hist-2.svg";
import blobGeo2 from "@/assets/blob-geo-2.svg";
import blobGeo3 from "@/assets/blob-geo-3.svg";

const blobs = {
  geo: [blobGeo, blobGeo2, blobGeo3],
  history: [blobHistory, blobHistory2],
  getRandomBlob(key: "history" | "geo") {
    return this[key][Math.floor(Math.random() * this[key].length)];
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
        <Title order={2} className="font-heading mb-10">
          All articles
        </Title>
        <div className="grid lg:grid-cols-4 gap-4">
          {articles.map((_, key) => {
            const blob = blobs.getRandomBlob("history");
            return (
              <Card key={key} className="overflow-hidden">
                <Card.Section className=" h-36 mb-1 relative flex items-center justify-center ">
                  <Image src={blob} fill alt="" className=" object-cover" />
                  <Title order={3} className="relative  text-center font-heading text-white">
                    Intro to SXM History
                  </Title>
                </Card.Section>
                <Badge color="error" className="mb-1">
                  History
                </Badge>
                <p className="mb-4">Irure cupidatat deserunt laboris est sint exercitation.</p>
                <hr className="my-4 -mx-4 text-neutral-200" />
                <div className="flex gap-2">
                  <Button className="grow">Read article</Button>
                  <button
                    aria-label="Bookmark article"
                    className={`relative text-secondary-600 basis-10 flex items-center justify-center active:top-[2px]`}
                  >
                    <Bookmark />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
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
        <Title order={2} className="font-heading mb-10">
          Community articles
        </Title>
        <div className="grid lg:grid-cols-4 gap-4">
          {articles.map((_, key) => {
            const blob = blobs.getRandomBlob("geo");
            return (
              <Card key={key} className="overflow-hidden">
                <Card.Section className=" h-36 mb-1 relative flex items-center justify-center ">
                  <Image src={blob} fill alt="" className=" object-cover" />
                  <Title order={3} className="relative text-center font-heading text-white">
                    Intro to SXM Geography
                  </Title>
                </Card.Section>
                <Badge color="secondary" className="mb-1">
                  Geography
                </Badge>
                <p className="mb-4">Irure cupidatat deserunt laboris est sint exercitation.</p>
                <hr className="my-4 -mx-4 text-neutral-200" />
                <div className="flex gap-2">
                  <Button className="grow">Read article</Button>
                  <button
                    aria-label="Bookmark article"
                    className={`relative text-secondary-600 basis-10 flex items-center justify-center active:top-[2px]`}
                  >
                    <Bookmark />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

const articles = Array(8).fill(null);
