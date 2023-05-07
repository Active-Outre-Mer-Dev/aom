import { Card, Title, Badge } from "ui";
import { Button } from "@/components/learn";
import { Bookmark } from "lucide-react";

export default function Page() {
  return (
    <main>
      <section className="mb-20 container mx-auto">
        <Title order={1} className="font-heading leading-none mb-5">
          For Saint Martiners, <br /> by Saint Martiners
        </Title>
        <p className="text-2xl mb-5">Take a deep dive into SXM's culture and enrichen your knowledge.</p>
      </section>
      <section className="container mx-auto mb-36">
        <Title order={2} className="font-heading mb-5">
          Categories
        </Title>
        <div className="grid gap-4 grid-cols-3">
          <div className="bg-error-600 h-36 flex items-center justify-center text-error-50 text-2xl rounded-md">
            History
          </div>
          <div className="bg-secondary-600 h-36 flex items-center justify-center text-secondary-50 text-2xl rounded-md">
            Geography
          </div>
          <div className="bg-tertiary-600 h-36 flex items-center justify-center text-tertiary-50 text-2xl rounded-md">
            Economy
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-36">
        <Title order={2} className="font-heading mb-10">
          All articles
        </Title>
        <div className="grid lg:grid-cols-4 gap-4">
          {articles.map((_, key) => {
            return (
              <Card key={key}>
                <Card.Section className="bg-error-600 h-36"></Card.Section>
                <Badge color="error" className="mb-1">
                  History
                </Badge>
                <Title order={3} className="font-heading mb-2 leading-none">
                  Intro to SXM History
                </Title>
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
        <div className="bg-primary-600 p-4 w-3/4 mx-auto text-primary-100  rounded-md">
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
            return (
              <Card key={key}>
                <Card.Section className="bg-secondary-600 h-36 mb-1"></Card.Section>
                <Badge color="secondary" className="mb-1">
                  Geography
                </Badge>
                <Title order={3} className="font-heading mb-2">
                  Intro to SXM geography
                </Title>
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
    </main>
  );
}

const articles = Array(8).fill(null);
