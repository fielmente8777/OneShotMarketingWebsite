import { FooterLinks, SocialLinks } from "@/data/links";
import { SectionWithContainer } from "../sectionComponents";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max_screen bg-primary text-white">
      <SectionWithContainer>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-36 w-full">
          <div className="w-full flex justify-center flex-col items-center gap-6">
            <Link href="/">
              <Image src="/logo2.png" alt="logo" width={123.2} height={64} />
            </Link>
            <p className="heading4 text-center">
              One Shot Marketing delivers results-driven digital marketing
              solutions to elevate your brand.{" "}
            </p>
            <ul className="w-full flex justify-center items-center gap-4">
              {SocialLinks.map((link, index) => (
                <li key={index} className="">
                  <Link
                    href={link.href}
                    target="_blank"
                    className="hover:text-white hover:box-shadow active:scale-95 duration-300 transition-all ease-in-out text-primary bg-white w-10 rounded aspect-square hover:bg-secondary flex justify-center items-center"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {FooterLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h2 className="text-secondary text-lg capitalize">
                {link.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {link.links?.map((sublink, index) => (
                  <li key={index}>
                    <Link
                      href={sublink.href}
                      className={`hover:text-secondary ${link.title.toLowerCase() === "contact" ? "" : "capitalize"}`}
                    >
                      {sublink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-dark !py-4">
        <div className="flex max-lg:flex-col  max-lg:justify-center justify-between items-center">
          <div className="flex max-lg:flex-col justify-center items-center gap-2">
            <p className="text-center">
              © {currentYear} One Shot Marketing, Canada
            </p>
            <p className="text-center">•  All rights reserved</p>
            {/* <p className="text-center">
              • Design & Developed by{" "}
              <Link href="/https://eazotel.com" className="font-bold">
                Eazotel
              </Link>
            </p> */}
          </div>
          <ul className="flex max-lg:flex-col justify-center items-center gap-2">
            <li className="">
              <Link
                href="/privacy-policy"
                className="capitalize hover:text-secondary description1"
              >
                Privacy policy
              </Link>
            </li>
            <li className="">•</li>
            <li className="">
              <Link href="/terms-and-conditions" className="capitalize hover:text-secondary description1">terms & conditions</Link>
            </li>
          </ul>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
