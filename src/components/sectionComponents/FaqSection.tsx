import Image from "next/image";
import SectionWithContainer from "./SectionWithContainer";
import { Accordion } from "../Cards";
import { FaqSectionProps } from "@/@types/type";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import { DropDownIcon } from "@/data/icons";



const FaqSection: React.FC<FaqSectionProps> = ({ title, src, faqs: items }) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-6 grid-cols-1 gap-4 md:gap-6">
        <div className={`w-full col-span-4 flex flex-col gap-8`}>
          <SectionTitleSubTitle subTitle={title} />
          <div className="flex flex-col w-full">
            {items.map((item, index) => (
              <Accordion {...item} key={index} index={index} className={`${index === 0 ? "border-y" : "border-b"} border-dark py-4 md:py-6`} icon={<DropDownIcon className="w-8 aspect-square" />}/>
            ))}
          </div>
        </div>
        <div className={` col-span-2 relative md:aspect-[4/4.5] w-full aspect-[4/3.5]`}>
          <Image
            src={src}
            alt={title}
            fill
            className="object-contain object-top rounded-2xl "
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FaqSection;
