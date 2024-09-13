import StatBox from "@/src/components/modules/p-admin/StatBox";
import LastFavList from "@/src/components/templates/p-user/LastFavList";
import LastTickets from "@/src/components/templates/p-user/LastTickets";
import { getUserPanelStats } from "@/src/libs/service/services";
import { authUser } from "@/src/utils/serverHelper";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";
async function page() {
  const user = await authUser();
  const { subscription, commentsCount, wishListCount }: any =
    await getUserPanelStats(user._id);
  return (
    <div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-3 md:gap-5">
        <StatBox
          icon={
            <HiOutlineBriefcase className="text-2xl md:text-3xl lg:text-4xl" />
          }
          title="اشتراک فعلی"
          color="bg-[#075985]"
          value={
            subscription.hasSubscription
              ? `${subscription.remainingDays} روز`
              : "فعال نیست"
          }
        />
        <StatBox
          icon={<LiaComments className="text-2xl md:text-3xl lg:text-4xl" />}
          title="تعداد کامنت ها"
          color="bg-amber-600"
          value={`${commentsCount} تا`}
        />
        <StatBox
          icon={
            <IoTicketOutline className="text-2xl md:text-3xl lg:text-4xl" />
          }
          title="تعداد تیکت ها"
          color="bg-[#3730a3]"
          value={29232}
        />
        <StatBox
          icon={<FaRegHeart className="text-2xl md:text-3xl lg:text-4xl" />}
          title="تعداد مورد علاقه"
          color="bg-red-600"
          value={`${wishListCount} تا`}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <LastTickets />
        <LastFavList />
      </div>
    </div>
  );
}

export default page;
