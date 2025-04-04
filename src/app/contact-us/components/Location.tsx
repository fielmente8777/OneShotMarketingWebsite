import {
  LazyLoadedMap,
  OnlyButton,
  SectionTitleSubTitle,
  SectionWithContainer,
} from "@/components";

interface LocationProps {
  title: string;
  subTitle: string;
  src: string;
  links: {
    name: string;
    href: string;
  }[];
}
const Location: React.FC<LocationProps> = ({ title, subTitle, src, links }) => {
  return (
    <SectionWithContainer>
      <div className="w-full flex flex-col gap-4 md:gap-16">
        <SectionTitleSubTitle
          title={title}
          subTitle={subTitle}
          subTitleClassName="text-dark"
          textCenter
        />
        <div className="w-full md:aspect-[4/1.5] aspect-[16/9] relative border border-light rounded-2xl overflow-hidden">
          <LazyLoadedMap src={src} />
        </div>
        <ul className="flex max-lg:flex-col items-center gap-2 mt-auto">
          {links?.map((link, index) => (
            <li key={index} className="flex items-center justify-center w-full gap-1">
              <OnlyButton
                className={`raleway bg-secondary text-white hover:box-shadow flex items-center gap-1 rounded-lg py-3 px-6 font-semibold`}
              >
                {link.name}
              </OnlyButton>
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default Location;
