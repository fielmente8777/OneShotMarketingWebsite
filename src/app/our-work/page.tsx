import type { Metadata } from "next";
import Banner from "@/components/banner/Banner";
import FormSection from "@/components/sectionComponents/FormSection";
import MileStoneSection from "@/components/sectionComponents/MileStoneSection";
import TwoColSection2 from "@/components/sectionComponents/TwoColSection2";
import ContactUsSection from "@/components/sectionComponents/ContactUsSection";
import { AboutUsPageData, homePageData } from "@/data/pagedata";
import { pageData2, pagesData } from "@/data/slugData";
import { toMetaDescription } from "@/data/site";
import WorkGallery, { WorkItem } from "./components/WorkGallery";

const description = toMetaDescription(
  `${homePageData.featuredClient.desc[0]} Explore our website design, SEO, social media, performance marketing and CRM work for hotels, restaurants, immigration, beauty and clothing brands.`
);

export const metadata: Metadata = {
  title: "Our Work",
  description,
  alternates: { canonical: "/our-work" },
  openGraph: { title: "Our Work", description, url: "/our-work" },
};

const strip = (html: string) => html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

// Every service page already showcases a piece of work; collect them here.
const workItems: WorkItem[] = pageData2.map((p) => {
  const industrySlug = p.slug.split("/")[0];
  const industry =
    pagesData.find((i) => i.slug === industrySlug)?.title ?? industrySlug;
  return {
    industry,
    service: p.title,
    title: strip(p.bannnerData.subTitle),
    desc: strip(p.aboutUs.desc[0]),
    src: p.aboutUs.src,
    href: `/services/${p.slug}`,
  };
});

const bannerData = {
  ...AboutUsPageData.bannnerData,
  title: "OUR WORK",
};

const page = () => {
  return (
    <main>
      <Banner {...bannerData} />
      <FormSection desc={bannerData.description} />
      <WorkGallery
        title={homePageData.featuredClient.title}
        subTitle={homePageData.featuredClient.subTitle}
        items={workItems}
      />
      <MileStoneSection cards={AboutUsPageData.mileStones} />
      <TwoColSection2 {...homePageData.featuredClient} />
      <ContactUsSection {...homePageData.contactUs} />
    </main>
  );
};

export default page;
