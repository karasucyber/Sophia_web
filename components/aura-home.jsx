"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

import UILayer from "./ui-layer";
import { experiencePages } from "../lib/products";

const Experience = dynamic(() => import("./experience"), {
  ssr: false
});

export default function AuraHome() {
  const scrollRef = useRef(null);

  return (
    <main className="relative h-screen overflow-hidden bg-[#F6F1EE] text-[#201917]">
      <Experience pages={experiencePages} scrollRef={scrollRef} />
      <UILayer scrollRef={scrollRef} />
    </main>
  );
}
