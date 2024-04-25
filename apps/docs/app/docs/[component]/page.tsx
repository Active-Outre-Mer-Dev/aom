import { Mdx } from "@/components/mdx";
import { Toc } from "@/components/toc";

export default async function ComponentPage({ params }: { params: { component: string } }) {
  const componentImport = await import(`@/content/components/${params.component}.mdx`);
  const Component = componentImport.default;
  return (
    <main className="flex gap-10">
      <Mdx>
        <Component />
      </Mdx>
      <div className="w-1/6">
        <div className="sticky top-16">
          <p className="font-semibold text-lg mb-6">On this page</p>
          <Toc />
        </div>
      </div>
    </main>
  );
}
