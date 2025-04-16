"use client";
import Image from "next/image";
import { Container } from "../sectionComponents";
import Link from "next/link";
import { NaveLinks } from "@/data/links";
import { DropDownIcon, OutlinePhone } from "@/data/icons";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathName = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);
  return (
    <header className="max_screen">
      <Container>
        <nav className="flex items-center justify-between py-3">
          <div className="max-lg:block hidden">
            <button className="lg:hidden" onClick={() => setMobileMenu(true)}>
              <AiOutlineMenu size={25} color="#183f62" />
            </button>
            <MobileNav mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          </div>
          <div className="">
            <Link
              href={"/"}
              className="flex relative md:h-[3.5rem] h-[2.5rem]  md:aspect-[4/1.8] aspect-[3/1.5]"
            >
              <Image
                src="/logo.png"
                alt="one shot logo"
                fill
              />
            </Link>
          </div>
          <ul className="lg:flex hidden item-center gap-10">
            {NaveLinks?.slice(1, NaveLinks.length).map((link, index) => {
              // const id = index + 1;
              return (
                <li key={index} className="relative nav">
                  <Link
                    href={link.href ? link.href : "#"}
                    className="relative text-nowrap py-2 capitalize flex items-center gap-1 text-light font-semibold description1"
                  >
                    {link.name}
                    <span className="span-border"></span>
                    {link.subLinks && (
                      <span className="icon duration-300 transition-all ease-in-out">
                        <DropDownIcon />
                      </span>
                    )}
                  </Link>
                  {link.subLinks && (
                    <span className="nav-1">
                      {link.subLinks.map((subLink, index) => {
                        return (
                          <>
                            <span
                              className="relative group nav-2"
                              key={index + 1}
                            >
                              <Link
                                href={subLink.href ? subLink.href : "#"}
                                className={`w-full text-nowrap py-2 px-4 flex items-center gap-1 group capitalize text-light font-semibold description1  ${pathName === subLink.href ? "bg-primary !text-white" : ""}`}
                              >
                                {subLink.name}
                                {subLink.subLinks && (
                                  <span className="group-hover:rotate-90 -rotate-90 duration-300 transition-all ease-in-out">
                                    <DropDownIcon />
                                  </span>
                                )}
                              </Link>
                              {subLink.subLinks && (
                                <span className="nav-link">
                                  {subLink.subLinks?.map(
                                    (nestedSubLink, nestedIndex) => {
                                      return (
                                        <span
                                          className=""
                                          key={nestedIndex + 2}
                                        >
                                          <Link
                                            href={
                                              nestedSubLink.href
                                                ? nestedSubLink.href
                                                : "#"
                                            }
                                            className={`w-full text-nowrap py-2 px-4 flex items-center text-light font-semibold description1 gap-1 group capitalize hover:bg-gray-200 ${pathName === nestedSubLink.href ? "bg-primary !text-white" : ""}`}
                                          >
                                            {nestedSubLink.name}
                                          </Link>
                                        </span>
                                      );
                                    }
                                  )}
                                </span>
                              )}
                            </span>
                          </>
                        );
                      })}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href={"tel:438-855-4446"}
            target="_blank"
            className="md:px-4 md:py-2 md:hover:box-shadow flex items-center gap-1 md:border border-primary bg-white text-primary rounded-lg hover:bg-primary hover:text-white duration-300 transition-all ease-in-out"
          >
            <span className="">
              <OutlinePhone className="fill-current stroke-currentColor md:w-7 aspect-square" />
            </span>
            <span className="md:block hidden"> 438-855-4446</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
