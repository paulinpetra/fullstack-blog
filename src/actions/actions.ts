//This is a server action, used to update data (data mutation) in latest next.js
//It's like a POST api endpoint
"use server"; //the use server is not for making server components, since that is default. Its for server actions
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
export async function createPost(formData: FormData) {
  const title = formData.get("title") as string; //not typical to override type
  const body = formData.get("body") as string;
  console.log(title); //can be seen in terminal since it's on the server

  //update database using Prisma
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  // revalidate
  revalidatePath("/posts");
}
