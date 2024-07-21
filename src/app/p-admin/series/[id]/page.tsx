import Title from "@/components/modules/p-admin/Title";
import SessionList from "@/components/templates/p-admin/film/SessionList";
import React from "react";

function page() {
  return (
    <>
      <Title name="قسمت های سریال فلان" />;
      <SessionList/>
    </>
  );
}

export default page;
