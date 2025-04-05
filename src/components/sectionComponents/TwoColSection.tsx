import Image from "next/image";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import SectionWithContainer from "./SectionWithContainer";
import { LinkButton } from "../buttons";

export interface TwoColSectionProps {
  title: string;
  subTitle: string;
  desc: string[];
  src: string;
  links?: {
    name: string;
    href: string;
  }[];
  btnCss?: boolean;
  index?: number;
  imageClassName?: string;
  aspect?: string;
  btn2Css?: boolean;
}
const TwoColSection: React.FC<TwoColSectionProps> = ({
  title,
  subTitle,
  desc,
  src,
  links,
  btnCss = false,
  index,
  imageClassName = "",
  aspect = "",
  btn2Css = false,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
        <div
          className={`w-full relative ${aspect ? aspect : "md:aspect-[4/2.8] aspect-[4/3.5]"}  ${
            index
              ? index % 2 === 0
                ? "md:order-1 order-2"
                : "md:order-2 order-1"
              : ""
          }`}
        >
          <Image
            src={src}
            alt={title}
            fill
            className={`object-cover rounded-2xl ${imageClassName}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className={`flex flex-col gap-4 w-full ${index !== undefined && index % 2 === 0 ? "md:order-2 order-1" : "md:order-1 order-2"} md:gap-6`}
        >
          <SectionTitleSubTitle
            title={title}
            subTitle={subTitle}
            subTitleClassName="text-dark md:pe-4"
          />
          {desc.map((item, index) => (
            <p
              key={index}
              className="heading4 text-dark"
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          ))}
          <ul className="flex max-lg:flex-col items-center md:gap-8 gap-6 mt-auto">
            {links?.map((link, index) => (
              <li key={index} className="flex items-center gap-1">
                <LinkButton
                  href={link.href}
                  className={`raleway  ${index === 0 ? `${btnCss ? "bg-dark " : "bg-secondary"} text-white hover:box-shadow flex items-center gap-1 rounded-lg py-3 px-6` : `${btn2Css ? "text-secondary " : "text-dark"}  underline underline-offset-4 hover:text-primary`} font-semibold`}
                >
                  {link.name}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TwoColSection;
