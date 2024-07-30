import connectToDB from "@/src/configs/db";
import CategoryModel from "@/src/models/category";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    connectToDB();
    const mainCategories = await CategoryModel.find({ parent: null });
    return Response.json(mainCategories);
  } catch (err) {
    return Response.json({ err: "interval server err" }, { status: 500 });
  }
}
