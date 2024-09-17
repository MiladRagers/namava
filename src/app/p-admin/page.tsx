import Filter from "@/src/components/modules/Filter/Filter";
import StatBox from "@/src/components/modules/p-admin/StatBox";
import Title from "@/src/components/modules/p-admin/Title";
import DurationChart from "@/src/components/templates/p-admin/DurationChart";
import RecentUser from "@/src/components/templates/p-admin/RecentUser";
import SalesChart from "@/src/components/templates/p-admin/SalesChart";
import { getAllStats } from "@/src/libs/service/services";
import { TStats } from "@/src/libs/types";
import React from "react";
import { HiOutlineBanknotes, HiOutlineBriefcase } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";
import { RiMovie2Line } from "react-icons/ri";

async function MainPage() {
  const { usersCount, moviesCount, latestUsers , subscriptionCount , sumationOfOrder} =
    (await getAllStats()) as TStats;
  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row gap-y-6 items-center justify-between">
        <div className="flex md:hidden items-center gap-x-4 text-gray-300">
          <img
            src="/images/user.png"
            className="w-[36px] h-[36px] rounded-full"
            alt="default-user.jpg"
          />
          <div>
            <h2>میلاد سلامیان</h2>
            <h6 className="text-xs text-gray-400">مدیریت اصلی</h6>
          </div>
        </div>
        <Title name="داشبورد اطلاعات" />
        <Filter
          filterField="status"
          options={[
            { label: "7 روز گذشته", slug: "7" },
            { label: "30 روز گذشته", slug: "30" },
            { label: "90 روز گذشته", slug: "90" },
            { label: "120 روز گذشته", slug: "120" },
          ]}
        />
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-10">
        <StatBox
          icon={
            <HiOutlineBriefcase className="text-2xl md:text-3xl lg:text-4xl" />
          }
          title="اشتراک ها"
          color="bg-[#075985]"
          value={subscriptionCount}
        />
        <StatBox
          icon={
            <HiOutlineBanknotes className="text-2xl md:text-3xl lg:text-4xl" />
          }
          title="مقدار فروش"
          color="bg-[#166534]"
          value={`${sumationOfOrder.toLocaleString("fa-IR")} تومان`}
        />
        <StatBox
          icon={<LuUsers className="text-2xl md:text-3xl lg:text-4xl" />}
          title="کاربران"
          color="bg-[#3730a3]"
          value={usersCount}
        />
        <StatBox
          icon={<RiMovie2Line className="text-2xl md:text-3xl lg:text-4xl" />}
          title="فیلم و سریال ها"
          color="bg-[#854d0e]"
          value={moviesCount}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <DurationChart />
        <RecentUser users={JSON.parse(JSON.stringify(latestUsers))} />
      </div>
      <div>
        <SalesChart />
      </div>
    </div>
  );
}

export default MainPage;
