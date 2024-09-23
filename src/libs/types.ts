export const baseURL = "http://localhost:3000";

export type THeader = {
  isImage?: boolean;
  isTitle?: boolean;
  isKid?: boolean;
  img?: string;
  mobileImage?: string;
  className?: string;
  info?: any;
  onSwipe?: any;
  bookmarks?: any;
  subscription?: any;
  user?: any;
};

export type THeaderDetails = {
  isKid: boolean | undefined;
  info: any;
  subscription: any;
  user?: any;
  bookmarks?: any;
};

export type TMovieSlider = {
  title: string;
  link?: string;
  movies: any;
  userBookmarks: any;
  user: any;
};

export type TModal = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: Boolean;
  password?: string;
  onPassword?: any;
  title?: string;
  desc?: string;
  onAction?: any;
};

export type TComment = {
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
  comment: any;
  user: string;
  movieLink: string;
};

export type TParams = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string };
};

export type TAdminPage = {
  searchParams: { page: string; q: string };
  params: { [key: string]: string | string[] | undefined | any };
};

export type TSearchParams = {
  searchParams?: { [key: string]: string | undefined | any };
};

// p-admin types

export type TStats = {
  usersCount: number;
  moviesCount: number;
  latestUsers: TUser[];
  subscriptionCount: number;
  sumationOfOrder: number;
  orders: IOrders[];
};

export interface TUser {
  _id: string;
  name: string;
  profiles: string[];
  createdAt: string;
}

export interface TResponse {
  message: string;
  status: number;
}

export type UserAuthContextType = {
  isLogin: boolean;
  userInfo: User | null;
  activeProfile: any;
};

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  profiles: Profile[];
  profileLimitCount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  subscriptionEnd: string;
}

export interface Profile {
  _id: string;
  name: string;
  user: string;
  ages: number;
  isLock: boolean;
  limitsMovies: any[];
  image: string;
  type: string;
  __v: number;
}

export interface TArticle {
  _id?: string;
  title: string;
  link: string;
  readingTime: String | Number;
  tags?: string[];
  movie?: Movie;
  image: string;
  content?: string;
  creator?: Creator;
  isAccept?: boolean;
  isDraft?: boolean;
  createdAt: string;
  updatedAt?: string;
  __v?: number;
  shortDesc?: string;
}

export interface Movie {
  _id: string;
  title: string;
  link: string;
}

export interface Creator {
  _id: string;
  name: string;
}

export interface IWishList {
  movies: TWish[];
  count: number;
}

export interface TWish {
  _id?: string;
  title: string;
  link: string;
  showTime: string;
  category: Category;
  createdAt: string;
  type: "film" | "series";
  mainImage?: string;
  range: number | string;
  IMDB?: number;
}

export interface Category {
  _id: string;
  title: string;
}

export interface ILastTicket {
  _id: string;
  title: string;
  body: string;
  priority: number;
  department: Department;
  subDepartment: {
    title: string;
  };
  user: {
    name: string;
  };
  isFromUserPanel: boolean;
  isAnswer: boolean;
  isOpen: boolean;
  createdAt: string;
  updatedAt: string;
  status: "pending" | "answered";
  __v: number;
}

interface Department {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUserTicket {
  tickets: ILastTicket[];
  ticketsCount: number;
  answeredCount?: number;
  pendingCount?: number;
  closeCount?: number;
  filter: string;
}

export interface IPanelTicket {
  tickets: ILastTicket[];
  ticketsCount: number;
}

export interface IOrders {
  _id: string;
  title: string;
  orderNumber: string;
  totalPrice: number;
  status: "pay" | "pending";
  user: string;
  createdAt: string;
  updatedAt: string;
  discount: number;
  __v: number;
}

export interface IOrdersList {
  orders: IOrders[];
  orderCount: number;
  filter?: string;
}

export interface ISalesChart {
  numDays: number;
  orders: IOrders[];
}

export interface IPaymentGateway {
  totalPrice: number;
  time: number;
  title: string;
  discount: number;
}

export interface IMovie {
  image: string;
  title: string;
  link: string;
  isLink?: boolean;
  type: string;
  showTime: string;
  contentType?: "adult" | "kid";
}


export type TProfileMenu = {
  isShow: boolean;
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  activeProfile?: any;
  userSubscription?: { hasSubscription: boolean; remainingDays: number };
};
