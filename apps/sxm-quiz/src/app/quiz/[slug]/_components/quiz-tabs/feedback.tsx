import { Textarea, Button } from "@aom/ui";
import type { FormEvent } from "react";

export function Feedback() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <Textarea label="Write message" />
      <Button variant={"neutral"}>Submit</Button>
    </form>
  );
}
