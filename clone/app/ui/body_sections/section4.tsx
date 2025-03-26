import { Swiper, SwiperSlide } from "swiper/react";
import { Bottom_btn, CenterContainer_section } from "../public";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useId, useRef, useState } from "react";
import { motion } from "motion/react";

import clsx from "clsx";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import useInViewAnime, { useInViewAnime_p } from "@/app/hooks/useInViewAnime";

export default function Section4() {
  const rightBox_data = [
    [
      [
        "[기획] 웹OWEBOOO QA",
        "한 우물만 파다 보면 오아시스가 돼버린다",
        "[게임기획 OO기] OOO",
        "#",
        "/#",
      ],
      [
        "[기획] OOOOOO슈퍼크리에이티브OOOOOOOOOSuperCreative 전투 시스템 기획",
        "즐기는 사람만큼 강한 사람은 없습니다.",
        "[게임기획 OO기] OOO",
        "#",
        "/#",
      ],
      [
        "[기획] 네OOO스NEOOOOOO 사업PM",
        "꾸준함이 가장 중요합니다.",
        "[게임기획 OO기] OOO",
        "#",
        "/#",
      ],
    ],
    [
      [
        "[프로그래밍] 슈퍼OO SUPEROOOO 개발자",
        "비전공자에서 게임개발자까지",
        "[기업맞춤형 게임프로그래밍 O기] OO",
        "#",
        "/#",
      ],
      [
        "[프로그래밍] 슈퍼OO SuperOOOO 클라이언트 개발자",
        "게임개발자.SetBool(“is취업했나”,true);",
        "[프로그래밍 OO기] OOO",
        "#",
        "/#",
      ],
      [
        "[프로그래밍] 차OChaOOO 디지털 트윈",
        "못한다고 좌절하지 말기",
        "[프로그래밍 OO기] OOO",
        "#",
        "/#",
      ],
    ],
    [
      [
        "[언리얼] OO이드OOOODE 개발자",
        "게임을 만들 때 효율적인 코드로 최적화를 하는 프로그래머가 목표!",
        "[언리얼 O기] OOO",
        "#",
        "/#",
      ],
      [
        "[언리얼] OO이드OOOODE 개발자",
        "안되겠지 생각 말고 일단 도전하자",
        "[언리얼 O기] OOO",
        "#",
        "/#",
      ],
      [
        "[언리얼] 무브OOOOOMOVEOOOOOOOOOOOO 개발자",
        "노력한 시간은 배신하지 않는다.",
        "[언리얼 O기] OOO",
        "#",
        "/#",
      ],
    ],
  ];

  const leftBox_data = [
    [
      [
        "슈O센O OOO",
        "OOOO 게임기획 O기",
        "환경은 준비되어 있으니 나만 열심히 하면 되겠구나!",
        "/#",
      ],
      [
        "넥슨게임즈 OOO",
        "게임 기획 OO기",
        "노노미, 녀석들을 향해 탄막을 쳐.",
        "/#",
      ],
      [
        "[기획] OOO업OOOOOUP 레벨 기획자",
        "중요한 건 꺾여도 그냥 하는 마음",
        "[게임기획 OO기] OOO",
        "/#",
      ],
    ],
    [
      [
        "[프로그래밍] 슈퍼OOSuperOOOO 하이퍼 캐주얼 개발자",
        "부족하다고 느낀다면 좌절은 시간낭비",
        "[프로그래밍 OO기] OOO",
        "/#",
      ],
      [
        "와OO WAOOOOOO 개발자",
        "예체능 출신 개발자 되기",
        "[기업맞춤 프로그래밍 O기] OOO",
        "/#",
      ],
    ],
    [
      [
        "[언리얼] 게임OOOGAMEOOOOO 개발자",
        "힘든 시간을 견디고 해야 할 일들을 착실히 하면 원하는 결과를 얻을 수 있습니다.",
        "[언리얼 O기] OOO",
        "/#",
      ],
    ],
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const prevId = useId();
  const nextId = useId();

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [isTitle, setIsTitle] = useState(false);
  const [isSlider, setIsSlider] = useState(false);

  useInViewAnime_p(titleRef, setIsTitle, { bottomMargin: 0, exposeRatio: 0 });
  useInViewAnime(sliderRef, setIsSlider, { bottomMargin: 0, exposeRatio: 0.3 });
  return (
    <CenterContainer_section className="py-16 sm:py-32 bg-gray-100 relative">
      <h1
        className="pb-16 text-center text-[1.6rem] sm:text-[2.8rem] font-extrabold"
        style={{
          transitionProperty: "translate, opacity",
          transitionTimingFunction: "ease",
          transitionDuration: "300ms",
          opacity: isTitle ? 1 : 0,
          translate: isTitle ? "0px 0px" : "0px 100px",
        }}
        ref={titleRef}
      >
        경일에서 취업했어요!
      </h1>
      <nav className="flex gap-4 pb-8 sm:text-2xl text-lg font-bold text-gray-400">
        {["게임기획", "유니티 엔진", "언리얼 엔진"].map((v, idx) => {
          return (
            <button
              className={clsx(
                "flex justify-center items-center w-max sm:w-full py-2 border-violet-600 cursor-pointer",
                selectedIdx === idx && "border-b-2 text-violet-500"
              )}
              key={idx}
              onClick={() => setSelectedIdx(idx)}
            >
              {v}
            </button>
          );
        })}
      </nav>
      <div className="flex flex-col lg:flex-row gap-6 lg:h-[520px]">
        <div
          className="bg-white shadow-xl rounded-xl w-full lg:w-[calc(100%/12*7)] lg:max-w-[700px] h-full p-4 sm:p-10"
          style={{
            transitionProperty: "translate, opacity",
            transitionTimingFunction: "ease",
            transitionDuration: "800ms",
            opacity: isSlider ? 1 : 0,
            translate: isSlider ? "0px 0px" : "-100px 0px",
          }}
          ref={sliderRef}
        >
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            navigation={{ prevEl: `#${prevId}`, nextEl: `#${nextId}` }}
            autoplay
            loop
            fadeEffect={{ crossFade: true }}
            effect="fade"
            speed={1500}
            className="w-full h-full"
          >
            {leftBox_data[selectedIdx].map((v, idx) => (
              <SwiperSlide className="" key={idx}>
                <SlideContent t={v[0]} p={v[1]} s={v[2]} img={v[3]} />
              </SwiperSlide>
            ))}
            <button
              className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 absolute sm:bottom-0 sm:top-[auto] top-[150px] sm:left-[auto] left-[2rem]  sm:right-[2.5rem] -translate-y-1/2 after:content-['prev'] text-xs sm:text-lg font-bold bg-white border border-gray-300 rounded-full z-10"
              style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
              id={prevId}
            />
            <button
              className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 absolute sm:bottom-0 sm:top-[auto] top-[150px] right-[2rem]  sm:right-0 -translate-y-1/2 after:content-['next'] text-xs sm:text-lg font-bold bg-white border border-gray-300 rounded-full z-10"
              style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
              id={nextId}
            />
          </Swiper>
        </div>
        <div className="flex flex-col justify-between gap-4 sm:gap-5 lg:w-[calc(100%/12*5)]">
          {rightBox_data[selectedIdx].map((v, idx) => (
            <SmallBOx
              t={v[0]}
              p={v[1]}
              s={v[2]}
              href={v[3]}
              img={v[4]}
              key={idx}
            />
          ))}
        </div>
      </div>
      <Bottom_btn href="#" wrapper_cls="pt-12" cls="w-52 h-10 sm:h-16" />
    </CenterContainer_section>
  );
}

const SmallBOx = ({
  img,
  t,
  p,
  s,
  href,
}: {
  img: string;
  t: string;
  p: string;
  s: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="flex w-full h-max p-[20px] bg-white rounded-2xl">
        <Image
          width={70}
          height={70}
          src={img}
          alt="초상권 문제로 뺍니다"
          className="w-[70px] h-[70px] sm:w-[107px] sm:h-[107px] block bg-yellow-300 rounded-full"
          style={{ objectFit: "cover" }}
        ></Image>
        <div className="pl-[20px] w-[calc(100%-122px)]">
          <h2 className="w-full text-md sm:text-xl font-bold truncate">{t}</h2>
          <p className="w-full pb-2 sm:pb-5 text-sm sm:text-lg truncate">{p}</p>
          <small className="w-full truncate text-xs sm:text-[0.9rem]">
            {s}
          </small>
        </div>
      </div>
    </Link>
  );
};

const SlideContent = ({
  img,
  t,
  p,
  s,
}: {
  img: string;
  t: string;
  p: string;
  s: string;
}) => {
  return (
    <>
      <Image
        width={300}
        height={200}
        src={img}
        alt="초상권 문제로 뺍니다"
        className="w-full max-h-[300px] aspect-[1/2] hover:scale-105 block bg-yellow-300 rounded-xl transition-transform"
        style={{ objectFit: "cover" }}
      />
      <h1 className="pt-2 pb-2 sm:pb-4 text-lg sm:text-3xl font-bold">{t}</h1>
      <p className="pb-2 sm:text-lg font-semibold">{p}</p>
      <small className="text-sm sm:text-[1.1rem]">{s}</small>
    </>
  );
};
