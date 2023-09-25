import Link from "next/link";
import Edittodo from "../components/Edittodo";
import ShowDate from "../components/ShowDate";
import DeleteBtn from "../components/DeleteBtn";

const gettodos = async () => {
  console.log("I am running");
  const requestOptions = await fetch("http://localhost:3000/api/receivetodo", {
    cache: "no-store",
  });

  return requestOptions.json();
};

export default async function Receivetodo() {
  const { todos } = await gettodos();

  return (
    <div className="flex flex-col items-center justify-center gap-1 px-10">
      <h1 className="p-4 text-2xl font-bold">Hi! Receive todo</h1>
      <div className="my-10">
        <Link
          href={"/sendtodo"}
          className="p-4 bg-lime-500 hover:rounded-2xl transition duration-500 ease-in-out rounded-3xl font-bold"
        >
          Send New todo
        </Link>
      </div>

      {todos.map((e) => (
        <div
          key={e._id}
          className="flex flex-col md:flex-row min-w-full items-center justify-between hover:bg-slate-300 transition duration-300 ease-in-out bg-slate-200  mx-10  m-1"
        >
          <div className="flex hover:font-bold p-3 text-lg">{e.todo}</div>
          <div className="flex flex-row md:w-auto w-full">
            <ShowDate date={e.updatedAt} />
            <DeleteBtn id={e._id} />
            <Edittodo id={e._id} />
          </div>
        </div>
      ))}
      <div className="my-10">
        <Link
          href={"/sendtodo"}
          className="p-4 bg-lime-500 rounded-3xl hover:rounded-2xl transition duration-500 ease-in-out font-bold"
        >
          Send New todo
        </Link>
      </div>
    </div>
  );
}
