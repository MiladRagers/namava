import Title from "@/src/components/modules/p-admin/Title";
import TicketsList from "@/src/components/templates/p-admin/tickets/TicketsList";
import { getAllTickets } from "@/src/libs/service/services";
import { IPanelTicket, TSearchParams } from "@/src/libs/types";
import React from "react";

async function Ticketspage({ searchParams }: TSearchParams) {
  const { tickets, ticketsCount } = (await getAllTickets(
    +searchParams?.page
  )) as IPanelTicket;
  return (
    <div>
      <Title name="لیست تیکت ها" />
      <TicketsList
        ticketsCount={ticketsCount}
        tickets={JSON.parse(JSON.stringify(tickets))}
      />
    </div>
  );
}

export default Ticketspage;
