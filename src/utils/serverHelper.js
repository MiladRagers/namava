import UserModel from "@/src/models/user";
import connectToDB from "@/src/configs/db";
import { verifyAccessToken } from "./auth";
const authUser = async () => {
  connectToDB();
  const token = cookies().get("accessToken")?.value;

  if (!token) {
    return false;
  }

  const tokenPayload = verifyAccessToken(token);

  if (!tokenPayload) {
    return false;
  }

  const user = await UserModel.findOne({ name: tokenPayload?.email });

  return user;
};

export { authUser };
