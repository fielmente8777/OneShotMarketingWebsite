"use client";
import { CommonProps } from "@/@types/type";
import {
  LinkButton,
  SectionTitleSubTitle,
  SectionWithContainer,
  ServiceCard,
  SliderSwip,
} from "@/components";


const FeaturedServices: React.FC<CommonProps> = ({
  title,
  subTitle,
  desc,
  services,
  links,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary text-white bg-[url('/bg1.PNG')] bg-cover bg-no-repeat bg-center bg-blend-color bg-rotate-90">
      <div className="flex flex-col gap-10 items-center justify-center w-full bg">
        <SectionTitleSubTitle title={title} subTitle={subTitle} textCenter/>
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
          classNameSwiper="w-full"
          classNameSwiperSlide="p-1"
        >
          {(item) => <ServiceCard {...item} level={4} />}
        </SliderSwip>
        <p className="heading4 text-center max-w-6xl w-full">{desc}</p>
        <ul className="flex items-center justify-center gap-4">
          {links?.map((item, index) => (
            <li key={index}>
              <LinkButton
                href={item.href}
                className={`${index === 0 ? "bg-secondary px-4 py-2 rounded hover:box-shadow" : "underline underline-offset-4 hover:text-secondary"} font-semibold text-white decoration1 text-center`}
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

export default FeaturedServices;
