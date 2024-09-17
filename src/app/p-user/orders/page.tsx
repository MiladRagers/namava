import Filter from "@/src/components/modules/Filter/Filter";
import OrderTable from "@/src/components/templates/p-user/OrderTable";
import { getAllUserOrders } from "@/src/libs/service/services";
import { TSearchParams } from "@/src/libs/types";

async function page({ searchParams }: TSearchParams) {
  const { orders, orderCount }: any = await getAllUserOrders(
    +searchParams?.page
  );
  return (
    <div className="text-white">
      <Filter
        filterField="status"
        options={[
          { label: "همه", slug: "all" },
          { label: "موفق", slug: "success" },
          { label: "ناموفق", slug: "unsuccess" },
          { label: "پرداخت", slug: "paid" },
        ]}
      />
      <OrderTable
        count={orderCount}
        orders={JSON.parse(JSON.stringify(orders))}
      />
    </div>
  );
}

export default page;
