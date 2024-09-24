//params is coming from the page component
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
export default async function Page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }
  return (
    <main className="text-center px-7 pt-24">
      <h3 className="text-5xl md:text-6xl font-semibold mb-7">{post.title}</h3>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
