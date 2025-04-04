import Image from "next/image";
import { Container, Section } from "../sectionComponents";
import { Form1 } from "../forms";

interface BannerProps {
  title: string;
  subTitle: string;
  description: string;
  src: string;
  images?: string[];
}
const Banner: React.FC<BannerProps> = ({
  title,
  subTitle,
  description,
  src,
}) => {
  return (
    <Section className="relative !pt-0">
      <div className="relative w-full md:aspect-[4/1.7] aspect-[4/3.5]">
        <Image src={src} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <Container>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="">
                <h1 className="text-xl font-semibold text-secondary text-center uppercase">
                  {title}
                </h1>
                <h2 className="largeHeading font-bold text-white text-center">
                  {subTitle}
                </h2>
              </div>
              <div className="w-full max-w-7xl lg:block hidden">
                <Form1 />
              </div>
              <p className="heading3 text-white">{description}</p>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
