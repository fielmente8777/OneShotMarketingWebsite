import {
  Beauty,
  Clothing,
  Hotel,
  Immigration,
  PerformanceMarketing,
  Restaurant,
  SearchEngineOptimization,
  SocialMediaManagement,
  WebDevelopment,
} from "./icons";
import { imagesLink } from "./links";

export const homePageData = {
  bannnerData: {
    title: "boost your business with",
    subTitle: "One Shot Marketing",
    description:
      "Unlock your brand’s potential with digital strategies that deliver results.",
    src: "",
    images: [""],
  },
  trustedTopBrands: {
    title: "Trusted by Top Brands",
    images: [
      {
        src: imagesLink + "inc.webp",
        alt: "inc",
      },
      {
        src: imagesLink + "meta.webp",
        alt: "meta",
      },
      {
        src: imagesLink + "micro.webp",
        alt: "microsoft",
      },
      {
        src: imagesLink + "amazon.webp",
        alt: "amazon",
      },
      {
        src: imagesLink + "google.webp",
        alt: "google",
      },
    ],
  },
  featuredServices: {
    title: "Featured Services",
    subTitle: `Enhance Your Brand's Success <br /> with Our Digital Marketing Solutions!`,
    desc: "From crafting a captivating brand identity to designing engaging digital experiences and formulating effective marketing strategies, we elevate your brand's presence, drive customer engagement, and fuel business growth.",
    services: [
      {
        title: "Web Development",
        desc: "Create a stunning website that captivates and drives results with us.",
        image: {
          src: "",
          alt: "",
        },
        icon: <WebDevelopment />,
      },
      {
        title: "Search Engine Optimization",
        desc: "Boost your website's visibility and drive traffic with SEO services.",
        image: {
          src: "",
          alt: "",
        },
        icon: <SearchEngineOptimization />,
      },
      {
        title: "Performance Marketing",
        desc: "Maximize ROI with Performance Marketing with measurable results.",
        image: {
          src: "",
          alt: "",
        },
        icon: <PerformanceMarketing />,
      },
      {
        title: "Social Media Management",
        desc: "Enhance your social media presence with expert management.",
        image: {
          src: "",
          alt: "",
        },
        icon: <SocialMediaManagement />,
      },
    ],
    links: [
      {
        name: "Explore All Industry Services",
        href: "",
      },
      {
        name: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
  experience: {
    title: "8+ Years of Experience",
    subTitle: `Data Driven, <b>Award Winning</b>  Digital Marketing <b>Agency.</b>`,
    desc: [
      `One Shot Marketing delivers results-driven digital marketing solutions to elevate your brand. Our expert team specializes in SEO, performance marketing, social media management, and content creation, tailoring strategies for measurable growth. We focus on maximizing ROI and helping businesses succeed in the digital world.`,
      `<b>Partner with One Shot Marketing, Canada and let’s achieve success together.</b>`,
    ],
    src: imagesLink + "im1.webp",
    images: [""],
    links: [
      {
        name: "About Us",
        href: "",
      },
      {
        name: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
  industries: {
    title: "Industries We Serve",
    subTitle: `<strong>Diverse Solutions</strong> for a Wide Range of <b>Industries!</b>`,
    services: [
      {
        title: "HOTEL",
        desc: "Boost hotel bookings with expert digital marketing.",
        image: {
          src: "",
          alt: "",
        },
        icon: <Hotel />,
        href: "/industries-we-serve/hotel-industry",
      },
      {
        title: "RESTAURANT",
        desc: "Increase restaurant visibility with targeted digital marketing.",
        image: {
          src: "",
          alt: "",
        },
        icon: <Restaurant />,
        href: "/industries-we-serve/restaurant-industry",
      },
      {
        title: "IMMIGRATION",
        desc: "Boost immigration services with effective digital marketing.",
        image: {
          src: "",
          alt: "",
        },
        icon: <Immigration />,
        href: "/industries-we-serve/immigration-industry",
      },
      {
        title: "BEAUTY",
        desc: "Elevate beauty brand awareness with digital marketing.",
        image: {
          src: "",
          alt: "",
        },
        icon: <Beauty />,
        href: "/industries-we-serve/beauty-industry",
      },
      {
        title: "CLOTHING",
        desc: "Boost clothing sales with effective digital marketing.",
        image: {
          src: "",
          alt: "",
        },
        icon: <Clothing />,
        href: "/industries-we-serve/clothing-industry",
      },
    ],
    links: [
      {
        name: "Get a FREE quote!",
        href: "",
      },
    ],
  },
  featuredClient: {
    title: "FEATURED CLIENT WORK",
    subTitle: `<b>Highlighting</b> Impactful Projects that Delivered <b>success.</b>`,
    desc: ["At One Shot Marketing, we take pride in delivering tailored digital marketing solutions that make a difference."],
    src: imagesLink + "im2.webp",
    images: [""],
    links: [
      {
        name: "Get a FREE quote!",
        href: "",
      },
    ],
  },
  contactUs: {
    title: "Contact Us",
    subTitle: `<strong>Let's Talk!</strong> We'd love to hear from you.`,
    desc: "",
    ref: "",
    testimonial: [
      {
        name: "",
        desc: "",
      },
    ],
  },
};
