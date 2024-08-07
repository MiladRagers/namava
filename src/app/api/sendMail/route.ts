import connectToDB from "@/src/configs/db";
import nodemailer from "nodemailer";
import ContactModel from "@/src/models/contactus";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const { email, content } = await req.json();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "miladsalami1385@gmail.com",
        pass: "oeaw bnuz ptdk gemi",
      },
    });

    const mailOptions = {
      from: "miladsalami1385@gmail.com",
      to: email,
      subject: "پاسخ پیغام شما توسط میلاد 😎",
      text: content,
    };

    const mail = await transporter.sendMail(mailOptions);
    if (mail) {
      await ContactModel.findOneAndUpdate(
        { email },
        {
          $set: {
            isAnswer: true,
          },
        }
      );
      return Response.json(
        { message: "ایمیل با موفقیت به کاربر ارسال شد" },
        { status: 200 }
      );
    } else {
      return Response.json({ message: "ایمیل ارسال نشد" }, { status: 422 });
    }
  } catch (error) {
    return Response.json({ message: "interval err" }, { status: 500 });
  }
}
