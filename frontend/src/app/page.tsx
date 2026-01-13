import ThreadsHomePage from "@/components/threads/threads-home";
import { Suspense } from "react";

export default function ThreadsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex w-full   flex-1 flex-col">loading threads...</div>
      }
    >
      <ThreadsHomePage />
    </Suspense>
  );
}
