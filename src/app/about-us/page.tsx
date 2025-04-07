import {
  Banner,
  ContactUsSection,
  FormSection,
  MileStoneSection,
  TwoColSection,
} from "@/components";
import { AboutUsPageData } from "@/data/pagedata";
import FeaturedIn from "./component/FeaturedIn";

const page = () => {
  return (
    <main>
      <Banner {...AboutUsPageData.bannnerData} />
      <FeaturedIn {...AboutUsPageData.featuredIn} />
      <FormSection desc={AboutUsPageData.bannnerData.description} />
      <TwoColSection {...AboutUsPageData.aboutUs} aspect="max-lg:aspect-[4/2]"/>
      <TwoColSection {...AboutUsPageData.whyChooseUs} index={1} />
      <MileStoneSection cards={AboutUsPageData.mileStones} />
      <ContactUsSection {...AboutUsPageData.contactUs} />
    </main>
  );
};

export default page;
