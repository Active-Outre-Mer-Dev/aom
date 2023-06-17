import { Textarea, Button } from "@aom/ui";
import type { FormEvent } from "react";
import { useQuiz } from "../container/container.context";
export function Feedback() {
  const { title } = useQuiz();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    form.append("title", title);
    const res = await fetch("/api/email", {
      method: "POST",
      body: form
    });
    if (res.ok) {
      alert("Email sent!!");
    }
  };
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <Textarea label="Write message" name="message" id="message" />
      <Button variant={"neutral"}>Submit</Button>
    </form>
  );
}
