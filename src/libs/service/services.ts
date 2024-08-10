import { ITEM_PER_PAGE } from "@/public/db";
import connectToDB from "@/src/configs/db";
import CategoryModel from "@/src/models/category";
import MenuModel from "@/src/models/menu";
import UserModel from "@/src/models/user";
import StarModel from "@/src/models/stars";
import ContactModel from "@/src/models/contactus";
import MovieModel from "@/src/models/movie";
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
    const counts = await CategoryModel.countDocuments({ parrent: null });
    return { categories, counts };
  } catch (error) {
    return error;
  }
};

export const getSubCategory = async (
  id: string,
  page: number,
  search: string
) => {
  try {
    connectToDB();
    const regex = new RegExp(search, "i");

    const parrent = await CategoryModel.findOne({ _id: id }, "title");

    const subCategories = await CategoryModel.find({
      parrent: id,
      title: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .populate("parrent", "title");

    const counts = await CategoryModel.countDocuments({ parrent: id });
    return { subCategories, counts, parrent };
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

export const getAllSubcategories = async () => {
  try {
    connectToDB();
    const allCategoeies = await CategoryModel.find({});

    return allCategoeies.filter((category) => category.parrent !== null);
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

export const getStar = async (link: string) => {
  try {
    connectToDB();
    const star = await StarModel.findOne({ link });
    return star;
  } catch (error) {
    return error;
  }
};

// get all menus with pagination and search
export const getAllMenus = async (page: number, search: string) => {
  try {
    connectToDB();
    const regex = new RegExp(search, "i");
    const allMenus = await MenuModel.find({
      title: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .populate("parrent", "title");

    const counts = await MenuModel.countDocuments();
    return {
      allMenus,
      counts,
    };
  } catch (error) {
    return error;
  }
};

// get all contacts with pagination and search
export const getAllContacts = async (page: number, search: string) => {
  try {
    connectToDB();
    const regex = new RegExp(search, "i");
    const allContacts = await ContactModel.find({
      $or: [{ name: { $regex: regex } }, { phone: { $regex: regex } }],
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .populate("department", "title");

    const counts = await ContactModel.countDocuments();

    return {
      allContacts,
      counts,
    };
  } catch (error) {
    return error;
  }
};

// get all movie with pagination and search

export const getAllMovies = async (page: number, search: string) => {
  try {
    connectToDB();
    const regex = new RegExp(search, "i");
    const allMovies = await MovieModel.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .populate("category creator", "title parrent name");

    const counts = await MovieModel.countDocuments();
    return {
      allMovies,
      counts,
    };
  } catch (error) {
    return error;
  }
};

// get sliders for home page

export const getAllSlidersMovies = async () => {
  try {
    connectToDB();
    return await MovieModel.find({ isSlider: true }).populate("actors", "name link");
  } catch (error) {
    return error;
  }
};
