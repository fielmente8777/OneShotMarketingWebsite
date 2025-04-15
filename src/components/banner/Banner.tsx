import Image from "next/image";
import { Container, Section } from "../sectionComponents";
import { Form1 } from "../forms";
import { BannerProps } from "@/@types/type";

const Banner: React.FC<BannerProps> = ({
  title,
  subTitle,
  description,
  src,
}) => {
  return (
    <Section className="relative !py-0">
      <div className="relative w-full md:aspect-[4/1.7] aspect-[4/2.5]">
        <Image
          src={src}
          alt={title ? title : "banner"}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <Container>
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              <div className="w-full">
                <h1 className="md:text-xl text-lg font-semibold text-secondary text-center uppercase">
                  {title}
                </h1>
                <h2 className="largeHeading font-bold text-white text-center">
                  {subTitle}
                </h2>
              </div>
              <div className="w-full max-w-[73rem] lg:block hidden">
                <Form1 />
              </div>
              <p className="heading3 text-white text-center max-w-4xl tracking-wide w-full max-lg:hidden">{description}</p>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
