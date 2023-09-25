import connnectToDB from "@/libs/dbConfig";
import todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;
  await connnectToDB();
  const todos = await todo.findByIdAndDelete({ _id: id });
  return NextResponse.json({ todos });
}
