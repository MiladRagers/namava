import { ITEM_PER_PAGE } from "@/public/db";
import connectToDB from "@/src/configs/db";
import CategoryModel from "@/src/models/category";
import MenuModel from "@/src/models/menu";
import UserModel from "@/src/models/user";
import StarModel from "@/src/models/stars";
import SeasonModel from "@/src/models/Season";
import ContactModel from "@/src/models/contactus";
import MovieModel from "@/src/models/movie";
import CommentModel from "@/src/models/comments";
import ArticleModel from "@/src/models/article";
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
    const categories = await CategoryModel.find({ parrent: null });

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
    return await MovieModel.find({ isSlider: true }).populate(
      "actors",
      "name link"
    );
  } catch (error) {
    return error;
  }
};

// get specific movie

export const getMovie = async (link: any) => {
  try {
    connectToDB();
    const movie = await MovieModel.findOne({ link })
      .populate("category actors", "link image title name")
      .populate({
        path: "comments",
        match: { isAccept: true },
        populate: {
          path: "user",
          select: "name email",
        },
      })
      .lean();

    return movie;
  } catch (error) {
    return error;
  }
};

// get related movies

export const getRealedMovies = async (category: string, id: string) => {
  try {
    connectToDB();
    const relatedMovies = await MovieModel.find({
      category,
      _id: { $ne: id },
    }).populate("actors", "link name");

    return relatedMovies;
  } catch (error) {
    return error;
  }
};

// get star movies

export const getStarMovies = async (starId: string) => {
  try {
    connectToDB();
    const movies = await MovieModel.find({ actors: { $in: starId } }).populate(
      "actors",
      "link name"
    );

    return movies;
  } catch (error) {
    return error;
  }
};

// get all movies

export const getMovies = async () => {
  try {
    connectToDB();

    const allMovies = await MovieModel.find({}).populate(
      "category actors",
      "title link parrent link name"
    );

    const categorizeFilms = (films: any) => {
      const categorized: any = {};

      films.forEach((film: any) => {
        const categoryTitle = film.category.title;

        // اگر دسته‌بندی وجود ندارد، یک آرایه جدید ایجاد کن
        if (!categorized[categoryTitle]) {
          categorized[categoryTitle] = [];
        }

        // فیلم را به دسته‌بندی مربوطه اضافه کن
        categorized[categoryTitle].push(film);
      });

      return categorized;
    };

    // استفاده از تابع
    const result = categorizeFilms(allMovies);

    return result;
  } catch (error) {
    return error;
  }
};

// get all movies with out any pagination

export const getAllMoviesWithOutPagination = async () => {
  try {
    connectToDB();
    return await MovieModel.find({});
  } catch (error) {
    return error;
  }
};

// get all comments with pagination

export const getAllComments = async (page: string) => {
  try {
    connectToDB();

    if (!checkIsAdmin()) {
      return {
        message: "شما به این روت دسترسی ندارید",
        status: 401,
      };
    }

    const comments = await CommentModel.find({})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (+page - 1))
      .populate("movie user", "title link name");

    const counts = await CommentModel.countDocuments();

    return {
      comments,
      counts,
    };
  } catch (error) {
    return error;
  }
};

// get all series

export const getAllSeries = async () => {
  try {
    connectToDB();
    const series = await MovieModel.find({ type: "series" });

    return series;
  } catch (error) {
    return error;
  }
};

// get all seasons of series

export const getSpecificSeasons = async (id: string) => {
  try {
    connectToDB();
    const seasons = await SeasonModel.find({ series: id })
      .populate("episodes")
      .sort({ seasonNumber: 1 });

    return seasons;
  } catch (error) {
    return error;
  }
};

// get all articles
export const getAllArticles = async (page: number, search: string) => {
  try {
    connectToDB();
    const regex = new RegExp(search, "i");
    const articles = await ArticleModel.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .populate("creator movie", "name title link");

    const counts = await ArticleModel.countDocuments();
    return {
      articles,
      counts,
    };
  } catch (error) {
    return error;
  }
};

// get all articles without pagination
export const getArticles = async () => {
  try {
    connectToDB();
    const articles = await ArticleModel.find({ isAccept: true }).populate(
      "creator movie",
      "name title link"
    );

    return articles;
  } catch (error) {
    return error;
  }
};

// get specific article

export const getArticle = async (link: string) => {
  try {
    connectToDB();
    const article = await ArticleModel.findOne({ link }).populate(
      "creator movie",
      "name title link mainImage type link"
    );

    return article;
  } catch (error) {
    return error;
  }
};

// search between movies and some filters based on movie detail

export const searchMovies = async (
  search: string,
  types: string[],
  categoryNames: string[],
  voices: string[],
  countries: string[],
  order: string,
  range: { from: String; to: String }
) => {
  try {
    await connectToDB();

    let filter = {};

    if (categoryNames?.length) {
      const categories = await CategoryModel.find({
        title: { $in: categoryNames },
      });

      let categoryIds = categories.map((category) => category._id);
      filter = {
        ...filter,
        category: { $in: categoryIds },
      };
    }

    if (voices?.length) {
      filter = {
        ...filter,
        language: { $in: voices },
      };
    }

    if (types?.length) {
      filter = {
        ...filter,
        type: { $in: types },
      };
    }

    if (countries?.length) {
      filter = {
        ...filter,
        country: {
          $in: typeof countries === "string" ? Array(countries) : countries,
        },
      };
    }

    if (range.from && range.to) {
      filter = {
        ...filter,
        showTime: { $gte: range.from, $lte: range.to },
      };
    }

    const [feild, direction] = order ? order.split("-") : [];
    const sort = direction === "asc" ? 1 : -1;

    const regex = new RegExp(search, "i");
    const movies = await MovieModel.find({
      $or: [
        { title: { $regex: regex } },
        { longDesc: { $regex: regex } },
        { shortDesc: { $regex: regex } },
      ],
      ...filter,
    }).sort(order !== "default" ? { [feild]: sort } : {});

    return movies;
  } catch (error) {
    console.error("Error in searchMovies:", error);
    return error;
  }
};
