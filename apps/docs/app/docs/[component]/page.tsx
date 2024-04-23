import { Title } from "@aomdev/ui";

export default function ComponentPage({ params }: { params: { component: string } }) {
  return (
    <main>
      <Title
        order={1}
        className="capitalize font-bold text-4xl"
      >
        {params.component}
      </Title>
    </main>
  );
}
