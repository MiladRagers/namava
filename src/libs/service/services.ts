import { ITEM_PER_PAGE } from "@/public/db";
import connectToDB from "@/src/configs/db";
import CategoryModel from "@/src/models/category";
import UserModel from "@/src/models/user";
import StarModel from "@/src/models/stars";
import { checkIsAdmin } from "@/src/utils/serverHelper";

export const getAllCategories = async (page: number, search: string) => {
  try {
    connectToDB();
    const isAdmin = await checkIsAdmin();
    if (!isAdmin) {
      return {
        message: "این بخش فقط برای کاربرانی با نقش ادمین مجاز است",
      };
    }
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

// get all of the categories with out any pagination and search
export const getCategories = async () => {
  try {
    connectToDB();
    const isAdmin = await checkIsAdmin();
    if (!isAdmin) {
      return {
        message: "این بخش فقط برای کاربرانی با نقش ادمین مجاز است",
      };
    }
    const categories = await CategoryModel.find({});

    return categories;
  } catch (error) {
    return error;
  }
};

export const getAllUsers = async (page: number, search: string) => {
  try {
    connectToDB();
    const isAdmin = await checkIsAdmin();
    if (!isAdmin) {
      return {
        message: "این بخش فقط برای کاربرانی با نقش ادمین مجاز است",
      };
    }

    const regex = new RegExp(search, "i");
    const users = await UserModel.find({
      $or: [{ name: { $regex: regex } }, { username: { $regex: regex } }],
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    const counts = await UserModel.countDocuments();
    return {
      users,
      counts,
    };
  } catch (error) {
    return error;
  }
};

export const getAllStars = async (page: number, search: string) => {
  try {
    connectToDB();
    const regex = new RegExp(search, "i");
    const stars = await StarModel.find({
      name: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    const counts = await StarModel.countDocuments();
    return {
      stars,
      counts,
    };
  } catch (error) {
    return error;
  }
};

// get all of the stars without pagination and search
export const getStars = async () => {
  try {
    connectToDB();
    const stars = await StarModel.find({});
    return stars;
  } catch (error) {
    return error;
  }
};

// use this function for get specific star
// use the link for star

export const getStar = async (link: string) => {
  try {
    connectToDB();
    const star = await StarModel.findOne({ link });
    return star;
  } catch (error) {
    return error;
  }
};
