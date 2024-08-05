import connectToDB from "@/src/configs/db";
import DepartmentModel from "@/src/models/department";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    connectToDB();
    const departments = await DepartmentModel.find({});
    return Response.json(departments);
  } catch (err) {
    return Response.json({ err: "interval server err" }, { status: 500 });
  }
}
