"use client";
import Image from "next/image";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import SectionWithContainer from "./SectionWithContainer";
import { LinkButton } from "../buttons";
import SliderSwip from "../SliderSwip";

export interface TwoColSectionProps {
  title: string;
  subTitle: string;
  desc: string[];
  desc2?: string[];
  number?: string;
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
  featuredIn?: {
    title: string;
    images: string[];
  };
  isRounded?: boolean;
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
  featuredIn,
  isRounded = true,
  desc2,
  number,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 items-center">
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
            className={`object-cover ${isRounded && "rounded-2xl"}  ${imageClassName}`}
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
          {featuredIn && (
            <div className="flex flex-col gap-4">
              <h2 className="heading3 font-semibold text-secondary">
                {featuredIn.title}
              </h2>
              <div className="lg:flex hidden gap-8">
                {featuredIn.images.map((image, index) => (
                  <Image
                    src={image}
                    alt={featuredIn.title}
                    key={index}
                    width={160}
                    height={100}
                    className="object-contain"
                  />
                ))}
              </div>

              <div className="w-full max-lg:block hidden">
                <SliderSwip data={featuredIn.images}
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                classNameSwiperSlide="relative aspect-[4/.92] h-[3.5rem] w-full"
                >
                  {(src) => (
                    <Image
                      src={src}
                      alt={featuredIn.title}
                      key={index}
                      fill
                      className="object-contain"
                    />
                  )}
                </SliderSwip>
              </div>
            </div>
          )}
          {links && (
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
          )}

          {desc2 && (
            <div className="flex max-lg:flex-col items-center gap-4">
              <h2 className="md:text-4xl text-3xl inter font-semibold text-primary">
                {number}
              </h2>

              <div className="flex flex-col gap-4">
                {desc2.map((item, index) => (
                  <p
                    key={index}
                    className="heading4 text-primary font-medium"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TwoColSection;
