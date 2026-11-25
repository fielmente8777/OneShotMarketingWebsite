"use client";
import { ChangeEvent, useId, useMemo, useRef, useState } from "react";
import OnlyButton from "@/components/buttons/OnlyButton";
import useClickOutside from "@/hooks/useClickOutside";
import {
  DropDownIcon,
  HotelIcon,
  MailIcon,
  MessageIcon,
  UserIcon,
} from "@/data/icons";
import useContactSubmit from "@/hooks/useContactSubmit";
import {
  describePhoneLength,
  formatPhone,
  getEmailError,
  getNameError,
  getPhoneError,
  sanitizePhoneInput,
} from "@/data/countries";
import CountryCodeSelect, { useCountry } from "./CountryCodeSelect";

const Form1 = () => {
  const uid = useId();
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
  const [country, setCountry] = useCountry();
  const { submit, isSubmitting, isSubmitted, isBusy } = useContactSubmit();
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    const value =
      name === "phone" ? sanitizePhoneInput(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Once an error is showing, re-check live so it clears as soon as it's fixed
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: fieldError(name, value) }));
    }
  };

  const fieldError = (name: string, value: string) =>
    name === "name"
      ? getNameError(value)
      : name === "email"
        ? getEmailError(value)
        : name === "phone"
          ? getPhoneError(country, value)
          : "";

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value) setError((prev) => ({ ...prev, [name]: fieldError(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {
      name: getNameError(formData.name),
      email: getEmailError(formData.email),
      phone: getPhoneError(country, formData.phone),
      industriesName:
        selected === industries[0] ? "Please select your industry." : "",
    };

    setError(newErrors);
    // The industry picker lives in the collapsed part of the form
    if (newErrors.industriesName) setExtend(true);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isBusy) return; // a lead is already being sent

    if (!validateForm()) {
      return;
    }

    const ok = await submit({
      name: formData.name,
      email: formData.email,
      phone: formatPhone(country, formData.phone),
      description: `Industry Name: ${selected}, Message: ${formData.message.trim()}`,
    });

    // On failure the visitor's input is kept so they can simply retry
    if (ok) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelected(industries[0]);
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
      noValidate
      className={`w-full md:grid flex flex-col max-lg:gap-2 ${
        extend ? "grid-cols-6 md:gap-y-4 max-lg:mb-8" : "grid-cols-7"
      } text-white transition-all duration-500 ease-in-out transform ${
        extend ? "scale-y-105" : "scale-100"
      } bg-dark p-2 rounded-lg shadow-xl`}
      onClick={() => setExtend(true)}
      ref={formRef}
    >
      <div className="col-span-2 md:border-r border-light flex flex-col gap-2 w-full py-3 px-4">
        <div className="flex items-center gap-2 w-full h-10">
          <label htmlFor={`${uid}-name`}>
            <UserIcon />
          </label>
          <input
            type="text"
            name="name"
            id={`${uid}-name`}
            aria-label="Full Name"
            aria-invalid={!!error.name}
            value={formData.name}
            placeholder="Full Name"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-transparent text-white placeholder:text-white rounded-lg focus:outline-none outline-none"
          />
        </div>
        {error.name && (
          <span className="text-red-500 text-sm">{error.name}</span>
        )}
      </div>

      <div className="col-span-2 md:border-r border-light flex flex-col gap-2 w-full py-3 px-4">
        <div className="flex items-center gap-2 w-full h-10">
          <CountryCodeSelect
            variant="dark"
            className="-ms-2"
            value={country}
            onChange={(c) => {
              setCountry(c);
              // Re-check against the newly chosen country's length
              setError((prev) => ({
                ...prev,
                phone: formData.phone ? getPhoneError(c, formData.phone) : "",
              }));
            }}
          />
          <input
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            name="phone"
            id={`${uid}-phone`}
            aria-label={`Phone Number, ${describePhoneLength(country)}`}
            aria-invalid={!!error.phone}
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-transparent text-white placeholder:text-white no-spinner rounded-lg focus:outline-none outline-none"
          />
        </div>
        {error.phone && (
          <span className="text-red-500 text-sm">{error.phone}</span>
        )}
      </div>

      <div className="col-span-2 w-full flex flex-col gap-2 py-3 px-4">
        <div className="flex items-center gap-2 w-full h-10">
          <label htmlFor={`${uid}-email`}>
            <MailIcon />
          </label>
          <input
            type="email"
            name="email"
            id={`${uid}-email`}
            aria-label="Email Id"
            aria-invalid={!!error.email}
            value={formData.email}
            placeholder="Email Id"
            onChange={handleChange}
            onBlur={handleBlur}
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
            aria-haspopup="listbox"
            aria-expanded={isOpen}
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
        <div className="flex items-center gap-2 w-full h-10">
          <label htmlFor={`${uid}-message`}>
            <MessageIcon
              fill="#fff"
              className="fill-white w-10 aspect-square"
            />
          </label>
          <textarea
            name="message"
            id={`${uid}-message`}
            aria-label="Message (Optional)"
            value={formData.message}
            placeholder="Message (Optional)"
            rows={1}
            onChange={handleChange}
            className="w-full bg-transparent text-white placeholder:text-white focus:outline-none outline-none resize-none"
          />
        </div>
      </div>

      <OnlyButton
        Props={{
          type: "submit",
          disabled: isBusy,
          "aria-busy": isSubmitting,
        }}
        className={`${extend ? "col-span-2 ms-1" : "col-span-1"} ${
          isSubmitted
            ? "bg-green-500"
            : "bg-secondary hover:bg-white hover:text-primary"
        } flex items-center justify-center py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-[1.01] transition-all disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none ${
          isSubmitting ? "opacity-80 hover:bg-secondary hover:text-white" : ""
        }`}
      >
        {isSubmitting ? (
          <>
            <span
              aria-hidden="true"
              className="border-t-2 border-primary w-6 h-6 rounded-full animate-spin"
            />
            <span className="sr-only">Submitting...</span>
          </>
        ) : isSubmitted ? (
          "Thank You!"
        ) : (
          "Get a FREE quote!"
        )}
      </OnlyButton>
    </form>
  );
};

export default Form1;
