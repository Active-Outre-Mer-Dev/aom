import Link from "next/link";

type PropTypes = {
  href: string;
  label: string;
  active: boolean;
};

export function TopicLink({ href, label, active }: PropTypes) {
  return (
    <Link
      href={`${href}#quiz-section`}
      className={`rounded-full duration-200 ease-out px-4 py-2 grow  ${
        active ? "bg-primary-600 text-white" : "bg-neutral-100"
      }`}
    >
      {label}
    </Link>
  );
}
