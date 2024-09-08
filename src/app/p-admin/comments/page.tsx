import Title from "@/src/components/modules/p-admin/Title";
import CommentsList from "@/src/components/templates/p-admin/comments/CommentsList";
import { getAllComments } from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function CommentsPage({ params }: TAdminPage) {
  const { comments, counts }: any = await getAllComments(params.page);
  return (
    <div>
      <Title name="کامنت ها" />
      <CommentsList
        comments={JSON.parse(JSON.stringify(comments))}
        counts={counts}
      />
    </div>
  );
}

export default CommentsPage;
