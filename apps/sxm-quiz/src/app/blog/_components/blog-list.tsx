import { Blog } from "./blog";

const templates = [
  {
    title: "Introducing SXM Quiz",
    tag: "Product update"
  },
  {
    title: "How schools are using SXM Quiz",
    tag: "Customer stories"
  },
  {
    title: "Introducing multiplayer quizzes",
    tag: "Product update"
  },
  {
    title: "Learn how to contribute",
    tag: "Guides"
  }
];
export function BlogList() {
  const blogs = Array(9).fill(null);

  return (
    <>
      {blogs.map((_, index) => {
        const blog = templates[Math.floor(Math.random() * templates.length)];
        return <Blog {...blog} key={index} />;
      })}
    </>
  );
}
