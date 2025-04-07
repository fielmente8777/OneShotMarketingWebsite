import {
  Banner,
  ContactUsSection,
  FormSection,
  TwoColSection2,
} from "@/components";
import { IndustriesPageData } from "@/data/pagedata";
import WeServe from './components/WeServe';

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
