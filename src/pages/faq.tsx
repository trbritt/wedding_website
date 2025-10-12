import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the FAQ component with SSR disabled
const FAQPageDynamic = dynamic(() => import("@/components/FAQPage"), {
  ssr: false,
});

const FAQ: NextPage = () => {
  return <FAQPageDynamic />;
};

export default FAQ;