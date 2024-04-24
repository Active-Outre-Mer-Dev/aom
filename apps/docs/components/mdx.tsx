import "@/styles/github-dark.css";

export function Mdx({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`prose-headings:font-bold prose-h1:text-4xl prose-headings:mb-6 prose-headings:text-gray-50 text-gray-100 prose-a:text-primary-300
      prose-code:rounded-b prose-h1:first-of-type:mt-0 prose-headings:mt-6 prose-h2:text-2xl flex flex-col gap-4 prose-ul:list-disc prose-ul:list-inside prose-ul:space-y-2`}
    >
      {children}
    </div>
  );
}
