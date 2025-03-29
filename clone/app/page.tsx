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
import Footer from "./ui/footer";

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
      <div className="sm:pt-[145px] lg:pt-[160px] pt-[97px] min-h-screen">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Footer />
      </div>
    </div>
  );
}
