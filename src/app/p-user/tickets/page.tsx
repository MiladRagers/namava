import Filter from "@/components/modules/Filter/Filter";
import TicketsList from "@/components/templates/p-user/TicketsList";
import React from "react";

function page() {
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
      <TicketsList />
    </div>
  );
}

export default page;
