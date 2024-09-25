//This is a server action, used to update data (data mutation) in latest next.js
//It's like a POST api endpoint
"use server"; //the use server is not for making server components, since that is default. Its for server actions
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createPost(formData: FormData) {
  //auth check
  const { isAuthenticated } = getKindeServerSession(); //will give info about incoming request so we can check that the user is authenticated
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

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
  // revalidate to refresh the cached data
  revalidatePath("/posts");
}
