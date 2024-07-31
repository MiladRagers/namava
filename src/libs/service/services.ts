import { ITEM_PER_PAGE } from "@/public/db";
import connectToDB from "@/src/configs/db";
import CategoryModel from "@/src/models/category";
export const getAllCategories = async (page: number, search: string) => {
  try {
    connectToDB();

    const regex = new RegExp(search, "i");
    const categories = await CategoryModel.find({
      parent: null,
      title: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    const counts = await CategoryModel.countDocuments();
    return { categories, counts };
  } catch (error) {
    return error;
  }
};
