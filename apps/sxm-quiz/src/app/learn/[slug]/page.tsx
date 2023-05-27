import { ActionIcon } from "./client";
import { Title } from "@aom/ui";
import { Bookmark, Share, ExternalLink } from "lucide-react";
import profile from "@/assets/agis.jpg";
import pixel2 from "@/assets/pixel.jpg";
import { TableOfContents } from "./toc";
import { generateContent, getAllMetadata } from "@/lib/get-content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllMetadata();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const props = await generateContent(params.slug);
  if (props.error) notFound();
  const { content, headings, metadata, readTime } = props;
  return (
    <>
      <div className="flex gap-2 w-4/6 items-center border-b border-neutral-200 pb-5 mb-10">
        <span className="text-3xl font-medium text-neutral-900">Articles</span>
        <span className="h-10 w-[2px] bg-neutral-900" />
        <span className="text-error-600 font-medium text-3xl">{metadata.type}</span>
      </div>
      <div className="mb-36 flex gap-7">
        <div className=" basis-4/6">
          <article className="mb-16">
            <div className="mb-10">
              <header className="flex items-center justify-between mb-4">
                <h1 id={"intro"} className={"text-4xl leading-none font-medium font-heading"}>
                  {metadata.title}
                </h1>
                <div className="gap-2 flex">
                  <ActionIcon aria-label="Bookmark" color={"secondary"} size={"lg"}>
                    <Bookmark aria-hidden="true" size={"50%"} />
                  </ActionIcon>
                  <ActionIcon aria-label="Share" color={"primary"} size={"lg"}>
                    <Share aria-hidden="true" size={"50%"} />
                  </ActionIcon>
                </div>
              </header>
              <p style={{ width: "clamp(36ch, 90%, 75ch)" }} className="text-lg mb-4">
                {metadata.intro}
              </p>
              <span className="text-neutral-600 text-sm block mb-6">
                {metadata.creationDate} - {readTime} min read
              </span>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-2">
                  <img src={profile.src} width={50} height={50} className="rounded-full object-cover" />
                  <div>
                    <span className="font-medium block text-neutral-800">{metadata.author}</span>
                    <span className="text-neutral-600">SXM Quiz core team</span>
                  </div>
                </div>
                <div>
                  <a
                    target="_blank"
                    href={"https://github.com/bluepnwage"}
                    className="text-primary-500 flex items-center"
                  >
                    Github <ExternalLink size={16} className="inline-block ml-2" />
                  </a>
                </div>
              </div>
            </div>
            <img src={metadata.thumbnail} alt={""} className={"rounded-xl mb-10"} />
            <div
              className={`prose-ul:list-disc prose-headings:font-medium prose-h2:mt-10 prose-lg prose-h2:mb-4
               prose-h2:text-3xl prose-a:text-primary-500`}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </article>
          <div className="space-y-10">
            <Title order={2} className="font-medium font-heading mb-6">
              Related Articles
            </Title>
            <RelatedArticles />
            <RelatedArticles />
            <RelatedArticles />
          </div>
        </div>
        <TableOfContents headings={headings} />
      </div>
    </>
  );
}

function RelatedArticles() {
  return (
    <div className="flex gap-4">
      <figure className="basis-1/3 grow aspect-video">
        <img src={pixel2.src} className="w-full h-full  rounded-xl" alt={""} />
      </figure>
      <div className="basis-2/3 grow">
        <Title order={3} className="font-heading font-medium mb-4">
          SXM Geo
        </Title>
        <p className="">
          Minim incididunt aliquip dolor sint ullamco quis deserunt ad est enim deserunt magna in. Nostrud
          irure dolore do sit reprehenderit laborum pariatur quis enim ad cupidatat sint.
        </p>
      </div>
    </div>
  );
}
