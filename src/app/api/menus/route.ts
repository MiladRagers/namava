import connectToDB from "@/src/configs/db";
import MenuModel from "@/src/models/menu";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    connectToDB();
    const mainMenus = await MenuModel.find({ parrent: null });
    return Response.json(mainMenus);
  } catch (err) {
    return Response.json({ err: "interval server err" }, { status: 500  } );
  }
}
