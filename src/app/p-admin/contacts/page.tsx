import Title from "@/components/modules/p-admin/Title";
import ContactsList from "@/components/templates/p-admin/contacts/ContactsList";
import React from "react";

function ContactPage() {
  return (
    <div>
      <Title name="پیغام ها" />
      <ContactsList/>
    </div>
  );
}

export default ContactPage;
