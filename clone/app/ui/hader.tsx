import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 bg-white w-full">
      <div className="container flex justify-between items-center h-24 m-auto px-44">
        <div>
          <h5 className="text-xs text-gray-800">전화상담문의</h5>
          <h3 className="text-2xl font-bold text-indigo-600">02·479·4050</h3>
        </div>
        <h1 className="text-4xl font-bold">경일IT 아카데미</h1>
        <div className="h-full relative w-[20rem]">
          <Image
            src={"/main_hd_btn4.png"}
            alt="main_hd_btn4.png"
            fill
            objectFit="contain"
          />
        </div>
      </div>
      <div></div>
    </header>
  );
};
