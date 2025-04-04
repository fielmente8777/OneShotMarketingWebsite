import { Banner, ContactUsSection, TwoColSection, TwoColSection2 } from "@/components";
import { ServicePageData } from "@/data/pagedata";

const page = () => {
    return (
        <main>
            <Banner {...ServicePageData.bannnerData} />
            <TwoColSection {...ServicePageData.digitalMarketing} />
            <TwoColSection2 {...ServicePageData.featuredClient} />
            <ContactUsSection {...ServicePageData.contactUs} />
        </main>
    );
}

export default page;