import PostList from "@/components/post-list";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <h2 className="text-4xl md:text-5xl font-bold pb-8">All posts</h2>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
}
