import { Mdx } from "@/components/mdx";

export default async function ComponentPage({ params }: { params: { component: string } }) {
  const componentImport = await import(`@/content/${params.component}.mdx`);
  const Component = componentImport.default;
  return (
    <main>
      <Mdx>
        <Component />
      </Mdx>
    </main>
  );
}
