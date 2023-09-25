"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sendtodo() {
  const [todo, settodo] = useState("");
  const [report, setReport] = useState("");
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setReport("todo sending");
    setIsSending(true);
    const requestOptions = await fetch("http://localhost:3000/api/sendtodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo }),
    });

    if (requestOptions.status === 200) {
      setReport("todo send successfully");
      router.refresh();
      settodo("");
    } else {
      setReport("todo send failed");
    }

    setIsSending(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 min-w-full px-10">
      <h1 className="p-4 text-2xl font-bold">Hi! Send todo</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col md:flex-row  justify-between w-10/12"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center w-full border">
          <label className="px-4 hover:font-bold" htmlFor="inputfield">
            todo
          </label>
          <input
            className="p-4 bg-slate-200 w-full"
            type="text"
            placeholder="Enter your todo here"
            id="inputfield"
            required
            value={todo}
            onChange={(e) => {
              settodo(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="bg-green-500 hover:enabled:scale-125 border hover:disabled:bg-red-300 hover:enabled:bg-green-600 transition duration-300 ease-in-out disabled:bg-green-200 disabled:cursor-progress disabled:text-opacity-50 p-4"
        >
          Send
        </button>
      </form>

      <p
        className={`${
          report ? "p-2" : "hidden"
        } rounded-2xl text-sm bg-amber-800 px-4 font-bold hover:bg-amber-700 text-white`}
      >
        <span>{report}</span>
      </p>

      <Link
        href={"/receivetodo"}
        className="p-4 hover:scale-125 hover:rounded-2xl transition duration-300 ease-in-out mt-10 bg-lime-500 font-bold"
      >
        All todos
      </Link>
    </div>
  );
}
