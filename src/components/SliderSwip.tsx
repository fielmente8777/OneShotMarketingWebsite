"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";

import React, { ReactNode } from "react";

interface Props<T> {
  children: (item: T) => ReactNode;
  classNameSwiper?: string;
  classNameSwiperSlide?: string;
  data: T[];
  slidesPerView?: number;
  spaceBetween?: number;
  [key: string]: unknown;
}

const SliderSwip = <T,>({
  children,
  classNameSwiper = "",
  classNameSwiperSlide = "",
  data,
  slidesPerView = 1,
  spaceBetween = 0,
  ...props
}: Props<T>) => {
  return (
    <Swiper
      {...props}
      className={`${classNameSwiper} mySwiper`}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className={`${classNameSwiperSlide}`}>
          {children(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderSwip;
