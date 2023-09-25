import connnectToDB from "@/libs/dbConfig";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connnectToDB();
  const todos = await Todo.findOne({ _id: id });
  return NextResponse.json({ todos });
}
