"use client";

import { Header } from "./ui/hader";
import { Menubar_r } from "./ui/menubar_r";

export default function Home() {
  return (
    <div className="font-[--font-Noto-sans]">
      <Header />
      <Menubar_r />
      <div className="w-full h-[40rem] bg-red-300"></div>
      <div className="w-full h-[40rem] bg-white"></div>
      <div className="w-full h-[40rem] bg-blue-300"></div>
    </div>
  );
}
