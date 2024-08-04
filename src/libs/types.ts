export type TModal = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: Boolean;
};

export type TComment = {
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TParams = {
  params: { [key: string]: string | string[] | undefined };
};

export const baseURL = "http://localhost:3000";
