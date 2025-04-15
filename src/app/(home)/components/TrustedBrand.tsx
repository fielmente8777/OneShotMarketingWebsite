"use client";
import { SectionWithContainer, SliderSwip } from "@/components";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface Props {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}
const TrustedBrand: React.FC<Props> = ({ title, images }) => {
  return (
    <SectionWithContainer
      sectionClassName="relative md:!pb-36 md:after:content-[''] md:after:rotate-90 md:after:absolute md:after:top-3 after:left-[-3.5rem] after:w-[30rem] after:z-[-1] after:h-full after:opacity-40 after:bg-cover after:bg-no-repeat after:bg-[url('/bg2.PNG')]
    md:before:absolute before:top-[1rem] before:right-[0rem] before:w-[19rem] before:h-[25rem] before:opacity-100 before:bg-cover before:bg-no-repeat before:bg-[url('/Vector.svg')]
    "
    >
      <div className="w-full rounded-[2rem] box-shadow2  flex flex-col items-center justify-center gap-8 md:py-12 md:px-20 p-6">
        <h2 className="text-center text-primary font-semibold heading raleway">
          {title}
        </h2>
        <div className="w-full lg:grid hidden grid-cols-5 gap-14">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[3/1.04] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-contain`}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:hidden block">
          <SliderSwip
            data={images}
            slidesPerView={2.5}
            spaceBetween={5}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                centeredSlides: true,
              },
            }}
            classNameSwiper="mySwiper w-full"
          >
            {(item) => (
              <div className="relative aspect-[3/1.04] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-contain`}
                />
              </div>
            )}
          </SliderSwip>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TrustedBrand;
