import {
  Banner,
  ContactUsSection,
  FormSection,
  MileStoneSection,
  TwoColSection,
} from "@/components";
import { AboutUsPageData } from "@/data/pagedata";
import FeaturedIn from "./component/FeaturedIn";
import type { Metadata } from "next";
import { toMetaDescription } from "@/data/site";

const description = toMetaDescription(AboutUsPageData.aboutUs.desc[0]);

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about-us" },
  openGraph: { title: "About Us", description, url: "/about-us" },
};

const page = () => {
  return (
    <main>
      <Banner {...AboutUsPageData.bannnerData} />
      <FeaturedIn {...AboutUsPageData.featuredIn} />
      <FormSection desc={AboutUsPageData.bannnerData.description} />
      <TwoColSection {...AboutUsPageData.aboutUs} aspect="max-lg:aspect-[4/2] aspect-[4/2.8]"/>
      <TwoColSection {...AboutUsPageData.whyChooseUs} index={1} />
      <MileStoneSection cards={AboutUsPageData.mileStones} />
      <ContactUsSection {...AboutUsPageData.contactUs} />
    </main>
  );
};

export default page;
