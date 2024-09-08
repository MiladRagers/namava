import connectToDB from "@/src/configs/db";
import { authUser } from "@/src/utils/serverHelper";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    connectToDB();
    console.log("req sended");
    
    const user = await authUser();

    if (!user) {
      return Response.json({ msg: "User is unauthorized" }, { status: 401 });
    }

    return Response.json(user);
  } catch (error) {
    return Response.json({ msg: "Interval error" }, { status: 500 });
  }
}
