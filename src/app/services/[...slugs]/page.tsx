import {
  Banner,
  ContactUsSection,
  PageNotFound,
  ServicesSection,
  TwoColSection,
} from "@/components";
import Banner2 from "@/components/banner/Banner2";
import { pageData2, pagesData } from "@/data/slugData";

interface Params {
  params: Promise<{
    slugs: string[];
  }>;
}

export async function generateStaticParams() {
  const dataList = pagesData;
  const data2 = pageData2;
  const slugs = dataList.map((data) => data.slug);
  const slugs2 = data2.map((data) => data.slug);
  const allSlugs = [...slugs, ...slugs2];
  return allSlugs.map((slug) => ({
    slugs: typeof slug === "string" ? slug.split("/") : slug,
    fallback: false,
  }));
}

export async function generateMetadata(props: Params) {
  const data = await props.params;
  const slugs = await data.slugs;
  const slugsData = pageData2.find(
    (item) => item.slug.split("/").join("/") === slugs.join("/")
  );
  if (!slugsData) {
    return {
      title: "Services",
      description: "Services",
    };
  }
  const slugsData2 = pagesData.find((item) => item.slug === slugs[0]);
  if (!slugsData2) {
    return {
      title: "Services",
      description: "Services",
    };
  }
}

const page = async (props: Params) => {
  const data = await props.params;
  const slugs = await data.slugs;
  if (!slugs) {
    return <PageNotFound />;
  }

  if (slugs.length === 2) {
    const slugsData = pageData2.find(
      (item) => item.slug.split("/").join("/") === slugs.join("/")
    );
    if (!slugsData) {
      return <PageNotFound />;
    }
    return (
      <main>
        <Banner {...slugsData.bannnerData} />
        <TwoColSection {...slugsData.aboutUs} />
        <ServicesSection {...slugsData.services} />
        <ContactUsSection {...slugsData.contactUs} tick />
      </main>
    );
  }
  if (slugs.length === 1) {
    const slugsData = pagesData.find((item) => item.slug === slugs[0]);
    if (!slugsData) {
      return <PageNotFound />;
    }
    return (
      <main>
        <Banner2 {...slugsData.banner} />
        <TwoColSection {...slugsData.aboutUs} />
        <ServicesSection {...slugsData.services} />
        <ContactUsSection {...slugsData.contactUs} tick />
      </main>
    );
  }
};

export default page;
