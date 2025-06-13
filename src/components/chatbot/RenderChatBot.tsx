"use client";
import React from "react";
import ChatbotWidget from "./ChatbotWidget";
import axios from "axios";
import { usePathname } from "next/navigation";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  [key: string]: string; // For additional dynamic fields
}

const RenderChatBot = () => {
  const pathName = usePathname();
  const welcomeMessage = `Welcome to One Shot Marketing, How can I help you today?`;
  const thankYouMessage = `Thank you so much for filling up the details, one of our representative will speak to you as soon as possible!`;

  const messageFlows = [
    { key: "name", question: "What's your Name?", type: "text" },
    { key: "phone", question: "What's your Phone Number?", type: "number" },
    { key: "email", question: "What's your Email ?", type: "email" },
    // { key: "check-in", question: "Check-in date!", type: "date" },
    // { key: "check-out", question: "Check-out date!", type: "date" },
    // { key: "number of guest", question: "Number of guest!", type: "text" },
  ];

  const handleSumbit = async (formData: Record<string, string | string[]>) => {
    // Extract the known fields
    const { name, email, phone, ...otherFields } = formData;
    const description = Object.entries(otherFields)
      .map(([key, value]) => `${key}: ${value}`)
      .join(",");

    const checkInDate = formData["check-in"];
    const checkOutDate = formData["check-out"];
    const guest = formData["number of guest"];
    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "oneshotmarketing",
          Contact: `${phone}`,
          email: `${email}`,
          Description: description,
          Name: `${name}`,
          Remark: "",
          Subject: null,
          check_in: `${checkInDate}`,
          check_out: `${checkOutDate}`,
          numbers_of_guest: `${guest}`,
          created_from: "Eazobot",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {pathName !== "/thank-you/" && (
        <ChatbotWidget
          onSubmit={handleSumbit}
          messages={welcomeMessage}
          finalMessage={thankYouMessage}
          messageFlows={messageFlows}
          title={`One Shot Marketing`}
          theme={"#183F62"}
          openInterval={6000}
          logo={"/favicon.ico"}
        />
      )}
    </>
  );
};

export default RenderChatBot;
