import Title from "@/src/components/modules/p-admin/Title";
import TicketsList from "@/src/components/templates/p-admin/tickets/TicketsList";
import React from "react";

function Ticketspage() {
  return (
    <div>
      <Title name="لیست تیکت ها" />
      <TicketsList/>
    </div>
  );
}

export default Ticketspage;
