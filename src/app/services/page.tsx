import {
  Banner,
  ContactUsSection,
  FormSection,
  TwoColSection,
  TwoColSection2,
} from "@/components";
import { ServicePageData } from "@/data/pagedata";
import IndustriesServe from "./components/IndustriesServe";
import type { Metadata } from "next";
import { toMetaDescription } from "@/data/site";

const description = toMetaDescription(ServicePageData.digitalMarketing.desc[0]);

export const metadata: Metadata = {
  title: "Our Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Our Services", description, url: "/services" },
};

const page = () => {
  return (
    <main>
      <Banner {...ServicePageData.bannnerData} />
      <FormSection desc={ServicePageData.bannnerData.description} />
      <TwoColSection {...ServicePageData.digitalMarketing} />
      <IndustriesServe {...ServicePageData.services} />
      <TwoColSection2 {...ServicePageData.featuredClient} />
      <ContactUsSection {...ServicePageData.contactUs} />
    </main>
  );
};

export default page;
