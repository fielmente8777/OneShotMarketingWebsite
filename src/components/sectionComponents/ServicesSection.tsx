"use client";
import { CommonProps } from "@/@types/type";
import SectionWithContainer from "./SectionWithContainer";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import { LinkButton, ServiceCard, SliderSwip } from "@/components";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BtnNext, BtnPrev } from "@/data/icons";

const ServicesSection: React.FC<CommonProps> = ({
  title,
  subTitle,
  links,
  services,
}) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center justify-center gap-8 py-10 w-full">
        <SectionTitleSubTitle
          title={title}
          subTitle={subTitle}
          subTitleClassName=""
          textCenter
        />
        <div className="w-full relative">
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
            }}
            loop={true}
            speed={1000}
            navigation={{
              prevEl: ".service-prev",
              nextEl: ".service-next",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
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
            {(item) => <ServiceCard {...item} level={4} />}
          </SliderSwip>
          <button className="absolute service-prev top-1/2  -translate-y-1/2 -left-2 z-10">
            <BtnPrev width={36} />
          </button>
          <button className="absolute service-next top-1/2  -translate-y-1/2 -right-2 z-10">
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
