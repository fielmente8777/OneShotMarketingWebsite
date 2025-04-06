import { JSX } from "react";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./icons";


export const imagesLink ="https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/OneShotMarketingWebsite/"

interface NveLinksProps {
  name: string;
  href?: string;
  icon?: string;
  subLinks?: NveLinksProps[];
}

interface FooterLinksProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

interface SocialLinksProps {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const NaveLinks: NveLinksProps[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Industries we Serve",
    href: "/industries-we-serve",
    subLinks: [
      {
        name: "hotel industry",
        href: "/industries-we-serve/hotel-industry",
      },
      {
        name: "restaurant Industry",
        href: "/industries-we-serve/restaurant-industry",
      },
      {
        name: "immigration Industry",
        href: "/industries-we-serve/immigration-industry",
      },
      {
        name: "beauty Industry",
        href: "/industries-we-serve/beauty-industry",
      },
      {
        name: "clothing Industry",
        href: "/industries-we-serve/clothing-industry",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      {
        name: "hotel industry",
        // href: "/services/hotel-industry",
        subLinks: [
          {
            name: "performance marketing",
            href: "/services/hotel-industry/performance-marketing",
          },
          {
            name: "social media marketing",
            href: "/services/hotel-industry/social-media-marketing",
          },
          {
            name: "website design & development",
            href: "/services/hotel-industry/website-design-and-development",
          },
          {
            name: "search engine optimization",
            href: "/services/hotel-industry/search-engine-optimization",
          },
          {
            name: "OTA listing - optimization and management",
            href: "/services/hotel-industry/OTA-listings-and-management",
          },
        ],
      },
      {
        name: "restaurant Industry",
        // href: "/services/restaurant-industry",
        subLinks: [
          {
            name: "website design & development",
            href: "/services/restaurant-industry/website-design-and-development",
          },
          {
            name: "search engine optimization",
            href: "/services/restaurant-industry/search-engine-optimization",
          },
          {
            name: "social media marketing",
            href: "/services/restaurant-industry/social-media-marketing",
          },
          {
            name: "performance marketing",
            href: "/services/restaurant-industry/performance-marketing",
          },
        ],
      },
      {
        name: "immigration Industry",
        // href: "/services/immigration-industry",
        subLinks: [
          {
            name: "website design & development",
            href: "/services/immigration-industry/website-design-and-development",
          },
          {
            name: "search engine optimization",
            href: "/services/immigration-industry/search-engine-optimization",
          },
          {
            name: "social media marketing",
            href: "/services/immigration-industry/social-media-marketing",
          },
          {
            name: "performance marketing",
            href: "/services/immigration-industry/performance-marketing",
          },
        ],
      },
      {
        name: "beauty Industry",
        // href: "/services/beauty-industry",
        subLinks: [
          {
            name: "website design & development",
            href: "/services/beauty-industry/website-design-and-development",
          },
          {
            name: "performance marketing",
            href: "/services/beauty-industry/performance-marketing",
          },
          {
            name: "CRM",
            href: "/services/beauty-industry/crm",
          },
          {
            name: "social media marketing",
            href: "/services/beauty-industry/social-media-marketing",
          },
        ],
      },
      {
        name: "clothing Industry",
        // href: "/services/clothing-industry",
        subLinks: [
          {
            name: "website design & development",
            href: "/services/clothing-industry/website-design-and-development",
          },
          {
            name: "search engine optimization",
            href: "/services/clothing-industry/search-engine-optimization",
          },
          {
            name: "CRM",
            href: "/services/clothing-industry/crm",
          },
          {
            name: "social media marketing",
            href: "/services/clothing-industry/social-media-marketing",
          },
          {
            name: "performance marketing",
            href: "/services/clothing-industry/performance-marketing",
          },
        ],
      },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const FooterLinks: FooterLinksProps[] = [
  {
    title: "company",
    links: [
      {
        name: "about us",
        href: "/about-us",
      },
      {
        name: "Industries we Serve",
        href: "/industries-we-serve",
      },
      {
        name: "services",
        href: "/services",
      },
      {
        name: "contact us",
        href: "/contact-us",
      },
      {
        name: "our work",
        href: "/our-work",
      },
    ],
  },
  {
    title: "industries solution",
    links: [
      {
        name: "hotel digital marketing",
        href: "/industries-we-serve/hotel-industry",
      },
      {
        name: "restaurant digital marketing",
        href: "/industries-we-serve/restaurant-industry",
      },
      {
        name: "beauty digital marketing",
        href: "/industries-we-serve/beauty-industry",
      },
      {
        name: "clothing digital marketing",
        href: "/industries-we-serve/clothing-industry",
      },
    ],
  },
  {
    title: "contact",
    links: [
      {
        name: "3064 Hurontario St. Mississauga, Ontario",
        href: "/contact-us",
      },
      {
        name: "148 St Surrey, BC V3S 3E8, Canada",
        href: "/contact-us",
      },
      {
        name: "+1 (438) 855-4446",
        href: "/tel:+14388554446",
      },
      {
        name: "info@oneshotmarketing.ca",
        href: "/mailto:info@oneshotmarketing.ca",
      },
    ],
  },
];

export const SocialLinks: SocialLinksProps[] = [
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    icon: <FacebookIcon />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    icon: <InstagramIcon />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
    icon: <LinkedInIcon />,
  },
];
