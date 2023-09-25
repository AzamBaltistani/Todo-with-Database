import connnectToDB from "@/libs/dbConfig";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connnectToDB();

  const { todo } = await req.json();

  await Todo.create({ todo: todo });

  return NextResponse.json({
    msg: ["todo send successfully"],
    status: 200,
    success: true,
  });
}
