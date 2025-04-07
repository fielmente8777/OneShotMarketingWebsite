"use client";
import {
  OnlyButton,
  SectionTitleSubTitle,
  SectionWithContainer,
  ServiceCard3,
  SliderSwip,
} from "@/components";

interface Props {
  title: string;
  subTitle: string;
  cards: {
    title: string;
    desc: string;
    src: string;
    images: string[];
  }[];
  links: {
    name: string;
    href: string;
  }[];
}

const WeServe: React.FC<Props> = ({ title, subTitle, cards, links }) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 md:gap-14 w-full">
        <SectionTitleSubTitle title={title} subTitle={subTitle} textCenter />
        <div className="lg:flex hidden flex-wrap w-full justify-center gap-x-6 gap-y-10">
          {cards.map((card, index) => (
            <div className="max-w-[38rem] w-full" key={index}>
              <ServiceCard3 {...card} level={4} />
            </div>
          ))}
        </div>
        <div className="lg:hidden block w-full">
          <SliderSwip
            data={cards}
            slidesPerView={1}
            spaceBetween={22}
            breakpoints={{
              768: {
                slidesPerView: 2,
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
            {(card) => <ServiceCard3 {...card} level={4} />}
          </SliderSwip>
        </div>
        <ul className="flex max-lg:flex-col items-center gap-2 mt-auto">
          {links?.map((link, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-full gap-1"
            >
              <OnlyButton
                className={`raleway bg-secondary text-white hover:box-shadow flex items-center gap-1 rounded-lg py-3 px-6 font-semibold`}
              >
                {link.name}
              </OnlyButton>
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default WeServe;
