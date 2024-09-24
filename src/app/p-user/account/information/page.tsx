import EditUser from "@/src/components/templates/p-user/EditUser";
import EditUserInfo from "@/src/components/templates/p-user/EditUserInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ویرایش اطلاعات کاربری",
};

function page() {
  return (
    <div className="space-y-6">
      <EditUser />
      <EditUserInfo />
    </div>
  );
}

export default page;
