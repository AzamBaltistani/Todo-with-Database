import connnectToDB from "@/libs/dbConfig";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  await connnectToDB();

  const { newtodo } = await req.json();

  await Todo.findByIdAndUpdate(id, { todo: newtodo });

  return NextResponse.json({
    msg: ["todo updated successfully"],
    status: 200,
    success: true,
  });
}
