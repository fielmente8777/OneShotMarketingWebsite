import {
  Banner,
  ContactUsSection,
  FormSection,
  TwoColSection,
  TwoColSection2,
} from "@/components";
import { ServicePageData } from "@/data/pagedata";
import IndustriesServe from "./components/IndustriesServe";

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
