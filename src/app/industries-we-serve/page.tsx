import {
  Banner,
  ContactUsSection,
  FormSection,
  TwoColSection2,
} from "@/components";
import { IndustriesPageData } from "@/data/pagedata";
import WeServe from './components/WeServe';
import type { Metadata } from "next";
import { toMetaDescription } from "@/data/site";

const description = toMetaDescription(
  `${IndustriesPageData.exploreIndustries.subTitle} ${IndustriesPageData.contactUs.desc[0]}`
);

export const metadata: Metadata = {
  title: "Industries We Serve",
  description,
  alternates: { canonical: "/industries-we-serve" },
  openGraph: { title: "Industries We Serve", description, url: "/industries-we-serve" },
};

const page = () => {
  return (
    <main>
      <Banner {...IndustriesPageData.bannnerData} />
      <FormSection desc={IndustriesPageData.bannnerData.description} />
      <WeServe {...IndustriesPageData.exploreIndustries} />
      <TwoColSection2 {...IndustriesPageData.featuredClient} />
      <ContactUsSection {...IndustriesPageData.contactUs} />
    </main>
  );
};

export default page;
