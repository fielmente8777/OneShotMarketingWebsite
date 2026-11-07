"use client";
import dynamic from "next/dynamic";

// The chatbot is not needed for the first paint; load it in its own chunk
// after the page has hydrated so it never delays the main content.
const RenderChatBot = dynamic(() => import("./RenderChatBot"), { ssr: false });

const LazyChatBot = () => <RenderChatBot />;

export default LazyChatBot;
