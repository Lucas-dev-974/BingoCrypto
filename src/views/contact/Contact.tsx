import { Pageheader } from "../layout/PageHeader";
import { ContactFirstPart } from "./ContactFirstPart";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <>
      <Pageheader pageHeaderTitle="Contactez nous" breadcrumbTitle="contact" />
      <ContactFirstPart />
      <ContactForm />
    </>
  );
}
