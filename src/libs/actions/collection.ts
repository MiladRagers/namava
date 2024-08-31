"use server";
import connectToDB from "@/src/configs/db";
import CollcetionModel from "@/src/models/collection";
import { TResponse } from "../types";
import path from "path";
import { writeFileSync } from "fs";
import { checkIsAdmin } from "@/src/utils/serverHelper";

export const createCollection = async (
  data: FormData,
  movies: any
): Promise<TResponse> => {
  try {
    connectToDB();
    const {
      title,
      description,
      type,
      link,
      mainImage,
      deskBanner,
      mobileBanner,
    } = Object.fromEntries(data);

    const moviesId = movies.map((movies: any) => movies.value);

    if (
      !title ||
      !description ||
      !link ||
      !mainImage ||
      !deskBanner ||
      !mobileBanner
    ) {
      return {
        message: "لطفا تمام فیلد ها را وارد کنید",
        status: 422,
      };
    }

    if (!checkIsAdmin()) {
      return {
        message: "این روت فقط برای کاربران ادمین است",
        status: 403,
      };
    }

    const mainImageFile = mainImage as File;
    const desktopBannerFile = deskBanner as File;
    const mobileBannerFile = mobileBanner as File;

    let mainImageText = `/uploads/${Date.now() + mainImageFile.name}`;
    let mobileBannerText = `/uploads/${Date.now() + mobileBannerFile.name}`;
    let deskBannerText = `/uploads/${Date.now() + desktopBannerFile.name}`;

    const mainPath = path.join(process.cwd(), "public" + mainImageText);
    const mainBuffer = Buffer.from(await mainImageFile.arrayBuffer());
    writeFileSync(mainPath, mainBuffer);

    const mobilePath = path.join(process.cwd(), "public" + mobileBannerText);
    const mobileBuffer = Buffer.from(await mobileBannerFile.arrayBuffer());
    writeFileSync(mobilePath, mobileBuffer);

    const deskPath = path.join(process.cwd(), "public" + deskBannerText);
    const deskBuffer = Buffer.from(await desktopBannerFile.arrayBuffer());
    writeFileSync(deskPath, deskBuffer);

    await CollcetionModel.create({
      title,
      link,
      description,
      movies: moviesId,
      mainImage: mainImageText,
      desktopBanner: deskBannerText,
      mobileBanner: mobileBannerText,
      type,
    });

    return {
      message: "موفقیت آمیز بود",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};
