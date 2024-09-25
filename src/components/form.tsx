import { createPost } from "@/actions/actions";

export default function Form() {
  return (
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
  );
}
