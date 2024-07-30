"use server";
import { authUser } from "../../utils/serverHelper";
export const addNewProfile = async (formData: FormData) => {
  const user = await authUser();
  if (!user) {
    return {
      message: "لطفا لاگین کنید",
      status: 401,
    };
  }
};
