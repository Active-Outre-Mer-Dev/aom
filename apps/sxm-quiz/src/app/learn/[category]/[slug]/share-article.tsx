"use client";

import { ActionIcon } from "@aom/ui";
import { Share } from "lucide-react";
import { useParams } from "next/navigation";

type PropTypes = {
  title: string;
};

export function ShareButton({ title }: PropTypes) {
  const { category, slug } = useParams();

  const onShare = async () => {
    await navigator.share({
      title: `SXM Quiz - ${title}`,
      url: `${location.origin}/learn/${category}/${slug}`
    });
  };

  return (
    <ActionIcon onClick={onShare} aria-label="Share" color={"primary"} size={"lg"}>
      <Share aria-hidden="true" size={"50%"} />
    </ActionIcon>
  );
}
