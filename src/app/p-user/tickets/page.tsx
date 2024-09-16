import Filter from "@/src/components/modules/Filter/Filter";
import StatBox from "@/src/components/modules/p-admin/StatBox";
import SendNewTicket from "@/src/components/templates/p-user/SendNewTicket";
import TicketsList from "@/src/components/templates/p-user/TicketsList";
import {
  getAllUserTicket,
  getLastUserTickets,
} from "@/src/libs/service/services";
import { ILastTicket, IUserTicket, TSearchParams } from "@/src/libs/types";
import { FaClosedCaptioning } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { MdAccessTime } from "react-icons/md";

async function page({ searchParams }: TSearchParams) {
  const { tickets, ticketsCount, answeredCount, pendingCount, closeCount } =
    (await getAllUserTicket(+searchParams?.page || 1)) as IUserTicket;
  return (
    <div>
      <Filter
        filterField="status"
        options={[
          { label: "همه", slug: "all" },
          { label: "پاسخ داده شده", slug: "with-asnwers" },
          { label: "پاسخ نداده شده", slug: "without-answers" },
          { label: "بسته شده", slug: "closed" },
        ]}
      />
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-3 md:gap-5 mt-5">
        {/* <StatBox
          icon={<LiaComments className="text-2xl md:text-3xl lg:text-4xl" />}
          title="تعداد کامنت ها"
          color="bg-[#075985]"
          value={29232}
        /> */}
        <StatBox
          icon={
            <HiOutlineBriefcase className="text-2xl md:text-3xl lg:text-4xl" />
          }
          title="پاسخ داده شده"
          color="bg-amber-600"
          value={`${answeredCount} تا`}
        />
        <StatBox
          icon={<MdAccessTime className="text-2xl md:text-3xl lg:text-4xl" />}
          title="در انتظار پاسخ"
          color="bg-[#3730a3]"
          value={`${pendingCount} تا`}
        />
        <StatBox
          icon={
            <FaClosedCaptioning className="text-2xl md:text-3xl lg:text-4xl" />
          }
          title="بسته شده"
          color="bg-red-600"
          value={`${closeCount} تا`}
        />

        <SendNewTicket />
      </div>
      <TicketsList
        tickets={JSON.parse(JSON.stringify(tickets))}
        ticketsCount={ticketsCount}
      />
    </div>
  );
}

export default page;
