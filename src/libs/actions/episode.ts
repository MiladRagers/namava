"use server";

import connectToDB from "@/src/configs/db";
import SeasonModel from "@/src/models/Season";
import MovieModel from "@/src/models/movie";
import EpisodeModel from "@/src/models/episode";
import { writeFileSync } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

export const createNewEpisode = async (data: FormData) => {
  try {
    connectToDB();

    const image: any = data.get("image");
    const video: any = data.get("video");
    const series = data.get("series");
    const seasonNumber = Number(data.get("season"));

    let imageName = undefined;
    if (image !== "undefined") {
      const fileName = Date.now() + image.name;
      imageName = `/uploads/${fileName}`;
      const imagePath = path.join(process.cwd(), "public/uploads/" + fileName);
      const buffer = Buffer.from(await image.arrayBuffer());
      writeFileSync(imagePath, buffer);
    }

    let videoName = undefined;

    if (videoName !== "undefined") {
      const fileName = Date.now() + video.name;
      videoName = `/uploads/${fileName}`;
      const imagePath = path.join(process.cwd(), "public/uploads/" + fileName);
      const buffer = Buffer.from(await video.arrayBuffer());
      writeFileSync(imagePath, buffer);
    }

    const season = new SeasonModel({
      seasonNumber,
      series,
    });

    const existSeason = await SeasonModel.findOne({ series, seasonNumber });

    const episode = new EpisodeModel({
      title: data.get("title"),
      description: data.get("description"),
      link: data.get("link"),
      time: data.get("time"),
      image: imageName,
      video: videoName,
      season: existSeason ? existSeason._id : season._id,
      series: data.get("series"),
    });

    if (!existSeason) {
      season.episodes.push(episode._id);
      await season.save();
    } else {
      await SeasonModel.findOneAndUpdate(
        { series, seasonNumber },
        {
          $push: {
            episodes: episode._id,
          },
        }
      );
    }

    await episode.save();

    if (!existSeason) {
      await MovieModel.findOneAndUpdate(
        { _id: series },
        {
          $push: {
            seasons: season._id,
          },
        }
      );
    }

    revalidatePath("/p-admin/series");

    return {
      message: "قسمت جدید با موفقیت ایجاد شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال خود را به اینترنت بررسی کنید",
      status: 500,
    };
  }
};
