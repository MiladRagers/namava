import Search from "@/components/modules/p-admin/Search";
import Title from "@/components/modules/p-admin/Title";
import AddNewSubscription from "@/components/templates/p-admin/Subscription/AddNewSubscription";
import SubscriptionList from "@/components/templates/p-admin/Subscription/SubscriptionList";
import { getAllSubscription } from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function Subscription({ searchParams }: TAdminPage) {
  const { subscriptions, counts }: any = await getAllSubscription(
    +searchParams.page,
    searchParams.q
  );
  return (
    <div>
      <Title name="ساخت اشتراک" />
      <AddNewSubscription />
      <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-y-3">
        <Title name="لیست اشتراک ها" />
        <Search />
      </div>
      <SubscriptionList
        subscriptions={JSON.parse(JSON.stringify(subscriptions))}
        counts={counts}
      />
    </div>
  );
}

export default Subscription;
