"use client";
import Image from "next/image";
import { Container } from "../sectionComponents";
import Link from "next/link";
import { NaveLinks } from "@/data/links";
import { DropDownIcon, OutlinePhone } from "@/data/icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="max_screen">
      <Container>
        <nav className="flex items-center justify-between py-3">
          <div className="">
            <Link href={"/"} className="flex items-center">
              <Image
                src="/logo.png"
                alt="one shot logo"
                width={123.2}
                height={64}
                priority={true}
                quality={100}
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
                      <span className="group-hover:rotate-180 duration-300 transition-all ease-in-out">
                        <DropDownIcon />
                      </span>
                    )}
                  </Link>
                  {link.subLinks && (
                    <span className="nav-1">
                      {link.subLinks.map((subLink, index) => {
                        return (
                          <>
                            <span className="relative group nav-2" key={index}>
                              <Link
                                href={subLink.href ? subLink.href : "#"}
                                className={`w-full text-nowrap py-2 px-4 flex items-center gap-1 group capitalize text-light font-semibold description1 hover:bg-gray-200 ${pathName === subLink.href ? "bg-gray-200" : ""}`}
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
                                        <span className="" key={nestedIndex}>
                                          <Link
                                            href={
                                              nestedSubLink.href
                                                ? nestedSubLink.href
                                                : "#"
                                            }
                                            className={`w-full text-nowrap py-2 px-4 flex items-center text-light font-semibold description1 gap-1 group capitalize hover:bg-gray-200 ${pathName === subLink.href ? "bg-gray-200" : ""}`}
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
            className="px-4 py-2 hover:box-shadow flex items-center gap-1 border border-primary bg-white text-primary rounded-lg hover:bg-primary hover:text-white duration-300 transition-all ease-in-out"
          >
            <span className="">
              <OutlinePhone className="fill-current stroke-currentColor w-7 aspect-square" />
            </span>
            438-855-4446
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
