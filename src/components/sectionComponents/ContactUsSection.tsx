"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Form } from "../forms";
import SliderSwip from "../SliderSwip";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import SectionWithContainer from "./SectionWithContainer";
import { TestimonialCard } from "../Cards";
import { BtnPrev } from "@/data/icons";

export interface ContactUsSectionProps {
  title: string;
  subTitle: string;
  desc: string[];
  testimonial: {
    name: string;
    desc: string;
    rating: number;
  }[];
}

const ContactUsSection: React.FC<ContactUsSectionProps> = ({
  title,
  subTitle,
  desc,
  testimonial,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-6 grid-cols-1 gap-4 md:gap-6">
        <div className={`flex flex-col gap-4 col-span-4 w-full`}>
          <SectionTitleSubTitle
            title={title}
            subTitle={subTitle}
            subTitleClassName="text-dark md:pe-4"
          />
          {desc.map((item, index) => (
            <p
              key={index}
              className="heading4 text-dark"
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          ))}
          <div className="w-full relative">
            <SliderSwip
              data={testimonial}
              slidesPerView={1}
              spaceBetween={2}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
              }}
              classNameSwiper="w-full"
            >
              {(item) => <TestimonialCard {...item} />}
            </SliderSwip>
            <div className="absolute right-5 bottom-5 flex gap-2 items-center justify-center z-10">
              <button className="testimonial-prev ">
                <BtnPrev className="w-10 aspect-square hover:scale-105 active:scale-95" />
              </button>
              <button className="testimonial-next">
                <BtnPrev className="w-10 aspect-square rotate-180 hover:scale-105 active:scale-95" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full col-span-2">
          <Form />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUsSection;
