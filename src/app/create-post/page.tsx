//using server actions on the form, so instead of an onSubmit with a fetch to api with post method,
//and creating api endpoint, I use action attribute with a function
//this will send data automatically when the form is submitted
//This page is only for logged in users, therefore I use Kind for auth
import { createPost } from "@/actions/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
  const { isAuthenticated } = getKindeServerSession(); //this is an async function
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/create-post");
  }
  return (
    <main className="text-center pt-16 ">
      <h2 className="text-4xl md:text-5xl font-bold">Create Post</h2>
      <form
        action={createPost}
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
      >
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="text-black border rounded px-3 py-2 h-full"
          required
        />
        <textarea
          name="body"
          placeholder="Body content for new post"
          className="text-black border rounded px-3 py-2"
          rows={6}
          required
        />
        <button className="h-10 bg-lime-200 text-black rounded-lg px-5 ">
          Submit
        </button>
      </form>
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
