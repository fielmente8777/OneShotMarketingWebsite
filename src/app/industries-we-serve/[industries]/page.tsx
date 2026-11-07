import { ContactUsSection, ServicesSection, TwoColSection } from "@/components";
import Banner2 from "@/components/banner/Banner2";
import FaqSection from "@/components/sectionComponents/FaqSection";
import { pagesData } from "@/data/slugData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toMetaDescription } from "@/data/site";

interface Params {
  params: Promise<{
    industries: string;
  }>;
}

export async function generateStaticParams() {
  const datas = pagesData;

  return datas.map((data) => ({
    industries: data.slug,
    fallback: false,
  }));
}

export const dynamicParams = false;

export async function generateMetadata(props: Params): Promise<Metadata> {
  const industries = await props.params;

  const industriesSlug = await industries.industries;
  const industriesData = pagesData.find((data) => data.slug === industriesSlug);

  if (!industriesData) {
    return {
      title: "Industries We Serve",
      description: "Industries We Serve",
    };
  }
  const description = toMetaDescription(industriesData.aboutUs.desc[0]);
  const url = `/industries-we-serve/${industriesData.slug}`;
  return {
    title: industriesData.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: industriesData.title,
      description,
      url,
      images: [{ url: industriesData.banner.src, alt: industriesData.title }],
    },
  };
}

const page = async (props: Params) => {
  
  const industries = await props.params;
  const industriesSlug = await industries.industries;
  const industriesData = pagesData.find((data) => data.slug === industriesSlug);
  if (!industriesData) {
    notFound();
  }
  return (
    <main>
      <Banner2 {...industriesData.banner} />
      <section className="relative after:absolute after:inset-0 after:bg-[url('/bg1.webp')] after:bg-no-repeat after:bg-cover after:z-[-1]">
        <TwoColSection
          {...industriesData.aboutUs}
          btn2Css
          aspect="md:aspect-[4/3.6] aspect-[4/2.8]"
          imageClassName={industriesData.aboutUs.imageClassName || "!object-contain"}
        />
      </section>
      <ServicesSection {...industriesData.services} />
      <FaqSection {...industriesData.Faq} />
      <ContactUsSection {...industriesData.contactUs} tick />
    </main>
  );
};

export default page;
