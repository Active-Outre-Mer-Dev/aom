import Image from "next/image";
import pixel from "@/assets/pixel.webp";
import { ActionIcon } from "./client";
import { Title } from "ui";
import { Bookmark, Share, ExternalLink } from "lucide-react";
import profile from "@/assets/agis.jpg";
import pixel2 from "@/assets/pixel.jpg";
import { TableOfContents } from "./toc";
import { generateContent } from "@/lib/get-content";

export default async function Page() {
  const { metadata, content, headings } = await generateContent("sxm-history");
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
                {metadata.creationDate} - 5 min read
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
            <Image src={pixel} alt={""} className={"rounded-xl mb-10"} />
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            {/* <div className="space-y-8">
              <p>
                Qui fugiat consectetur commodo laborum veniam voluptate proident aliquip est ea ullamco
                laboris sit. Lorem ut ullamco pariatur elit velit ut commodo proident. Adipisicing commodo
                amet incididunt velit eiusmod nostrud excepteur cupidatat incididunt. Sint sint et tempor ut
                amet minim incididunt. Dolor qui culpa irure est ut incididunt esse magna non aute ea eu
                consequat. Ad aliqua voluptate ut cupidatat reprehenderit. Elit elit cillum in labore tempor
                dolor est ad ullamco ipsum aliqua enim nulla. Dolor non officia cillum consectetur. Elit
                occaecat consectetur incididunt nostrud excepteur velit Lorem ut.
              </p>
              <Title id={"title2"} order={2} className="font-heading font-medium">
                Title 2
              </Title>
              <p>
                Eiusmod amet velit non do sit aliqua id et ipsum aute officia. Esse laborum et eu incididunt.
                Amet ut cillum deserunt in velit aliqua aliqua qui. Eiusmod proident aute reprehenderit dolor
                incididunt do deserunt. Ullamco nulla nulla cupidatat dolor eiusmod velit nostrud ad excepteur
                sit voluptate. Est sunt non anim est. Mollit est et officia adipisicing nulla irure aliquip in
                fugiat proident exercitation velit. Excepteur pariatur excepteur consequat id consequat et
                incididunt pariatur fugiat.
                <br />
                <br />
                Ullamco anim exercitation reprehenderit fugiat cillum proident cillum dolore et sunt do dolor
                esse. Cupidatat ullamco et consectetur excepteur laboris. Dolore consequat pariatur sint
                voluptate in incididunt dolore. Ea pariatur non Lorem ullamco culpa qui aliqua eu velit. Est
                occaecat tempor labore labore nostrud ea excepteur tempor duis fugiat ullamco. Sunt
                consectetur aliqua proident mollit occaecat ea ea dolor ut commodo occaecat eu. Aute non et id
                sunt aute consequat eu reprehenderit aliquip nisi incididunt aliquip aute.
              </p>
              <Title id={"title3"} order={2} className="font-heading font-medium">
                Title 3
              </Title>
              <p>
                Anim minim laborum est commodo aliquip cupidatat cupidatat labore nostrud. Tempor
                reprehenderit anim in reprehenderit nisi qui consectetur incididunt ad et irure minim.
                Incididunt dolor non anim enim deserunt minim. Ea est id proident consequat irure culpa anim
                est eu mollit ut labore. Minim laboris officia aliquip non. Ullamco commodo reprehenderit ea
                consectetur esse commodo.
                <br />
                <br />
                Esse in proident elit occaecat. Qui elit magna sit Lorem amet minim veniam do nulla. Officia
                reprehenderit esse ex sunt pariatur deserunt cillum nostrud labore consequat consequat eu
                deserunt. Ullamco culpa nostrud id occaecat sit fugiat ea ex. Sint tempor sit est pariatur qui
                nostrud aliqua aliquip aliqua. Occaecat consequat Lorem sint dolor enim amet magna veniam id
                dolor elit. Sunt adipisicing magna veniam anim ipsum dolor labore consectetur non quis nulla
                minim quis. Non nisi est eiusmod consectetur in qui. Laboris sunt ut dolor deserunt qui
                deserunt ad do laboris labore et. Laboris quis anim ipsum pariatur esse amet consequat magna
                eiusmod. Id nostrud qui tempor in consectetur excepteur consectetur mollit dolor adipisicing
                id incididunt amet ex.
              </p>
            </div> */}
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
