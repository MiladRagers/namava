"use server";

import connectToDB from "@/src/configs/db";
import { authUser } from "@/src/utils/serverHelper";
import { TResponse } from "../types";
import TicketModel from "@/src/models/ticket";
import { isValidObjectId } from "mongoose";

export const sendNewTicket = async (data: any): Promise<TResponse> => {
  try {
    connectToDB();
    const user = await authUser();
    if (!user) {
      return {
        message: "کاربر مورد نظر لاگین نیست",
        status: 401,
      };
    }

    const { title, body, priority, departmentId, subDepartmentId } = data;

    if (!isValidObjectId(departmentId) || !isValidObjectId(subDepartmentId)) {
      return {
        message: "ایدی مورد نظر معتبر نمی باشد",
        status: 422,
      };
    }

    await TicketModel.create({
      title,
      body,
      priority,
      department: departmentId,
      subDepartment: subDepartmentId,
      user: user._id,
      isOpen: true,
    });

    return {
      message: "تیکت با موفقیت ارسال شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال خود را بررسی کنید",
      status: 500,
    };
  }
};

export const answerToTicket = async (data: any) => {
  try {
    connectToDB();

    const user = await authUser();
    if (!user) {
      return {
        message: "کاربر مورد نظر لاگین نیست",
        status: 401,
      };
    }

    const {
      title,
      body,
      priority,
      department,
      subDepartment,
      replyTo,
      isFromUserPanel,
    } = data;

    if (!title || !body || !priority || !department) {
      return {
        message: "اطلاعات را به درستی بفرستید",
      };
    }

    await TicketModel.create({
      title,
      body,
      priority,
      department,
      subDepartment,
      user: user._id,
      hasAnswer: false,
      isAnswer: true,
      replyTo,
      isFromUserPanel,
    });

    return {
      message: "پاسخ شما با موفقیت  ثبت شد",
      status: 201,
    };
  } catch (err) {
    return Response.json({ msg: err }, { status: 500 });
  }
};
