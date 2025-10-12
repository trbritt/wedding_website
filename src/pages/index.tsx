import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the WeddingWelcome component with SSR disabled
// This allows us to use browser-only features like window
const WeddingWelcomeDynamic = dynamic(() => import("@/components/WeddingWelcome"), {
  ssr: false,
});

const Home: NextPage = () => {
  return <WeddingWelcomeDynamic />;
};

export default Home;
