import { ContactUsSection, ServicesSection, TwoColSection } from "@/components";
import Banner2 from "@/components/banner/Banner2";
import { pagesData } from "@/data/slugData";

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

export async function generateMetadata(props: Params) {
  const industries = await props.params;

  const industriesSlug = await industries.industries;
  const industriesData = pagesData.find((data) => data.slug === industriesSlug);

  if (!industriesData) {
    return {
      title: "Industries We Serve",
      description: "Industries We Serve",
    };
  }
  return {
    title: industriesData.title,
    description: industriesData.title,
  };
}

const page = async (props: Params) => {
  const industries = await props.params;
  const industriesSlug = await industries.industries;
  const industriesData = pagesData.find((data) => data.slug === industriesSlug);
  if (!industriesData) {
    return <h1>Industries We Serve</h1>;
  }
  return (
    <main>
      <Banner2 {...industriesData.banner} />
      <TwoColSection {...industriesData.aboutUs}/>
      <ServicesSection {...industriesData.services} />
      <ContactUsSection {...industriesData.contactUs} tick />

    </main>
  );
};

export default page;
