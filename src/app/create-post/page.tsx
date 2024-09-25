//using server actions on the form, so instead of an onSubmit with a fetch to api with post method,
//and creating api endpoint, I use action attribute with a function
//this will send data automatically when the form is submitted
//This page is only for logged in users, therefore I use Kind for auth
import Form from "@/components/form";
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
      <Form />
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
