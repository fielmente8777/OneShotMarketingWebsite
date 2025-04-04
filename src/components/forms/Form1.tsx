"use client";
import { useMemo, useRef, useState } from "react";
import { OnlyButton } from "../buttons";
import useClickOutside from "@/hooks/useClickOutside";
import {
  CallIcon,
  DropDownIcon,
  HotelIcon,
  MailIcon,
  MessageIcon,
  UserIcon,
} from "@/data/icons";

const Form1 = () => {
  const [extend, setExtend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const industries = useMemo(
    () => [
      "select Industry",
      "Hotel Industry",
      "Restaurant Industry",
      "Immigration Industry",
      "Beauty Industry",
      "Clothing Industry",
      "other Industry",
    ],
    []
  );

  const [selected, setSelected] = useState(industries[0]);

  useClickOutside(formRef, () => {
    if (extend) {
      setExtend(false);
    }
  });
  useClickOutside(dropDownRef, () => {
    if (isOpen) {
      setIsOpen(false);
      setSelected(industries[0]);
    }
  });
  return (
    <form
      className={`w-full grid ${extend ? "grid-cols-6 gap-y-4" : "grid-cols-7"} text-white transition-all duration-500 ease-in-out transform ${
        extend ? "scale-y-105" : "scale-100"
      } bg-dark p-2 rounded-lg shadow-xl`}
      onClick={() => setExtend(true)}
      ref={formRef}
    >
      <div className="col-span-2 border-r border-light flex items-center justify-center gap-2 w-full py-3 px-4">
        <label htmlFor="name">
          <UserIcon />
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="w-full bg-transparent text-white placeholder:text-white rounded-lg  focus:outline-none outline-none"
        />
      </div>
      <div className="col-span-2 border-r border-light flex items-center justify-center gap-2 w-full py-3 px-4">
        <label htmlFor="phone">
          <CallIcon />
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          className="w-full bg-transparent text-white placeholder:text-white rounded-lg focus:outline-none outline-none"
        />
      </div>
      <div className="col-span-2 w-full flex items-center justify-center gap-2 py-3 px-4">
        <label htmlFor="email">
          <MailIcon />
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full bg-transparent text-white placeholder:text-white rounded-lg focus:outline-none outline-none"
        />
      </div>
      <div
        className={`col-span-2 border-r border-light ${extend ? "block" : "hidden"}`}
      >
        <div className="w-full relative" ref={dropDownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="w-full h-full p-3  text-left flex items-center bg-clr2  justify-between gap-3"
          >
            <span className="flex items-center justify-center gap-2">
              <HotelIcon
                fill="#fff"
                className="fill-white w-10 aspect-square"
              />
              <span className="uppercase text-white text-xs font-medium">
                {selected}
              </span>
            </span>
            <DropDownIcon
              fill="#fff"
              className={`${isOpen ? "rotate-180" : ""} fill-white transition-all duration-300 ease-in-out`}
            />
          </button>
          <div
            className={`absolute top-full pt-4 left-0 right-0 shadow-lg rounded-lg z-10 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-60 opacity-100 pointer-events-auto"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            {industries.map((industry, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setSelected(industry);
                  setIsOpen(false);
                }}
                className={`w-full px-4 bg-dark text-nowrap py-2 border-b border-clr6 text-left uppercase text-sm font-medium hover:text-clr2 hover:border-clr2 transition-colors duration-300 ease-in-out ${
                  selected === industry ? "text-clr2 border-clr2" : ""
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`col-span-2  ${extend ? "w-full flex items-center justify-center gap-2 py-3 px-4" : "hidden"}`}
      >
        <label htmlFor="message">
          <MessageIcon fill="#fff" className="fill-white w-10 aspect-square" />
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows={1}
          className="w-full bg-transparent text-white placeholder:text-white focus:outline-none outline-none resize-none"
        ></textarea>
      </div>
      <OnlyButton
        Props={{ type: "submit" }}
        className={`${extend ? "col-span-2 ms-1" : "col-span-1"} bg-secondary hover:bg-white hover:text-primary flex items-center justify-center py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-[1.01]`}
      >
        Get a FREE quote!
      </OnlyButton>
    </form>
  );
};

export default Form1;
