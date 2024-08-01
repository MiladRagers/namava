import UserModel from "@/src/models/user";
import connectToDB from "@/src/configs/db";
import { verifyAccessToken } from "./auth";
import { cookies } from "next/headers";
const authUser = async () => {
  connectToDB();
  const token = cookies().get("accessToken")?.value;

  if (!token) {
    return false;
  }

  const tokenPayload: any = verifyAccessToken(token);

  if (!tokenPayload) {
    return false;
  }

  const user = await UserModel.findOne(
    { email: tokenPayload?.email },
    "-password"
  ).populate("profiles");

  return user;
};

const checkIsAdmin = async () => {
  connectToDB();
  const token = cookies().get("accessToken")?.value;

  if (!token) {
    return false;
  }

  const tokenPayload: any = verifyAccessToken(token);

  if (!tokenPayload) {
    return false;
  }

  const user = await UserModel.findOne({ email: tokenPayload?.email });

  return user.role === "ADMIN" ? true : false;
};

export { authUser, checkIsAdmin };
