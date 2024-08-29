import Search from "@/components/modules/p-admin/Search";
import Title from "@/components/modules/p-admin/Title";
import AddNewSubscription from "@/components/templates/p-admin/Subscription/AddNewSubscription";
import SubscriptionList from "@/components/templates/p-admin/Subscription/SubscriptionList";
import React from "react";

function Subscription() {
  return (
    <div>
      <Title name="ساخت اشتراک" />
      <AddNewSubscription />
      <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-y-3">
        <Title name="لیست اشتراک ها" />
        <Search />
      </div>
      <SubscriptionList />
    </div>
  );
}

export default Subscription;
