import Image from "next/image";
import asset from "@/assets/pixel.jpg";
import { Badge, Title } from "@aom/ui";
import { Avatar } from "@/components/avatar";
import { formatDate } from "@/lib/format-date";

export default function Page() {
  return (
    <main>
      <Title order={1} className="text-center mb-20 font-medium font-heading">
        Blog
      </Title>
      <div className="grid grid-cols-3 gap-x-10 gap-y-20 container mx-auto mb-36">
        <div className="flex gap-4 col-span-full">
          <figure className="basis-1/2 relative aspect-video rounded-md overflow-hidden">
            <Image src={asset} className="w-full h-full" fill alt="" />
          </figure>
          <div className="basis-1/2 grow space-y-4">
            <Title order={2} className="mb-2 font-medium font-heading">
              Introducing SXM Quiz
            </Title>
            <p className="text-xl">
              Commodo sunt incididunt enim laborum exercitation est irure ad ex laboris. Esse sunt qui magna
              duis officia dolor irure est laborum.
            </p>
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-4">
                <Avatar size={64} />
                <div>
                  <span className="block  font-medium">Agis Carty</span>
                  <span className="block  text-neutral-600">{formatDate(new Date())}</span>
                </div>
              </div>
              <Badge color={"error"}>Product update</Badge>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
