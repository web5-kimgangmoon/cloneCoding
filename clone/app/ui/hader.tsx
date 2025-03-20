import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { easeIn, motion } from "motion/react";
import clsx from "clsx";
import { Arrow } from "@/public/arrow";

export const Header = () => {
  const [isOpenMenu_sm, setIsOpenMenu_sm] = useState(false);
  return (
    <header className="fixed top-0 left-0 flex flex-col items-center w-full z-40">
      <div className="flex justify-center w-full bg-[#e2ebf6] lg:hidden xs:block px-10">
        <div className="flex items-center h-[48px] w-[90%]">
          <div className="text-4xl font-bold relative w-[36px] h-full">
            <Image
              src={"/award3.png"}
              alt="award3.png"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="pl-3 select-none text-xs font-bold text-indigo-900">
            직업능력의 달 국무총리상 수상
          </div>
        </div>
      </div>
      <TopHeader isSelected={isOpenMenu_sm} setIsSelected={setIsOpenMenu_sm} />
      <BottomHeader />
      <BottomHeader_sm isOpenMenu_sm={isOpenMenu_sm} />
    </header>
  );
};

const TopHeader = ({
  isSelected,
  setIsSelected,
}: {
  isSelected: boolean;
  setIsSelected: (is: boolean) => void;
}) => {
  return (
    <div className="flex justify-center w-full lg:border-b lg:border-gray-300 bg-white">
      <div className="flex justify-between items-center h-[48px] sm:h-[96px] w-[90%] xl:w-[1200px]">
        <div className="lg:block xs:hidden">
          <h5 className="text-xs text-gray-800">전화상담문의</h5>
          <h3 className="text-2xl font-bold text-indigo-600">02·479·4050</h3>
        </div>
        <h1 className="text-4xl font-bold relative w-[160px] sm:w-[250px] h-full">
          <Link href={"/"}>
            <Image
              src={"/kga_logo_black.png"}
              alt="main_hd_btn4.png"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
        </h1>
        <div className="h-full relative lg:w-[250px] flex items-center">
          <Image
            className="lg:block xs:hidden"
            src={"/main_hd_btn4.png"}
            alt="main_hd_btn4.png"
            fill
            style={{ objectFit: "contain" }}
          />
          <MenuBtn isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
      </div>
    </div>
  );
};

const MenuBtn = ({
  isSelected,
  setIsSelected,
}: {
  isSelected: boolean;
  setIsSelected: (is: boolean) => void;
}) => {
  return (
    <button
      className="lg:hidden xs:flex sm:w-[28px] sm:h-[28px] w-[21px] h-[21px] cursor-pointer relative"
      onClick={() => setIsSelected(!isSelected)}
    >
      <div
        className={clsx(
          "absolute bg-black transition-all duration-300",
          isSelected
            ? "sm:top-[-4px] sm:left-[11px] sm:w-[6px] sm:h-[36px] top-[-3px] left-[8px] w-[4.5px] h-[27px] rotate-[45deg]"
            : "top-0 left-0 sm:w-[8px] sm:h-[8px] w-[6px] h-[6px]"
        )}
      />
      <div
        className={clsx(
          "absolute bg-black transition-all duration-300",
          isSelected
            ? "sm:top-[-4px] sm:right-[11px] sm:w-[6px] sm:h-[36px] top-[-3px] right-[8px] w-[4.5px] h-[27px] rotate-[-45deg]"
            : "top-0 right-0 sm:w-[8px] sm:h-[8px] w-[6px] h-[6px]"
        )}
      />
      <div
        className={clsx(
          "absolute bg-black transition-all duration-300",
          isSelected
            ? "sm:bottom-[-4px] sm:left-[11px] sm:w-[6px] sm:h-[36px] bottom-[-3px] left-[8px] w-[4.5px] h-[27px] rotate-[-45deg]"
            : "bottom-0 left-0 sm:w-[8px] sm:h-[8px] w-[6px] h-[6px]"
        )}
      />
      <div
        className={clsx(
          "absolute bg-black transition-all duration-300",
          isSelected
            ? "sm:bottom-[-4px] sm:right-[11px] sm:w-[6px] sm:h-[36px] bottom-[-3px] right-[8px] w-[4.5px] h-[27px] rotate-[45deg]"
            : "bottom-0 right-0 sm:w-[8px] sm:h-[8px] w-[6px] h-[6px]"
        )}
      />
    </button>
  );
};

