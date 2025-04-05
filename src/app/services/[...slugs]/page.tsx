import { pageData2 } from "@/data/slugData";

interface Params {
  params: {
    slugs: string[];
  };
}

// export async function generateStaticParams() {
//   const datas = pageData2;
//   console.log("datas", datas);
//   const dataList = pageData2;
//   // console.log("dataList", dataList);
//   return dataList.map((data) => ({
//     slugs: data.slug,
//   }));
// }

// export async function generateMetadata(props: Params) {
//   const slugs = await props.params;

//   const slugsSlug = await slugs.slugs;
//   const slugsData = pageData2.find((data) => data.slug === slugsSlug);

//   if (!slugsData) {
//     return {
//       title: "slugs We Serve",
//       description: "slugs We Serve",
//     };
//   }
//   return {
//     title: slugsData.title,
//     description: slugsData.title,
//   };
// }

const page = async (props: Params) => {
  const data = await props.params;
  const slugsSlug = await data.slugs;
  const slugsData = pageData2.find(
    (data) => data.slug === slugsSlug.splice(0, 1)[0]
  );
  if (!slugsData) {
    return <h1>Slugs We Serve</h1>;
  }
  console.log("slugsData", slugsData);
  return (
    <main>
      <h1>Slugs We Serve</h1>
      <h2>{slugsData.title}</h2>
      {/* Add more content based on slugsData */}
    </main>
  );
};

export default page;
