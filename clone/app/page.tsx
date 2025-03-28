"use client";

import { useEffect } from "react";
import { Section1 } from "./ui/body_sections/section1";
import { Section2 } from "./ui/body_sections/section2";
import Section3 from "./ui/body_sections/section3";
import Section4 from "./ui/body_sections/section4";
import { Section5 } from "./ui/body_sections/section5";
import { Section6 } from "./ui/body_sections/section6";
import { Header } from "./ui/hader";
import { Menubar_r } from "./ui/menubar_r";
import aos from "aos";
import { Section7 } from "./ui/body_sections/section7";
import { Section8 } from "./ui/body_sections/section8";

export default function Home() {
  useEffect(() => {
    aos.init({
      duration: 1200,
      easing: "ease",
      anchorPlacement: "top-center",
    });
  }, []);
  return (
    <div className="">
      <Header />
      <Menubar_r />
      <div className="pt-[207px] sm:pt-[159px] xs:pt-[69px] min-h-screen">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <div className="w-full h-[40rem] bg-red-300"></div>
        <div className="w-full h-[40rem] bg-blue-300"></div>
      </div>
    </div>
  );
}
