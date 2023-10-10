"use client";
import { IconLoader } from "@tabler/icons-react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "@aomdev/ui";

export function SearchButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={"neutral"}
      loading={pending}
      data-loading={pending}
      className="relative group flex items-center justify-center"
    >
      <span className="absolute animate-spin group-data-[loading=true]:opacity-100 opacity-0 duration-200 ease-out">
        <IconLoader />
      </span>
      <span className="opacity-100 group-data-[loading=true]:opacity-0 ">Search</span>
    </Button>
  );
}
