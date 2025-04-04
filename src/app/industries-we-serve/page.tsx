import { Banner, ContactUsSection, TwoColSection2 } from "@/components";
import { IndustriesPageData } from "@/data/pagedata";

const page = () => {
    return (
        <main>
            <Banner {...IndustriesPageData.bannnerData} />
            <TwoColSection2 {...IndustriesPageData.featuredClient} />
            <ContactUsSection {...IndustriesPageData.contactUs} />
        </main>
    );
}

export default page;