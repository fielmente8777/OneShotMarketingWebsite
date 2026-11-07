import Image from "next/image";
import Section from "@/components/sectionComponents/Section";
import { BannerProps } from "@/@types/type";

const Banner2: React.FC<BannerProps> = ({ src }) => {
  return (
    <Section className="!py-0">
      <div className="w-full relative md:aspect-[4/1.8] aspect-[4/3.5]">
        <Image
          src={src ? src : ""}
          alt="banner"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </Section>
  );
};

export default Banner2;
