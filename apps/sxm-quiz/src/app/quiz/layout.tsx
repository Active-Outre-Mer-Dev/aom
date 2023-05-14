import { Sidebar } from "./Sidebar";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Layout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <main>
      <div
        style={{ height: "calc(100vh - 64px)" }}
        className="fixed top-16 border-r border-neutral-100  p-4 left-0 w-1/6"
      >
        <p>Hello there</p>
        <Suspense>
          <Sidebar />
        </Suspense>
      </div>
      {modal}

      <div className="w-5/6 ml-auto px-4">{children}</div>
    </main>
  );
}
