import {
  Beauty,
  CallIcon,
  Clothing,
  Hotel,
  Immigration,
  LocationOnIcon,
  MailIcon,
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
    src: imagesLink + "bnr1.webp",
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
    desc: [
      "At One Shot Marketing, we take pride in delivering tailored digital marketing solutions that make a difference.",
    ],
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
    subTitle: `<b>Connect</b> with an <b>Expert Today!</b>`,
    desc: [
      "Got questions or ready to get started? We're here to help! Fill out the form, and one of our experts will get in touch with you promptly.",
      `<b>Prefer to speak directly? Call us at <a href="tel:+14388554446">+1 438 855-4446</a></b>`,
    ],
    testimonial: [
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
    ],
  },
};

export const AboutUsPageData = {
  bannnerData: {
    title: "ABOUT US",
    subTitle: "One Shot Marketing",
    description:
      "Unlock your brand’s potential with digital strategies that deliver results.",
    src: imagesLink + "bnr2.webp",
    images: [""],
  },
  featuredIn: {
    title: "Featured In",
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
  aboutUs: {
    title: "ABOUT US",
    subTitle: `<b>Transforming</b> Brands through Expert Digital <b>Marketing.</b>`,
    desc: [
      "One Shot Marketing delivers results-driven digital marketing solutions to elevate your brand. Specializing in SEO, performance marketing, social media management, and content creation, we craft tailored strategies that drive measurable growth and maximize ROI.",
      "With a focus on data-driven insights and innovative tactics, we continuously optimize your online presence to boost traffic, engagement, and conversions. Our customer-centric approach ensures long-term success in the ever-evolving digital landscape.",
    ],
    src: imagesLink + "logoimg.webp",
    images: [""],
    links: [
      {
        name: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
  whyChooseUs: {
    title: "WHY CHOOSE US?",
    subTitle: `<b>Expert Strategies,</b> Proven Results, and <b>Dedication</b> to Your <b> Brand’s Success!</b>`,
    desc: [
      "One Shot Marketing is a trusted name in the digital marketing industry. No more dealing with poor communication, unclear reports, or limited services.",
      "One Shot Marketing is flexible and adaptable. Whether you’re a small startup or an established enterprise, we tailor strategies to fit your unique business needs. We’ll craft a customized marketing plan that aligns perfectly with your goals, no matter the industry.",
    ],
    src: imagesLink + "im6.webp",
    images: [""],
    links: [
      {
        name: "Get a FREE quote!",
        href: "",
      },
    ],
  },
  mileStones: [
    {
      number: "350+",
      title: "Happy Clients",
      desc: "We take pride in helping clients achieve goals, build partnerships, and deliver exceptional, lasting results.",
    },
    {
      number: "8+",
      title: "Years of Experience",
      desc: "Driving growth through innovative digital marketing strategies, delivering measurable results that elevate your brand.",
    },
    {
      number: "300+",
      title: "Websites Designed",
      desc: "Our expertise and innovation have earned industry awards, showcasing our commitment to delivering outstanding digital solutions.",
    },
  ],
  contactUs: {
    title: "Contact Us",
    subTitle: `<b>Connect</b> with an <b>Expert Today!</b>`,
    desc: [
      "Got questions or ready to get started? We're here to help! Fill out the form, and one of our experts will get in touch with you promptly.",
      `<b>Prefer to speak directly? Call us at <a href="tel:+14388554446">+1 438 855-4446</a></b>`,
    ],
    testimonial: [
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
    ],
  },
};
export const IndustriesPageData = {
  bannnerData: {
    title: "INDUSTRIES WE SERVE",
    subTitle: "One Shot Marketing",
    description:
      "Unlock your brand’s potential with digital strategies that deliver results.",
    src: imagesLink + "bnr2.webp",
    images: [""],
  },
  exploreIndustries: {
    title: "EXPLORE INDUSTRIES WE SERVE",
    subTitle: `<b>Empowering</b> a Diverse Range of Industries with Tailored <b>Solutions!</b>`,
    industries: {
      cards: [
        {
          title: "Hotel Industry",
          desc: "Helping hotels stand out in a crowded market with targeted digital marketing strategies. From SEO to social media, we drive bookings and boost online visibility for your property.",
          src: "",
          images: [""],
        },
        {
          title: "Restaurant Industry",
          desc: "Transforming restaurant brands with creative digital marketing solutions that attract diners. We specialize in social media campaigns, online ads, & SEO to drive traffic and increase sales.",
          src: "",
          images: [""],
        },
        {
          title: "Immigration Industry",
          desc: "Elevating immigration brands with targeted digital marketing that reaches the right audience. From engaging social media campaigns and strategic online ads to SEO optimization.",
          src: "",
          images: [""],
        },
        {
          title: "Beauty Industry",
          desc: "Elevating beauty brands with powerful digital marketing strategies that captivate your audience. From influencer partnerships to targeted ads, we boost sales in the beauty.",
          src: "",
          images: [""],
        },
        {
          title: "Clothing Industry",
          desc: "Boosting clothing brands with innovative digital marketing strategies to drive sales and enhance visibility. We specialize in social media, influencer partnerships, and targeted ads.",
          src: "",
          images: [""],
        },
      ],
      links: [
        {
          name: "Get a FREE quote!",
          href: "",
        },
      ],
    },
  },
  featuredClient: {
    title: "FEATURED CLIENT WORK",
    subTitle: `<b>Highlighting</b> Impactful Projects that Delivered <b>success.</b>`,
    desc: [
      "At One Shot Marketing, we take pride in delivering tailored digital marketing solutions that make a difference.",
    ],
    src: imagesLink + "im3.webp",
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
    subTitle: `<b>Connect</b> with an <b>Expert Today!</b>`,
    desc: [
      "Got questions or ready to get started? We're here to help! Fill out the form, and one of our experts will get in touch with you promptly.",
      `<b>Prefer to speak directly? Call us at <a href="tel:+14388554446">+1 438 855-4446</a></b>`,
    ],
    testimonial: [
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
    ],
  },
};
export const ServicePageData = {
  bannnerData: {
    title: "OUR SERVICES",
    subTitle: "One Shot Marketing",
    description:
      "Unlock your brand’s potential with digital strategies that deliver results.",
    src: imagesLink + "bnr2.webp",
    images: [""],
  },
  digitalMarketing: {
    title: "CANADA’S#1 RATED DIGITAL MARKETING AGENCY",
    subTitle: `Unlock Your <b>Brand’s Potential</b> with <b>Digital Solutions.</b>`,
    desc: [
      "With One Shot Marketing, you gain access to top-tier services, streamlined processes, and a dedicated team focused on driving the growth of your business. Our innovative strategies, tailored approach, and commitment to results ensure your brand stands out, attracting more customers and achieving measurable success.",
    ],
    src: imagesLink + "im7.webp",
    images: [""],
    featuredIn: [""],
  },
  services: {
    title: "ALL SERVICES",
    subTitle: `Digital Marketing Services`,
    services: [
      {
        title: "HOTEL INDUSTRY SERVICES",
        desc: [
          "Performance Marketing",
          "Social Media Marketing",
          "Website Design & Development",
          "Search Engine Optimisation",
          "OTA Listing",
        ],
        image: {
          src: "",
          alt: "",
        },
        icon: <Hotel />,
        href: "/industries-we-serve/hotel-industry",
      },
      {
        title: "RESTAURANT INDUSTRY SERVICES",
        desc: [
          "Website Design & Development",
          "Search Engine Optimisation",
          "Social Media Marketing",
          "Performance Marketing",
        ],
        image: {
          src: "",
          alt: "",
        },
        icon: <Restaurant />,
        href: "/industries-we-serve/restaurant-industry",
      },
      {
        title: "IMMIGRATION INDUSTRY SERVICES",
        desc: [
          "Website Design & Development",
          "Search Engine Optimisation",
          "Social Media Marketing",
          "Performance Marketing",
        ],
        image: {
          src: "",
          alt: "",
        },
        icon: <Immigration />,
        href: "/industries-we-serve/immigration-industry",
      },
      {
        title: "BEAUTY INDUSTRY SERVICES",
        desc: [
          "Website Design & Development",
          "Performance Marketing",
          "CRM",
          "Social Media Marketing",
        ],
        image: {
          src: "",
          alt: "",
        },
        icon: <Beauty />,
        href: "/industries-we-serve/beauty-industry",
      },
      {
        title: "CLOTHING INDUSTRY SERVICES",
        desc: [
          "Website Design & Development",
          "Search Engine Optimisation",
          "CRM",
          "Social Media Marketing",
          "Performance Marketing",
        ],
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
    desc: [
      "At One Shot Marketing, we take pride in delivering tailored digital marketing solutions that make a difference.",
    ],
    src: imagesLink + "im3.webp",
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
    subTitle: `<b>Connect</b> with an <b>Expert Today!</b>`,
    desc: [
      "Got questions or ready to get started? We're here to help! Fill out the form, and one of our experts will get in touch with you promptly.",
      `<b>Prefer to speak directly? Call us at <a href="tel:+14388554446">+1 438 855-4446</a></b>`,
    ],
    testimonial: [
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
      {
        name: "IK Bar",
        desc: "One Shot Marketing’s digital marketing services, encompassing website development and social media management, were exceptional. They seamlessly integrated our brand identity into the website design and crafted engaging content for our social media channels.",
        rating: 5,
      },
    ],
  },
};

export const ContactUsPageData = {
  contactUs: {
    title: "Contact Us",
    subTitle: `Let’s <b>Connect -</b> We'd Love to Hear from You!`,
    desc: [
      "Whether you're looking to refresh your brand and website, kick off a new campaign, expand your customer base, or enter a new market, we have the expertise and strategies to help you succeed.",
    ],
    contactInfo: [
      {
        title: "Address",
        desc: [
          "3064 Hurontario St. Mississauga, ON",
          "148 St Surrey, BC V3S 3E8, Canada",
        ],
        icon: <LocationOnIcon />,
      },
      {
        title: "Phone",
        desc: ["+1 (438) 855-4446"],
        icon: <CallIcon className="text-black fill-dark" />,
      },
      {
        title: "Email Id",
        desc: ["info@oneshotmarketing.ca"],
        icon: <MailIcon className="text-black fill-dark" />,
      },
    ],
  },
  location: {
    title: "VIEW ON MAP",
    subTitle: "3064 Hurontario St. Mississauga, <b>Ontario</b>",
    src: "",
    links: [
      {
        name: "Get a FREE quote!",
        href: "",
      },
    ],
  },
};
