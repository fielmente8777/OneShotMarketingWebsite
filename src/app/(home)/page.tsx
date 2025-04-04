import { homePageData } from "@/data/pagedata";
import {
  Banner,
  ContactUsSection,
  TwoColSection,
  TwoColSection2,
} from "@/components";
import TrustedBrand from "./components/TrustedBrand";
import FeaturedServices from "./components/FeaturedServices";
import IndustriesServe from "./components/IndustriesServe";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannnerData} />
      <TrustedBrand {...homePageData.trustedTopBrands} />
      <FeaturedServices {...homePageData.featuredServices} />
      <TwoColSection {...homePageData.experience} btnCss />
      <IndustriesServe {...homePageData.industries} />
      <TwoColSection2 {...homePageData.featuredClient} />
      <ContactUsSection {...homePageData.contactUs} />
    </main>
  );
}
