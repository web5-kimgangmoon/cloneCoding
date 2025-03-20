"use client";

import { Section1 } from "./ui/body_sections/section1";
import { Header } from "./ui/hader";
import { Menubar_r } from "./ui/menubar_r";

export default function Home() {
  return (
    <div className="font-[--font-Noto-sans]">
      <Header />
      <Menubar_r />

      <div className="pt-[207px] sm:pt-[159px]">
        <Section1 />
        <div className="w-full h-[40rem] bg-red-300"></div>
        <div className="w-full h-[40rem] bg-white"></div>
        <div className="w-full h-[40rem] bg-blue-300"></div>
      </div>
    </div>
  );
}
