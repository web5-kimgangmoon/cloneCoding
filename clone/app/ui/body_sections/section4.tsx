import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { CenterContainer_section } from "../public";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";

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
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const prevId = useId();
  const nextId = useId();

  return (
    <CenterContainer_section className="py-32 bg-gray-100">
      <h1 className="pb-16 text-center text-[2.8rem] font-extrabold">
        경일에서 취업했어요!
      </h1>
      <nav className="flex pb-8 text-2xl font-bold text-indigo-500">
        {["게임기획", "유니티 엔진", "언리얼 엔진"].map((v, idx) => {
          return (
            <button
              className={clsx(
                "flex justify-center items-center w-full py-2 border-violet-600",
                selectedIdx === idx && "border-b-2"
              )}
              key={idx}
              onClick={() => setSelectedIdx(idx)}
            >
              {v}
            </button>
          );
        })}
      </nav>
      <div className="flex gap-6">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          navigation={{ prevEl: `#${prevId}`, nextEl: `#${nextId}` }}
          autoplay
          loop
          className="w-full bg-white shadow-xl rounded-xl"
          fadeEffect={{ crossFade: true }}
          effect="fade"
        >
          {leftBox_data[selectedIdx].map((v, idx) => (
            <SwiperSlide className="p-6" key={idx}>
              <SlideContent t={v[0]} p={v[1]} s={v[2]} img={v[3]} />
            </SwiperSlide>
          ))}
          <button
            className="flex justify-center items-center w-8 h-8 absolute bottom-[4rem] right-[4rem] after:content-['prev'] text-sm sm:text-lg font-bold bg-purple-200 rounded-full z-10"
            style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
            id={prevId}
          />
          <button
            className="flex justify-center items-center w-8 h-8 absolute bottom-[4rem] right-[2rem] after:content-['next'] text-sm sm:text-lg font-bold bg-purple-200 rounded-full z-10"
            style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
            id={nextId}
          />
        </Swiper>
        <div className="flex flex-col gap-4 w-max">
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
      <button></button>
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
      <div className="flex gap-4 w-full h-max p-6 bg-white rounded-2xl">
        <Image
          width={70}
          height={70}
          src={img}
          alt="초상권 문제로 뺍니다"
          className="w-[107px] h-[107px] block bg-yellow-300 rounded-full"
          style={{ objectFit: "cover" }}
        ></Image>
        <div className="w-[16vw]">
          <h2 className="w-full text-xl font-bold truncate">{t}</h2>
          <p className="w-full pb-5 text-lg truncate">{p} </p>
          <small className="w-full truncate text-[0.9rem]">{s} </small>
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
      <div className="w-full h-[18rem] overflow-hidden">
        <Image
          width={70}
          height={70}
          src={img}
          alt="초상권 문제로 뺍니다"
          className="w-full h-full hover:scale-[1.2] block bg-yellow-300 rounded-xl transition-transform"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className="text-3xl font-bold leading-12">{t}</h1>
      <p className="py-2 text-lg font-semibold">{p}</p>
      <small className="text-[1.1rem]">{s}</small>
    </>
  );
};
