"use server";

import connectToDB from "@/src/configs/db";
import { Movie, TMovie } from "@/src/validators/frontend";

export const createNewMovie = (data: TMovie) => {
  try {
    connectToDB();

    const validateFields = Movie.safeParse(data);
    if (!validateFields.success) {
      return {
        message: validateFields.error.flatten().fieldErrors,
        status: 422,
      };
    }
  } catch (error) {
    return {
      message: "اتصال اینترنت خود را چک کنید",
      status: 500,
    };
  }
};
