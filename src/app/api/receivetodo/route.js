import connnectToDB from "@/libs/dbConfig";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await connnectToDB();
  const todos = await Todo.find();
  return NextResponse.json({ todos });
}
