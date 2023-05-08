import { Title } from "ui";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Title order={1}>Hello there</Title>
      <Link href="/quiz/sxm-history-intro">Intro</Link>
    </>
  );
}
