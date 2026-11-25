"use client";

import React, { useId, useMemo, useRef, useState } from "react";
import {
  describePhoneLength,
  formatPhone,
  getEmailError,
  getNameError,
  getPhoneError,
  sanitizePhoneInput,
} from "@/data/countries";
import { DropDownIcon } from "@/data/icons";
import CountryCodeSelect, { useCountry } from "./CountryCodeSelect";
import useClickOutside from "@/hooks/useClickOutside";
import useContactSubmit from "@/hooks/useContactSubmit";

const Form = ({
  setOpenForm,
  id = "contact",
}: {
  setOpenForm?: React.Dispatch<React.SetStateAction<boolean>>;
  /** DOM id of the <form>; pass null when the page already has an element with this id */
  id?: string | null;
}) => {
  const uid = useId();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [country, setCountry] = useCountry();
  const { submit, isSubmitting, isSubmitted, isBusy } = useContactSubmit({
    onSuccess: () => setOpenForm?.(false),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const setFieldError = (field: string, message: string) =>
    setErrors((prev) => ({ ...prev, [field]: message }));

  const [isOpen1, setIsOpen1] = useState(false);

  const dropDownRef3 = useRef<HTMLDivElement | null>(null);

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

  useClickOutside(dropDownRef3, () => isOpen1 && setIsOpen1(false));

  const [selected, setSelected] = useState(industries[0]);

  const getIndustryError = (value: string) =>
    value === industries[0] ? "Please select your industry." : "";
  const getMessageError = (value: string) =>
    value.trim() ? "" : "Please tell us a little about your enquiry.";

  // Errors appear on blur / submit; once shown they update live as the user types.
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = sanitizePhoneInput(e.target.value);
    setUserPhone(value);
    if (errors.phone) setFieldError("phone", getPhoneError(country, value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    if (errors.email) setFieldError("email", getEmailError(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isBusy) return; // a lead is already being sent

    const newErrors = {
      name: getNameError(userName),
      phone: getPhoneError(country, userPhone),
      industry: getIndustryError(selected),
      email: getEmailError(userEmail),
      message: getMessageError(userMessage),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    const ok = await submit({
      name: userName,
      email: userEmail,
      phone: formatPhone(country, userPhone), // e.g. "+1 4165551234"
      description: `Industry Name: ${selected}, Message: ${userMessage.trim()}`,
    });

    if (ok) {
      setUserName("");
      setUserEmail("");
      setUserMessage("");
      setUserPhone("");
      setSelected(industries[0]);
    }
  };

  const formData = [
    {
      tag: "input",
      type: "text",
      name: "name",
      placeholder: "Your full name*",
      required: true,
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
        if (errors.name) setFieldError("name", getNameError(e.target.value));
      },
      onBlur: () => setFieldError("name", getNameError(userName)),
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      name: "phone",
      placeholder: "Your Phone*",
      required: true,
      content: (
        <div className="flex w-full gap-2 text-base">
          <CountryCodeSelect
            id={`${uid}-countryCode`}
            value={country}
            onChange={(c) => {
              setCountry(c);
              // Re-check against the newly chosen country's length
              if (userPhone || errors.phone)
                setFieldError("phone", userPhone ? getPhoneError(c, userPhone) : "");
            }}
          />
          <input
            type="tel"
            inputMode="numeric"
            id={`${uid}-phone`}
            name="phone"
            placeholder={`Mobile number* (${describePhoneLength(country)})`}
            aria-label={`Mobile number, ${describePhoneLength(country)}`}
            aria-invalid={!!errors.phone}
            autoComplete="tel-national"
            required
            value={userPhone}
            onChange={handlePhoneChange}
            onBlur={() =>
              userPhone && setFieldError("phone", getPhoneError(country, userPhone))
            }
            className="w-full bg-transparent border-l border-light px-2 py-3 placeholder:text-[#4C4C4C] text-black no-spinner appearance-none focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "div",
      name: "industry",
      placeholder: "Select Industry*",
      required: true,
      content: (
        <div className="w-full relative" ref={dropDownRef3}>
          <button
            onClick={() => setIsOpen1(!isOpen1)}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen1}
            aria-label={`Industry: ${selected}`}
            className="w-full h-full p-3  text-left flex items-center bg-clr2  justify-between gap-3"
          >
            <span className="capitalize text-light description1">
              {selected}
            </span>
            <DropDownIcon
              fill="#fff"
              className={`${isOpen1 ? "rotate-180" : ""} fill-white transition-all duration-300 ease-in-out`}
            />
          </button>
          <div
            className={`absolute top-full left-0 right-0 overflow-y-scroll hide-scrollbar shadow-lg rounded-lg z-10 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen1
                ? "max-h-32 opacity-100 pointer-events-auto "
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            {industries.map((industry, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setSelected(industry);
                  setIsOpen1(false);
                  setFieldError("industry", getIndustryError(industry));
                }}
                className={`w-full px-4 bg-white text-nowrap py-2 border-b border-clr6 text-left uppercase text-sm font-medium hover:text-clr2 hover:border-clr2 transition-colors duration-300 ease-in-out ${
                  selected === industry ? "text-clr2 border-clr2" : ""
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      tag: "input",
      type: "email",
      name: "email",
      placeholder: "Email ID*",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
      onBlur: () =>
        userEmail && setFieldError("email", getEmailError(userEmail)),
    },
    {
      tag: "textarea",
      type: "text",
      name: "message",
      placeholder: "Tell us something about your enquiry!*",
      required: true,
      value: userMessage,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
        if (errors.message)
          setFieldError("message", getMessageError(e.target.value));
      },
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col h-full gap-4 bg-primary max-md:px-4 p-6 max-md:mt-6 text-base rounded-2xl w-full"
      id={id ?? undefined}
    >
      <h3 className="text-xl lg:text-[2rem]/[2.5rem] font-normal text-white">
        Get a Free Quote!
      </h3>

      {formData.map((data, index) => (
        <div key={index} className="flex flex-col gap-1 ">
          <div className="flex gap-2 bg-white rounded-lg">
            {data.tag === "div"
              ? data.content
              : React.createElement(data.tag, {
                  id: `${uid}-${data.name}`,
                  type: data.tag === "textarea" ? undefined : data.type,
                  name: data.name,
                  value: data.value,
                  onChange: data.onChange,
                  onBlur: data.onBlur,
                  "aria-invalid": !!errors[data.name],
                  placeholder: data.placeholder,
                  "aria-label": data.placeholder.replace(/\*$/, ""),
                  required: data.required,
                  autoComplete: "off",
                  spellCheck: "false",
                  rows: data.tag === "textarea" ? 3 : undefined,
                  className:
                    "w-full bg-transparent no-spinner p-3 resize-none placeholder:text-[#4C4C4C] focus:outline-none valid:outline-blue-primary invalid:outline-Saffron-primary",
                })}
          </div>
          {errors[data.name] && (
            <p role="alert" className="text-sm text-red-500 mt-2">
              {errors[data.name]}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isBusy}
        aria-busy={isSubmitting}
        className="raleway bg-secondary text-white hover:bg-secondary/80 flex justify-center items-center gap-2 rounded-lg py-3 font-semibold disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-secondary"
      >
        {isSubmitting && (
          <span
            aria-hidden="true"
            className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
          />
        )}
        {isSubmitted ? "Submitted ✓" : isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
