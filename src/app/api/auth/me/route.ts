import connectToDB from "@/src/configs/db";
import { authUser } from "@/src/utils/serverHelper";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import ProfileModel from "@/src/models/profile";

export async function GET(req: NextRequest) {
  try {
    connectToDB();

    const user = await authUser();

    if (!user) {
      return Response.json({ msg: "User is unauthorized" }, { status: 401 });
    }

    const profileId = cookies().get("profile")?.value;

    const currentProfile = await ProfileModel.findOne({ _id: profileId });

    return Response.json({
      currentProfile: currentProfile || user.profiles[0]._id,
      user,
    });
  } catch (error) {
    return Response.json({ msg: "Interval error" }, { status: 500 });
  }
}
