import Image from "next/image";
import { Section } from "../sectionComponents";
import { BannerProps } from "@/@types/type";

const Banner2: React.FC<BannerProps> = ({ src }) => {
  return (
    <Section className="!pt-0">
      <div className="w-full relative md:aspect-[4/1.7] aspect-[4/3.5]">
        <Image src={src} alt="banner" fill className="object-cover" />
      </div>
    </Section>
  );
};

export default Banner2;
