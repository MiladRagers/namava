"use server";
import UserModel from "@/src/models/user";
import { generateAccessToken, hashPassword } from "@/src/utils/auth";
import { cookies } from "next/headers";
import connectToDB from "@/src/configs/db";

export const signUpUser = async (body) => {
  try {
    connectToDB();
    const { name, phone, email, password, username } = body;
    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { phone }, { username }],
    });

    if (isUserExist) {
      return {
        message: "phone or email or phone is already exist",
        status: 419,
      };
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ email });
    const usersCount = await UserModel.countDocuments();

    await UserModel.create({
      name,
      phone,
      username,
      password: hashedPassword,
      email,
      role: usersCount > 0 ? "USER" : "ADMIN",
    });

    cookies().set({
      name: "accessToken",
      value: `${accessToken}`,
      httpOnly: true,
      path: "/",
      maxAge: 432000,
    });

    return {
      message: "User signed up successfully :)",
      status: 201,
    };
  } catch (error) {
    return {
      message: "intarval server err",
      error: true,
    };
  }
};
