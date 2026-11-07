import { ContactUsPageData } from "@/data/pagedata";
import ContactUsSection from "./components/ContactUsSection";
import Location from "./components/Location";
import type { Metadata } from "next";
import { toMetaDescription } from "@/data/site";

const description = toMetaDescription(ContactUsPageData.contactUs.desc[0]);

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact-us" },
  openGraph: { title: "Contact Us", description, url: "/contact-us" },
};

const page = () => {
  return (
    <main>
      <ContactUsSection {...ContactUsPageData.contactUs} />
      <Location {...ContactUsPageData.location} />
    </main>
  );
};

export default page;
