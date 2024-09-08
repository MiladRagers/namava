import Filter from "@/src/components/modules/Filter/Filter";
import CommentsList from "@/src/components/templates/p-user/CommentsList";
import React from "react";

function page() {
  return (
    <div>
      <Filter
        filterField="status"
        options={[
          { label: "همه", slug: "all" },
          { label: "تایید شده", slug: "accepted" },
          { label: "تایید نشده", slug: "unaccepted" },
          { label: "آخرین", slug: "latest" },
        ]}
      />
      <CommentsList />
    </div>
  );
}

export default page;
