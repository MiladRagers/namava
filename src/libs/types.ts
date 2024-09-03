export type TModal = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: Boolean;
};

export type TComment = {
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
  comment: any;
  user: any;
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

export const baseURL = "http://localhost:3000";
