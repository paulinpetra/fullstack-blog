import Link from "next/link";
export default async function Page() {
  //fetching the data on Next.js server side, so no useEffect needed
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <main className="text-center pt-16 px-5">
      <h2 className="text-4xl md:text-5xl font-bold">All posts</h2>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`} className="text-2xl font-bold">
              {post.title}
            </Link>
          </li>
        ))}{" "}
      </ul>
    </main>
  );
}
