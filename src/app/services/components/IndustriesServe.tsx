"use client";
import { CommonProps } from "@/@types/type";
import {
  FormPopup,
  OnlyButton,
  SectionTitleSubTitle,
  SectionWithContainer,
  SliderSwip,
} from "@/components";
import ServiceCard5 from "@/components/Cards/ServiceCard5";
import { BtnNext, BtnPrev } from "@/data/icons";
import { useState } from "react";
import { Navigation } from "swiper/modules";

const IndustriesServe: React.FC<CommonProps> = ({
  title,
  subTitle,
  services,
  links,
}) => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <SectionWithContainer sectionClassName="bg-primary text-white bg-[url('/bg1.PNG')] bg-cover bg-no-repeat bg-center bg-blend-color bg-rotate-90">
      <div className="w-full flex flex-col items-center justify-center gap-4 lg:gap-10">
        <SectionTitleSubTitle title={title} subTitle={subTitle} textCenter />

        <div className="block w-full relative">
          <SliderSwip
            data={services}
            slidesPerView={1}
            spaceBetween={22}
            modules={[Navigation]}
            navigation={{
              prevEl: ".service-prev",
              nextEl: ".service-next",
            }}
            loop={true}
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
            {(item) => <ServiceCard5 {...item} level={4} />}
          </SliderSwip>
          <button className="absolute service-prev md:top-[40%] top-[38%] -left-2 z-10 lg:block hidden">
            <BtnPrev width={36} />
          </button>
          <button className="absolute service-next md:top-[40%] top-[38%] -right-2 z-10 lg:block hidden">
            <BtnNext width={36} />
          </button>
        </div>
        <ul className="flex items-center justify-center gap-4">
          {links?.map((item, index) => (
            <li key={index}>
              <OnlyButton
                // href={item.href}
                onclick={() => setOpenForm(true)}
                className={`${index === 0 ? "bg-secondary px-4 py-2 md:px-6 md:py-3 rounded hover:box-shadow" : "underline underline-offset-4 hover:text-secondary"} font-semibold text-white decoration1 text-center`}
              >
                {item.name}
              </OnlyButton>
            </li>
          ))}
        </ul>
      </div>
      <FormPopup openForm={openForm} setOpenForm={setOpenForm} />
    </SectionWithContainer>
  );
};

export default IndustriesServe;
