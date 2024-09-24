import Link from "next/link";
import prisma from "@/lib/db";
export default async function PostList() {
  //fetching the data on Next.js server side, so no useEffect needed
  const posts = await prisma.post.findMany(); //prisma gives automatic type safety

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`} className="text-2xl font-bold">
            {post.title}
          </Link>
        </li>
      ))}{" "}
    </ul>
  );
}
