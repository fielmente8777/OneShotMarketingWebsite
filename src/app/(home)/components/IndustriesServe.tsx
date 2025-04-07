"use client";
import { CommonProps } from "@/@types/type";
import {
  OnlyButton,
  SectionTitleSubTitle,
  SectionWithContainer,
  SliderSwip,
} from "@/components";
import ServiceCard2 from "@/components/Cards/ServiceCard2";

const IndustriesServe: React.FC<CommonProps> = ({
  title,
  subTitle,
  services,
  links,
}) => {
  return (
    <SectionWithContainer sectionId="industries" sectionClassName="bg-bg2">
      <div className="w-full flex flex-col items-center justify-center gap-4 lg:gap-10">
        <SectionTitleSubTitle title={title} subTitle={subTitle} textCenter />
        <div className="lg:grid grid-cols-5 hidden gap-4">
          {services.map((service, index) => (
            <ServiceCard2 key={index} {...service} level={4} />
          ))}
        </div>
        <div className="lg:hidden block w-full">
          <SliderSwip
            data={services}
            slidesPerView={1}
            spaceBetween={22}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
            }}
            classNameSwiper="w-full "
            classNameSwiperSlide="p-1"
          >
            {(item) => <ServiceCard2 {...item} level={4} />}
          </SliderSwip>
        </div>
        <ul className="flex items-center justify-center gap-4">
          {links?.map((item, index) => (
            <li key={index}>
              <OnlyButton
                // href={item.href}
                className={`${index === 0 ? "bg-secondary px-4 py-2 md:px-6 md:py-3 rounded hover:box-shadow" : "underline underline-offset-4 hover:text-secondary"} font-semibold text-white decoration1 text-center`}
              >
                {item.name}
              </OnlyButton>
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default IndustriesServe;
