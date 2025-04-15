"use client";
import { ChangeEvent, useMemo, useRef, useState } from "react";
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
import axios from "axios";

const Form1 = () => {
  const [extend, setExtend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (userPhone.length !== 10) {
    //   setErrorMessage("Phone number must be exactly 10 digits.");
    //   return;
    // }

    // if (!emailRegex.test(userEmail)) {
    //   setEmailErrorMessage("Please enter a valid email address.");
    //   return;
    // }

    try {
      // setFormRes(true);
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "sumit", // Replace with your actual domain value
          // Domain: "",
          email: formData?.email,
          Name: formData?.name,
          Contact: `${formData?.phone}`, // Combine country code and phone number
          Description: `Industry Name ${selected}, Message: ${formData?.message},`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // if (data.Status) {
      //   setFormRes(true);
      //   setUserName("");
      //   setUserEmail("");
      //   setUserMessage("");
      //   setUserPhone("");
      //   // setCountryCode("+91"); // Reset country code
      //   setFormRes(false);
      //   // router.push("/thank-you/");
      // } else {
      //   setFormRes(false);
      //   alert("Something went wrong!");
      // }
    } catch (error) {
      console.log(error);
    }
  };

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
      onSubmit={handleSubmit}
      className={`w-full md:grid flex flex-col max-lg:gap-2 ${extend ? "grid-cols-6 md:gap-y-4 max-lg:mb-8" : "grid-cols-7"} text-white transition-all duration-500 ease-in-out transform ${
        extend ? "scale-y-105" : "scale-100"
      } bg-dark p-2 rounded-lg shadow-xl`}
      onClick={() => setExtend(true)}
      ref={formRef}
    >
      <div className="col-span-2 md:border-r border-light flex items-center justify-center gap-2 w-full py-3 px-4">
        <label htmlFor="name">
          <UserIcon />
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full bg-transparent text-white placeholder:text-white rounded-lg  focus:outline-none outline-none"
        />
      </div>

      <div className="col-span-2 md:border-r border-light flex items-center justify-center gap-2 w-full py-3 px-4">
        <label htmlFor="phone">
          <CallIcon />
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full bg-transparent text-white placeholder:text-white no-spinner rounded-lg focus:outline-none outline-none"
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
          placeholder="Email Id"
          onChange={handleChange}
          className="w-full bg-transparent text-white placeholder:text-white rounded-lg focus:outline-none outline-none"
        />
      </div>

      <div
        className={`col-span-2 md:border-r border-light ${extend ? "block" : "hidden"}`}
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
          onChange={handleChange}
          className="w-full bg-transparent text-white placeholder:text-white focus:outline-none outline-none resize-none"
        />
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
