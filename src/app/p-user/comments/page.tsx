import Filter from "@/src/components/modules/Filter/Filter";
import CommentsList from "@/src/components/templates/p-user/CommentsList";
import { getAllUserComments } from "@/src/libs/service/services";
import { TSearchParams } from "@/src/libs/types";
import React from "react";

async function page({ searchParams }: TSearchParams) {
  const { count, comments }: any = await getAllUserComments(
    +searchParams?.page
  );
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
      <CommentsList
        comments={JSON.parse(JSON.stringify(comments))}
        count={count}
      />
    </div>
  );
}

export default page;
