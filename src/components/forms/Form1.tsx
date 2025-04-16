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
  const industries = useMemo(
    () => [
      "Select Industry",
      "Hotel Industry",
      "Restaurant Industry",
      "Immigration Industry",
      "Beauty Industry",
      "Clothing Industry",
      "Other Industry",
    ],
    []
  );

  const [selected, setSelected] = useState(industries[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    industriesName: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      industriesName: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
      isValid = false;
    }

    if (selected === "Select Industry") {
      newErrors.industriesName = "Please select an industry";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "sumit",
          email: formData.email,
          Name: formData.name,
          Contact: formData.phone,
          Description: `Industry Name: ${selected}, Message: ${formData.message}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSelected(industries[0]);
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useClickOutside(formRef, () => {
    if (extend) {
      setExtend(false);
    }
  });

  useClickOutside(dropDownRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full md:grid flex flex-col max-lg:gap-2 ${
        extend ? "grid-cols-6 md:gap-y-4 max-lg:mb-8" : "grid-cols-7"
      } text-white transition-all duration-500 ease-in-out transform ${
        extend ? "scale-y-105" : "scale-100"
      } bg-dark p-2 rounded-lg shadow-xl`}
      onClick={() => setExtend(true)}
      ref={formRef}
    >
      <div className="col-span-2 md:border-r border-light flex flex-col gap-2 w-full py-3 px-4">
        <div className="flex items-center justify-center gap-2 w-full">
          <label htmlFor="name">
            <UserIcon />
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder:text-white rounded-lg focus:outline-none outline-none"
          />
        </div>
        {error.name && (
          <span className="text-red-500 text-sm">{error.name}</span>
        )}
      </div>

      <div className="col-span-2 md:border-r border-light flex flex-col gap-2 w-full py-3 px-4">
        <div className="flex items-center justify-center gap-2 w-full">
          <label htmlFor="phone">
            <CallIcon />
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder:text-white no-spinner rounded-lg focus:outline-none outline-none"
          />
        </div>
        {error.phone && (
          <span className="text-red-500 text-sm">{error.phone}</span>
        )}
      </div>

      <div className="col-span-2 w-full flex flex-col gap-2 py-3 px-4">
        <div className="flex items-center justify-center gap-2 w-full">
          <label htmlFor="email">
            <MailIcon />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email Id"
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder:text-white rounded-lg focus:outline-none outline-none"
          />
        </div>
        {error.email && (
          <span className="text-red-500 text-sm">{error.email}</span>
        )}
      </div>

      <div
        className={`col-span-2 md:border-r border-light ${extend ? "block" : "hidden"}`}
      >
        <div className="w-full relative" ref={dropDownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="w-full h-full p-3 text-left flex items-center bg-clr2 justify-between gap-3"
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
                  setError((prev) => ({ ...prev, industriesName: "" }));
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
        {error.industriesName && (
          <span className="text-red-500 text-sm px-4">
            {error.industriesName}
          </span>
        )}
      </div>

      <div
        className={`col-span-2 ${extend ? "w-full flex flex-col gap-2 py-3 px-4" : "hidden"}`}
      >
        <div className="flex items-center justify-center gap-2 w-full">
          <label htmlFor="message">
            <MessageIcon
              fill="#fff"
              className="fill-white w-10 aspect-square"
            />
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            placeholder="Message (Optional)"
            rows={1}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder:text-white focus:outline-none outline-none resize-none"
          />
        </div>
      </div>

      <OnlyButton
        Props={{ type: "submit", disabled: isSubmitting }}
        className={`${extend ? "col-span-2 ms-1" : "col-span-1"} ${
          submitSuccess
            ? "bg-green-500"
            : "bg-secondary hover:bg-white hover:text-primary"
        } flex items-center justify-center py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-[1.01] transition-all`}
      >
        {isSubmitting ? (
          <span className="border-t-2 border-primary w-6 h-6 rounded-full animate-spin " />
        ) : submitSuccess ? (
          "Thank You!"
        ) : (
          "Get a FREE quote!"
        )}
      </OnlyButton>
    </form>
  );
};

export default Form1;
