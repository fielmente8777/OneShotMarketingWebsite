import { JSX } from "react";

export interface CommonProps {
  title: string;
  subTitle: string;
  desc?: string;
  services: {
    title: string;
    desc: string;
    image?: {
      src: string;
      alt: string;
    };
    icon?: JSX.Element;
    href?: string;
  }[];
  links?: {
    name: string;
    href: string;
  }[];
}

export interface BannerProps {
  title?: string;
  subTitle?: string;
  description?: string;
  src: string;
  images?: string[];
}