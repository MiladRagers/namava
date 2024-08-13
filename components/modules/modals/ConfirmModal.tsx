import Message from "@/icons/Message";
import React, { useTransition } from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "../auth/Button/Button";
import Spinner from "../spinner/Spinner";

function ConfirmModal({
  onClose,
  onAction,
  id,
  title = "آیا از حدف اطمینان دارید ؟",
}: {
  onClose?: any;
  onAction: any;
  id?: string;
  title?: string;
}) {
  return (
    <div className="w-[350px] md:w-[500px] bg-gray-100 relative rounded-md text-black px-4 pt-5 pb-7">
      <FaXmark
        onClick={() => onClose()}
        className="text-lg md:text-3xl absolute left-3 top-3 md:cursor-pointer"
      />
      <form className="flex-center flex-col space-y-5">
        <Message className="!w-[136px] !h-[137px]" />
        <h2 className="text-lg font-IranMedium">{title}</h2>
        <div className="flex items-center justify-center gap-x-3 w-full">
          <AcceptBtn onAction={onAction} id={id} />
          <Button
            className="!mt-8 text-white !bg-red-600 !w-full"
            onClick={onClose}
          >
            خیر
          </Button>
        </div>
      </form>
    </div>
  );
}

function AcceptBtn({ onAction, id }: { onAction: any; id?: string }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onAction(id);
    });
  };
  return (
    <Button className="text-white !mt-8 !w-full h-[44px]" onClick={handleClick}>
      {isPending ? <Spinner /> : "بله"}
    </Button>
  );
}

export default ConfirmModal;
