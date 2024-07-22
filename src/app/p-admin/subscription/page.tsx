import Title from "@/components/modules/p-admin/Title";
import SubscriptionList from "@/components/templates/p-admin/Subscription/SubscriptionList";
import React from "react";

function Subscription() {
  return (
    <div>
      <Title name="لیست اشتراک ها" />
      <SubscriptionList/>
    </div>
  );
}

export default Subscription;
