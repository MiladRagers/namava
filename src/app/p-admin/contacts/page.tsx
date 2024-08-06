import Search from "@/components/modules/p-admin/Search";
import Title from "@/components/modules/p-admin/Title";
import ContactsList from "@/components/templates/p-admin/contacts/ContactsList";
import { getAllContacts } from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function ContactPage({ searchParams }: TAdminPage) {
  const { allContacts, counts }: any = await getAllContacts(
    +searchParams.page,
    searchParams.q
  );
  return (
    <div>
      <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-y-3">
        <Title name="پیغام ها" />
        <Search />
      </div>
      <ContactsList
        contacts={JSON.parse(JSON.stringify(allContacts))}
        count={counts}
      />
    </div>
  );
}

export default ContactPage;
