import "@/styles/github-dark.css";
export function Mdx({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-headings:font-bold prose-h1:text-4xl prose-headings:mb-6 prose-headings:text-gray-50 text-gray-100 prose-code:rounded space-y-4">
      {children}
    </div>
  );
}
