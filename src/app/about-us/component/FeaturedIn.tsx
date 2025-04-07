"use client";
import { SectionWithContainer, SliderSwip } from "@/components";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface FeaturedInProps {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}
const FeaturedIn: React.FC<FeaturedInProps> = ({ title, images }) => {
  return (
    <SectionWithContainer sectionClassName="box-shadow3 lg:py-12">
      <h2 className="text-center text-primary font-semibold heading raleway">
        {title}
      </h2>
      <div className="w-full lg:grid hidden grid-cols-5 gap-4 mt-8">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/.92] h-[3.5rem]">
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
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          classNameSwiper="w-full mt-4"
          classNameSwiperSlide="p-1"
          breakpoints={{
            768: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 22,
            },
          }}
        >
          {(img) => (
            <div className="relative aspect-[4/2.5] h-[3.5rem]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`object-contain`}
              />
            </div>
          )}
        </SliderSwip>
      </div>
    </SectionWithContainer>
  );
};

export default FeaturedIn;
