import { homePageData } from "@/data/pagedata";
import {
  Banner,
  ContactUsSection,
  FormSection,
  TwoColSection,
  TwoColSection2,
} from "@/components";
import TrustedBrand from "./components/TrustedBrand";
import FeaturedServices from "./components/FeaturedServices";
import IndustriesServe from "./components/IndustriesServe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannnerData} />
      <TrustedBrand {...homePageData.trustedTopBrands} />
      <FormSection desc={homePageData.bannnerData.description} />
      <FeaturedServices {...homePageData.featuredServices} />
      <TwoColSection {...homePageData.experience} btnCss />
      <IndustriesServe {...homePageData.industries} />
      <TwoColSection2 {...homePageData.featuredClient} />
      <ContactUsSection {...homePageData.contactUs} />
    </main>
  );
}
