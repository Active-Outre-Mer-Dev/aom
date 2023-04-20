import { IconBrandGithub } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="py-5 px-16 flex text-neutral-20 border-t border-neutral-700 justify-between items-center">
      <div className="flex  items-center">
        <img src={"/aom.svg"} className="w-16 h-16" alt={""} />
        <p>Active Outre Mer</p>
      </div>
      <a
        title="Github"
        aria-label="Visit Github profile"
        target={"_blank"}
        href={"https://github.com/Active-Outre-Mer-Dev"}
      >
        <IconBrandGithub />
      </a>
    </footer>
  );
}