const BottomHeader = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="w-full hidden lg:block"
      onHoverStart={() => isHover || setIsHover(true)}
      onHoverEnd={() => isHover && setIsHover(false)}
    >
      <nav className="flex justify-center w-full h-[63px] border-b border-gray-300 bg-white">
        <ul className="flex justify-between xl:w-[1200px] w-[90%] h-max">
          {[
            ["모집중인 강좌", "/"],

            ["강좌소개", "/"],

            ["지원제도", "/"],

            ["경일스토리", "/"],

            ["상담신청", "/"],

            ["회사소개", "/"],
          ].map((v, idx) => {
            return <BottomTitle v={v} key={idx} isHover={true} />;
          })}
        </ul>
      </nav>
      <motion.nav
        className="flex justify-center w-full bg-white overflow-hidden"
        initial={{ height: 0 }}
        animate={{
          opacity: isHover ? 100 : 0,
          height: isHover ? "max-content" : 0,
        }}
        transition={{ duration: "0.5" }}
      >
        <ul
          className={clsx(
            "flex justify-between xl:w-[1200px] w-[90%] h-max pb-20"
          )}
        >
          {[
            [
              ["모집강좌", "/"],
              ["모집절차", "/"],
            ],
            [
              ["게임 기획", "/"],
              ["게임 프로그래밍", "/"],
              ["언리얼 엔진", "/"],
              ["온라인 단기 부트캠프", "/"],
              ["온라인캠프", "/"],
              ["게임원화ㆍ그래픽", "/"],
            ],
            [
              ["국민내일배움카드", "/"],
              ["국민취업지원제도", "/"],
              ["K-디지털", "/"],
            ],
            [
              ["경일인터뷰", "/"],
              ["취업현황", "/"],
              ["포트폴리오", "/"],
              ["K-TV", "/"],
            ],
            [
              ["상담신청하기", "/"],
              ["국비지원자격조회", "/"],
            ],
            [
              ["경일의 가치", "/"],
              ["교직원 소개", "/"],
              ["공지사항", "/"],
              ["찾아오시는 길", "/"],
            ],
          ].map((v, idx) => {
            return (
              <li key={idx} className="text-center w-[9rem] p-4 no-wrap">
                {<BottommSubMenuList v={v} />}
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </motion.div>
  );
};

const BottomTitle = ({ v }: { v: string[]; isHover: boolean }) => {
  return (
    <li className="first:text-red-500">
      <Link href={v[1]}>
        <h2
          className={clsx(
            "flex items-center justify-center w-[9rem] h-[63px] text-[1.05rem] font-semibold",
            "hover:text-purple-600 transition-colors duration-300"
          )}
        >
          {v[0]}
        </h2>
      </Link>
    </li>
  );
};

const BottommSubMenuList = ({ v }: { v: string[][] }) => {
  return (
    <ul>
      {v.map((v, idx) => {
        return (
          <li
            key={idx}
            className="py-[0.4rem] text-gray-800 text-sm text-bold hover:underline decoration-purple-600"
          >
            <Link href={v[1]}>{v[0]}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const BottomHeader_sm = ({ isOpenMenu_sm }: { isOpenMenu_sm: boolean }) => {
  const [openIdx, setOpenIdx] = useState(-1);
  useEffect(() => {
    setOpenIdx(-1);
  }, [isOpenMenu_sm]);
  const menu: { title: string[]; subTitle: string[][] }[] = [
    {
      title: ["모집중인 강좌", "/"],
      subTitle: [
        ["모집강좌", "/"],
        ["모집절차", "/"],
      ],
    },
    {
      title: ["강좌소개", "/"],
      subTitle: [
        ["게임 기획", "/"],
        ["게임 프로그래밍", "/"],
        ["언리얼 엔진", "/"],
        ["온라인 단기 부트캠프", "/"],
        ["온라인캠프", "/"],
        ["게임원화ㆍ그래픽", "/"],
      ],
    },
    {
      title: ["지원제도", "/"],
      subTitle: [
        ["국민내일배움카드", "/"],
        ["국민취업지원제도", "/"],
        ["K-디지털", "/"],
      ],
    },
    {
      title: ["경일스토리", "/"],
      subTitle: [
        ["경일인터뷰", "/"],
        ["취업현황", "/"],
        ["포트폴리오", "/"],
        ["K-TV", "/"],
      ],
    },
    {
      title: ["상담신청", "/"],
      subTitle: [
        ["상담신청하기", "/"],
        ["국비지원자격조회", "/"],
      ],
    },
    {
      title: ["회사소개", "/"],
      subTitle: [
        ["경일의 가치", "/"],
        ["교직원 소개", "/"],
        ["공지사항", "/"],
        ["찾아오시는 길", "/"],
      ],
    },
  ];
  return (
    <motion.div
      className="w-full block lg:hidden bg-white border-t border-gray-300 overflow-hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpenMenu_sm ? "max-content" : 0,
        opacity: isOpenMenu_sm ? 100 : 0,
      }}
    >
      <nav className="w-full bg-white h-[calc(100vh-144px)] sm:h-[calc(100vh-96px)]">
        <ul className="h-max w-full">
          {menu.map((v, idx) => {
            return (
              <BottomTitle_sm
                v={v}
                key={idx}
                isOpen={idx === openIdx}
                setIsOpen={(is) => (is ? setOpenIdx(idx) : setOpenIdx(-1))}
              />
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};

const BottomTitle_sm = ({
  v,
  setIsOpen,
  isOpen,
}: {
  v: { title: string[]; subTitle: string[][] };
  setIsOpen: (is: boolean) => void;
  isOpen: boolean;
}) => {
  return (
    <li className="flex flex-col items-center first:text-red-500 hover:text-purple-600 border-b border-gray-300">
      <h2
        className={clsx(
          "flex justify-between items-center w-[90%] h-[63px] text-[1.05rem] font-semibold cursor-pointer",
          "transition-colors duration-300"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{v["title"][0]}</span>
        <Arrow
          className="transition-transform"
          style={{ rotate: isOpen ? "0deg" : "180deg" }}
        />
      </h2>
      <motion.div
        className="w-[90%] overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "max-content" : 0,
          opacity: isOpen ? 100 : 0,
        }}
      >
        <ul className="pb-8">
          {v["subTitle"].map((v, idx) => {
            return (
              <li
                key={idx}
                className="py-[0.4rem] text-gray-800 text-sm text-bold"
              >
                <Link
                  href={v[1]}
                  className="hover:underline decoration-purple-600"
                >
                  {v[0]}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </li>
  );
};
