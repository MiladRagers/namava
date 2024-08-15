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

    const season = new SeasonModel({
      seasonNumber: Number(data.get("season")),
      series,
    });

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
      const buffer = Buffer.from(await image.arrayBuffer());
      writeFileSync(imagePath, buffer);
    }

    const episode = new EpisodeModel({
      title: data.get("title"),
      description: data.get("description"),
      link: data.get("link"),
      time: data.get("time"),
      image: imageName,
      video: videoName,
      season: season._id,
      series: data.get("series"),
    });

    season.episodes.push(episode._id);

    await MovieModel.findOneAndUpdate(
      { _id: series },
      {
        $push: {
          seasons: season._id,
        },
      }
    );

    await Promise.all([episode.save(), season.save()]);

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
