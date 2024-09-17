import Filter from "@/src/components/modules/Filter/Filter";
import OrderTable from "@/src/components/templates/p-user/OrderTable";
import { getAllUserOrders } from "@/src/libs/service/services";
import { IOrdersList, TSearchParams } from "@/src/libs/types";

async function page({ searchParams }: TSearchParams) {
  const { orders, orderCount } = (await getAllUserOrders(
    +searchParams?.page
  )) as IOrdersList;
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
        orderCount={orderCount}
        orders={JSON.parse(JSON.stringify(orders))}
      />
    </div>
  );
}

export default page;
