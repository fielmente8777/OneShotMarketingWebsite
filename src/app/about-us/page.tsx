import {
  Banner,
  ContactUsSection,
  FormSection,
  MileStoneSection,
  TwoColSection,
} from "@/components";
import { AboutUsPageData } from "@/data/pagedata";

const page = () => {
  return (
    <main>
      <Banner {...AboutUsPageData.bannnerData} />
      <FormSection desc={AboutUsPageData.bannnerData.description} />

      <TwoColSection {...AboutUsPageData.aboutUs} />
      <TwoColSection {...AboutUsPageData.whyChooseUs} index={1} />
      <MileStoneSection cards={AboutUsPageData.mileStones} />
      <ContactUsSection {...AboutUsPageData.contactUs} />
    </main>
  );
};

export default page;
