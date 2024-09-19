"use client";
import LockModal from "@/src/components/modules/modals/LockModal";
import { deletePasswordProfile } from "@/src/libs/actions/profile";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

function Lock({ profile }: any) {
  const [isShowLockModal, setIsShowLockModal] = useState(false);
  const switchRef = useRef<HTMLInputElement>(null);

  const handleSwitch = async (e: any) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      setIsShowLockModal(true);
    } else {
      const res = await deletePasswordProfile(profile._id);
      if (res?.status === 200) {
        return toast.success(`${res?.message}`);
      }

      return toast.error(`${res?.message}`);
    }
  };

  return (
    <>
      <div className="max-w-[700px] mx-auto text-white flex flex-col items-center md:items-start gap-x-3 md:gap-x-8 px-4 md:px-10 py-6 md:py-[30px] bg-namavaBlack rounded-xl my-10">
        <div className="flex w-full items-center justify-between">
          <div className="text-lg">
            <span>قفل پروفایل : </span>
            <span
              className={`${
                profile.password ? "text-green-600" : "text-red-600"
              }`}
            >
              {profile.password ? "فعال" : "غیر فعال"}
            </span>
          </div>
          <div>
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={profile.password}
                onChange={handleSwitch}
                ref={switchRef}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <p className="text-sm mt-5">
          توجه داشته باشید که در صورت فعال کردن قفل پروفایل، هنگام ورود به این
          پروفایل، ثبت کد ورود الزامی خواهد بود.
        </p>
      </div>

      {isShowLockModal && (
        <LockModal onClose={setIsShowLockModal} isShow={isShowLockModal} />
      )}
    </>
  );
}

export default Lock;
