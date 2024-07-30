import connectToDB from "@/src/configs/db";
import CategoryModel from "@/src/models/category";
export const getAllCategories = async () => {
  try {
    connectToDB();
    const mainCategories = await CategoryModel.find({ parent: null });
    return mainCategories;
  } catch (error) {
    return error;
  }
};
