import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the ThingsToDoPage component with SSR disabled
const ThingsToDoPageDynamic = dynamic(() => import("@/components/ThingsToDoPage"), {
  ssr: false,
});

const ThingsToDo: NextPage = () => {
  return <ThingsToDoPageDynamic />;
};

export default ThingsToDo;