"use server";
import connectToDB from "@/src/configs/db";
import MovieModel from "@/src/models/movie";
import { authUser } from "@/src/utils/serverHelper";
import { Movie } from "@/src/validators/frontend";
import { writeFileSync } from "fs";
import { revalidatePath } from "next/cache";
import path from "path";

type TStar = {
  value: string;
  label: string;
};

export const createNewMovie = async (data: FormData, stars: TStar[]) => {
  try {
    connectToDB();
    const auth = await authUser();

    const mainImage = data.get("mainImage") as any;
    const logo = data.get("logo") as any;
    const video = data.get("video") as any;
    const deskBanner = data.get("deskBanner") as any;
    const mobileBanner = data.get("mobileBanner") as any;
    const detailImages = data.getAll("detailImage") as any;

    const actors = stars.map((star) => star.value);

    let mainImageText = `/uploads/${Date.now() + mainImage.name}`;
    let logoImageText = `/uploads/${Date.now() + logo.name}`;
    let videoText = `/uploads/${Date.now() + video.name}`;
    let deskBannerText = `/uploads/${Date.now() + deskBanner.name}`;
    let mobileBannerText = `/uploads/${Date.now() + mobileBanner.name}`;

    // main image upload
    const mainPath = path.join(process.cwd(), "public" + mainImageText);
    const mainBuffer = Buffer.from(await mainImage.arrayBuffer());
    writeFileSync(mainPath, mainBuffer);

    // finish main image upload

    // logo upload
    const logoPath = path.join(process.cwd(), "public" + logoImageText);

    const logoBuffer = Buffer.from(await logo.arrayBuffer());
    writeFileSync(logoPath, logoBuffer);

    // finish logo upload

    // video upload
    const videoPath = path.join(process.cwd(), "public" + videoText);
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    writeFileSync(videoPath, videoBuffer);

    // finish video upload

    // upload desktop banner

    const desktopBannerPath = path.join(
      process.cwd(),
      "public" + deskBannerText
    );
    const desktopBuffer = Buffer.from(await deskBanner.arrayBuffer());
    writeFileSync(desktopBannerPath, desktopBuffer);

    // finish upload desktop banner

    // upload mobile image

    const mobileBannerPath = path.join(
      process.cwd(),
      "public" + mobileBannerText
    );
    const mobileBuffer = Buffer.from(await mobileBanner.arrayBuffer());
    writeFileSync(mobileBannerPath, mobileBuffer);

    // finish upload mobile image

    let detailImageList = [] as any;
    detailImages.forEach(async (image: any) => {
      let detailImageText = `/uploads/${Date.now() + image.name}`;
      detailImageList.push(detailImageText);
      const imagePath = path.join(process.cwd(), "public" + detailImageText);
      const buffer = Buffer.from(await image.arrayBuffer());
      writeFileSync(imagePath, buffer);
    });

    await MovieModel.create({
      title: data.get("title"),
      ageRange: data.get("ageRange"),
      time: data.get("time"),
      link: data.get("link"),
      type: data.get("type") || "film",
      shortDesc: data.get("shortDesc"),
      showTime: data.get("showTime"),
      category: data.get("category"),
      season: data.get("season"),
      longDesc: data.get("longDesc"),
      language: data.get("language"),
      contentType: data.get("contentType"),
      director: data.get("director"),
      priceStatus: data.get("priceStatus"),
      mainImage: mainImageText,
      video: videoText,
      deskBanner: deskBannerText,
      mobileBanner: mobileBannerText,
      detailImage: detailImageList,
      creator: auth._id,
      isFree: false,
      logo: logoImageText,
      actors,
    });

    revalidatePath("/p-admin/movies");

    return {
      message: "اثر با موفقیت ایجاد شد",
      status: 201,
    };
  } catch (error) {
    console.log(error);

    return {
      message: "اتصال اینترنت خود را چک کنید",
      status: 500,
    };
  }
};
