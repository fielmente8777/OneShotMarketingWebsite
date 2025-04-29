"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Form } from "../forms";
import SliderSwip from "../SliderSwip";
import SectionTitleSubTitle from "./SectionTitleSubTitle";
import SectionWithContainer from "./SectionWithContainer";
import { TestimonialCard } from "../Cards";
import { BtnNext, BtnPrev, TickIcon } from "@/data/icons";

export interface ContactUsSectionProps {
  title: string;
  subTitle: string;
  desc: string[];
  desc2?: string[];
  number?: string;
  tick?: boolean;
  testimonial?: {
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
  tick = false,
  desc2,
  number,
}) => {
  return (
    <SectionWithContainer
      sectionId="contact"
      sectionClassName={`${
        testimonial
          ? `relative md:!pb-36 md:after:content-[''] md:after:absolute md:after:top-12 after:left-[-3.5rem] after:w-[30rem] after:z-[-1] after:h-full  after:bg-contain after:bg-no-repeat after:bg-[url('/Vector1.png')]  md:before:absolute before:opacity-30 before:bottom-16 before:right-[3.5rem] before:w-[500px] before:aspect-square before:h-full  before:opacity-100 before:z-[-1] before:bg-cover before:bg-no-repeat before:bg-[url('/bg2.png')]`
          : ""
      }`}
    >
      <div className="grid md:grid-cols-6 grid-cols-1 gap-4 md:gap-8">
        <div className={`flex flex-col gap-4 md:col-span-4 col-span-2 w-full`}>
          <SectionTitleSubTitle
            title={title}
            subTitle={subTitle}
            subTitleClassName="text-dark md:pe-4"
          />
          {!tick
            ? desc.map((item: string, index: number) => (
                <p
                  key={index}
                  className="heading4 text-dark"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></p>
              ))
            : desc.map((item: string, index: number) => (
                <p key={index} className="heading4 text-dark flex gap-3">
                  <span>
                    {" "}
                    <TickIcon className="w-4 aspect-square" />
                  </span>{" "}
                  {item}
                </p>
              ))}
          {testimonial && (
            <div className="w-full relative md:mt-4 mt-0">
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
                classNameSwiper="w-full rounded-2xl"
                classNameSwiperSlide="w-full p-1"
              >
                {(item) => <TestimonialCard {...item} />}
              </SliderSwip>
              <div className="absolute right-5 bottom-5 flex gap-2 items-center justify-center z-10">
                <button className="testimonial-prev ">
                  <BtnPrev className="w-10 aspect-square hover:scale-105 active:scale-95" />
                </button>
                <button className="testimonial-next">
                  <BtnNext className="w-10 aspect-square hover:scale-105 active:scale-95" />
                </button>
              </div>
            </div>
          )}
          {desc2 && (
            <div className="flex max-lg:flex-col items-center gap-4">
              <h2 className="md:text-4xl text-3xl inter font-semibold text-primary">
                {number}
              </h2>

              <div className="flex flex-col gap-4">
                {desc2.map((item, index) => (
                  <p
                    key={index}
                    className="heading3 text-primary font-medium"
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></p>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-full col-span-2">
          <Form />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUsSection;
