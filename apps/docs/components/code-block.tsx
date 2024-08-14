"use client";
import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@aomdev/ui/client/scroll-area";

const icons = {
  Terminal,
  FileTypescript
};

type PropTypes = {
  children: React.ReactNode;
  value: string;
  fileType?: keyof typeof icons;
  fileName?: string;
};

export function CodeBlock({ children, value, fileType, fileName }: PropTypes) {
  const [isCopied, setIsCopied] = useState(false);
  const onClick = async () => {
    await navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3 * 1000);
  };
  const Icon = fileType ? icons[fileType] : null;
  return (
    <div className="relative">
      <div className="bg-neutral-700 rounded-t p-2 flex gap-2 items-center text-gray-200">
        {Icon && <Icon size={16} />} {fileName && fileName}
      </div>{" "}
      <button
        onClick={onClick}
        className="absolute top-2 right-2"
      >
        {!isCopied ? <Copy size={16} /> : <Check size={16} />}
      </button>
      <ScrollArea>{children}</ScrollArea>
    </div>
  );
}

function FileTypescript() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-ts"
    >
      <path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
      <path d="M3.5 15h3" />
      <path d="M5 15v6" />
    </svg>
  );
}
