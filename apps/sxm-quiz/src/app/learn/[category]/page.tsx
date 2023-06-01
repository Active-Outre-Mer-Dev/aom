import { Title } from "@aom/ui";
import { Articles } from "../Articles";
const categories = ["history", "geography", "environment", "economy"];

export function generateStaticParams() {
  return categories.map(category => ({ category }));
}

export default function Page({ params }: { params: { category: string } }) {
  return (
    <div className="min-h-screen">
      <Title order={1} className="font-heading capitalize font-medium">
        {params.category} Articles
      </Title>
      <section className="container mx-auto mb-36">
        <Articles category={params.category} amount={9} type="history" title="Featured" />
      </section>
    </div>
  );
}
