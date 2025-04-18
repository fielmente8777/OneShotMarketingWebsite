"use client";
import { CommonProps } from "@/@types/type";
import SectionWithContainer from "./SectionWithContainer";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import { LinkButton, SliderSwip } from "@/components";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BtnNext, BtnPrev } from "@/data/icons";
import ServiceCard4 from "../Cards/ServiceCard4";

const ServicesSection: React.FC<CommonProps> = ({
  title,
  subTitle,
  links,
  services,
  noOslider = 4,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col items-center justify-center gap-8 py-10 w-full">
        <SectionTitleSubTitle
          title={title}
          subTitle={subTitle}
          subTitleClassName="text-white"
          textCenter
        />
        <div className="w-full relative service-slider">
          <SliderSwip
            data={services}
            slidesPerView={1}
            spaceBetween={22}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".service-pagination",
            }}
            loop={true}
            speed={1000}
            navigation={{
              prevEl: ".service-prev",
              nextEl: ".service-next",
            }}
            breakpoints={{
              1024: {
                slidesPerView: noOslider,
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
            }}
            classNameSwiper="w-full"
            classNameSwiperSlide="p-2"
          >
            {(item) => <ServiceCard4 {...item} level={4} />}
          </SliderSwip>
          <div className="service-pagination flex items-center justify-center gap-1 mt-4"></div>
          <button className="absolute service-prev md:top-[40%] top-[38%] -left-2 z-10">
            <BtnPrev width={36} />
          </button>
          <button className="absolute service-next md:top-[40%] top-[38%] -right-2 z-10">
            <BtnNext width={36} />
          </button>
        </div>
        <ul className="flex items-center justify-center gap-4">
          {links?.map((item, index) => (
            <li key={index}>
              <LinkButton
                href={item.href}
                className={`${index === 0 ? "bg-secondary px-5 py-3 rounded hover:box-shadow" : "underline underline-offset-4 hover:text-secondary"} font-semibold text-white decoration1 text-center`}
              >
                {item.name}
              </LinkButton>
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default ServicesSection;
