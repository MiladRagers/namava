export type TModal = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: Boolean;
};

export type TComment = {
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const baseURL = "http://localhost:3000";
