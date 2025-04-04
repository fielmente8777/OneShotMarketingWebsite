"use client";
import { SectionWithContainer, SliderSwip } from "@/components";
import Image from "next/image";

interface Props {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}
const TrustedBrand: React.FC<Props> = ({ title, images }) => {
  return (
    <SectionWithContainer sectionClassName="relative !pb-28 after:content-[''] after:rotate-90 after:absolute after:top-3 after:left-[-3.5rem] after:w-[30rem] after:z-[-1] after:h-full after:opacity-40 after:bg-cover after:bg-no-repeat after:bg-[url('/bg2.PNG')]
    before:absolute before:top-3 before:right-[0rem] before:w-[20.5rem] before:h-full before:opacity-100 before:bg-cover before:bg-no-repeat before:bg-[url('/Vector.svg')]
    ">
      <div className="w-full rounded-[2rem] box-shadow2  flex flex-col items-center justify-center gap-8 py-12 px-20">
        <h2 className="text-center text-primary font-semibold heading raleway">
          {title}
        </h2>
        <SliderSwip
          data={images}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          classNameSwiper="mySwiper w-full"
        >
          {(item) => (
            <div className="relative aspect-[3/1.04] w-full">
              <Image src={item.src} alt={item.alt} fill className={`object-contain`} />
            </div>
          )}
        </SliderSwip>
      </div>
    </SectionWithContainer>
  );
};

export default TrustedBrand;
