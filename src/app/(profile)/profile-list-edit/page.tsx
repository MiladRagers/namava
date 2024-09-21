import EditProfileBox from "@/src/components/modules/profileBox/EditProfileBox";
import Logo from "@/src/icons/Logo";
import { authUser } from "@/src/utils/serverHelper";
import Link from "next/link";

async function EditProfile() {
  const user = await authUser();
  return (
    <div className="text-white">
      <div className="flex items-center justify-center">
        <Logo className="!w-[50px] md:!w-[80px] !h-[50px] md:!h-[80px]" />
      </div>
      <div className="flex items-center justify-center flex-col mt-10 md:mt-24">
        <h1 className="text-xl md:text-3xl">
          کدام پروفایل را میخواهید ویرایش کنید؟
        </h1>
        <div className="flex items-center justify-center  flex-wrap gap-y-8 gap-x-10 mt-10 md:mt-20 child:md:cursor-pointer">
          {user.profiles.map((profile: any) => (
            <EditProfileBox
              key={profile._id}
              profile={JSON.parse(JSON.stringify(profile))}
            />
          ))}
        </div>
        <Link
          href="/"
          className="w-[200px] h-[50px] rounded-lg text-base md:text-lg mt-20 flex items-center justify-center gap-x-2 bg-gray-500/40"
        >
          <span className="text-xs">بازگشت</span>
        </Link>
      </div>
    </div>
  );
}

export default EditProfile;
