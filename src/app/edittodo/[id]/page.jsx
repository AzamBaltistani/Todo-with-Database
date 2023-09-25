import EditForm from "./editForm";

const gettodoByID = async (id) => {
  try {
    const todo = await fetch(`http://localhost:3000/api/receivetodo/${id}`, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });
    return todo.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Edittodo({ params }) {
  const { id } = params;
  const { todos } = await gettodoByID(id);
  const { todo } = todos;

  return (
    <div>
      <EditForm id={id} todo={todo} />
    </div>
  );
}
