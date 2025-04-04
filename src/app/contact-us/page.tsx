import { ContactUsPageData } from "@/data/pagedata";
import ContactUsSection from "./components/ContactUsSection";
import Location from "./components/Location";

const page = () => {
  return (
    <main>
      <ContactUsSection {...ContactUsPageData.contactUs} />
      <Location {...ContactUsPageData.location} />
    </main>
  );
};

export default page;
