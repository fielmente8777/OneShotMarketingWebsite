import {
  Banner,
  ContactUsSection,
  FormSection,
  PageNotFound,
  ServicesSection,
  TwoColSection,
} from "@/components";
import Banner2 from "@/components/banner/Banner2";
import { pageData2, pagesData } from "@/data/slugData";
import type { Metadata } from "next";
import { toMetaDescription } from "@/data/site";

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

export const dynamicParams = false;

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { slugs } = await props.params;
  const fallback: Metadata = { title: "Services", description: "Services" };
  if (!slugs) return fallback;

  if (slugs.length === 2) {
    const slugsData = pageData2.find((item) => item.slug === slugs.join("/"));
    if (!slugsData) return fallback;
    const title = slugsData.bannnerData.subTitle;
    const description = toMetaDescription(slugsData.bannnerData.description);
    const url = `/services/${slugsData.slug}`;
    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        images: [{ url: slugsData.bannnerData.src, alt: title }],
      },
    };
  }

  if (slugs.length === 1) {
    const slugsData = pagesData.find((item) => item.slug === slugs[0]);
    if (!slugsData) return fallback;
    const description = toMetaDescription(slugsData.aboutUs.desc[0]);
    return {
      title: slugsData.title,
      description,
      // Same content as the industry page, so point search engines there
      alternates: { canonical: `/industries-we-serve/${slugsData.slug}` },
    };
  }

  return fallback;
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
        <FormSection desc={slugsData.bannnerData.description} />
        <TwoColSection {...slugsData.aboutUs} isRounded aspect="aspect-[4/3.5]"   />
        <ServicesSection {...slugsData.services} noOslider={5} borderTop={true}/>
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
        <ServicesSection {...slugsData.services}  />
        <ContactUsSection {...slugsData.contactUs} tick />
      </main>
    );
  }
};

export default page;
