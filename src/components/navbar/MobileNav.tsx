"use client";
import { DropDownIcon } from "@/data/icons";
import { NaveLinks } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface MobileNavProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileNav: React.FC<MobileNavProps> = ({ mobileMenu, setMobileMenu }) => {
  const [openDropDown, setOpenDropDown] = useState<number | null>(null);
  const [openSubDropDown, setOpenSubDropDown] = useState<number | null>(null);
  const pathName = usePathname();
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 transition-all duration-300 ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="w-full h-full relative">
        <button
          onClick={() => setMobileMenu(false)}
          className="absolute top-8 right-4 z-20 cursor-pointer"
        >
          <AiOutlineClose size={25} color="#183f62" />
        </button>
        <div className="w-full h-full bg-white py-4 ps-4">
          <nav className="flex flex-col gap-2 h-full w-full  font-semibold text-primary">
            <div className="mb-4">
              <Link
                href={"/"}
                className="flex items-center relative md:h-[4rem] h-[2.5rem] md:aspect-[4/1] aspect-[3/1.5]"
              >
                <Image
                  src="/logo.png"
                  alt="one shot logo"
                  priority={true}
                  quality={100}
                  fill
                />
              </Link>
            </div>
            <ul className="flex flex-col gap-4 h-[100vh] overflow-y-scroll pe-3">
              {NaveLinks.map((link, index) => {
                return (
                  <li key={index} className="flex flex-col ">
                    <span className="flex items-center justify-between">
                      <Link
                        href={link.href ? link.href : "/"}
                        onClick={() => setMobileMenu(false)}
                        className="w-4/5"
                      >
                        {link.name}
                      </Link>

                      {link.subLinks && (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDropDown(
                              openDropDown === index ? null : index
                            )
                          }
                          className="flex items-center gap-2 w-1/5 justify-center"
                        >
                          <span
                            className={
                              openDropDown === index ? "rotate-180" : ""
                            }
                          >
                            <DropDownIcon />
                          </span>
                        </button>
                      )}
                    </span>

                    {link.subLinks && openDropDown === index && (
                      <span className="flex flex-col gap-2 ">
                        {link.subLinks.map((subLink, subIndex) => (
                          <span key={subIndex} className="flex flex-col gap-2">
                            <span className="flex items-center justify-between">
                              <Link
                                href={subLink.href ? subLink.href : "/"}
                                onClick={() => {
                                  setMobileMenu(false);
                                  setOpenSubDropDown(null);
                                }}
                                className={`w-4/5 ${pathName === subLink.href ? "text-secondary" : ""} capitalize text-sm`}
                              >
                                {subLink.name}
                              </Link>
                              {subLink.subLinks && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setOpenSubDropDown(
                                      openSubDropDown === subIndex
                                        ? null
                                        : subIndex
                                    )
                                  }
                                  className="flex items-center gap-2 w-1/5 justify-center"
                                >
                                  <DropDownIcon />
                                </button>
                              )}
                            </span>
                            {subLink.subLinks &&
                              openSubDropDown === subIndex && (
                                <span className="flex flex-col gap-3">
                                  {subLink.subLinks.map(
                                    (subSubLink, subSubIndex) => (
                                      <Link
                                        key={subSubIndex}
                                        href={
                                          subSubLink.href
                                            ? subSubLink.href
                                            : "/"
                                        }
                                        onClick={() => {
                                          setMobileMenu(false);
                                          setOpenSubDropDown(null);
                                        }}
                                        className={`w-5/6 ${pathName === subSubLink.href ? "text-secondary" : ""} capitalize text-sm`}
                                      >
                                        {subSubLink.name}
                                      </Link>
                                    )
                                  )}
                                </span>
                              )}
                          </span>
                        ))}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
