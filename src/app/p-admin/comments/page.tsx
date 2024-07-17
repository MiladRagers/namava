import Title from "@/components/modules/p-admin/Title";
import CommentsList from "@/components/templates/p-admin/comments/CommentsList";
import React from "react";

function CommentsPage() {
  return (
    <div>
      <Title name="کامنت ها" />
      <CommentsList/>
    </div>
  );
}

export default CommentsPage;
