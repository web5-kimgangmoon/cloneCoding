import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { CenterContainer_section } from "../public";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import clsx from "clsx";
import { useRef, useState } from "react";
import "aos/dist/aos.css";

type BoxTy = { t: string; p: string; img: string };

export const Section6 = () => {
  const box_data: BoxTy[] = [
    {
      t: `비용부담 없이 
          집중몰입교육 가능`,

      p: `수강료 전액지원+
          훈련장려금 316,000원`,

      img: "intro_ico01.webp",
    },
    {
      t: `한번에 제대로, 취업까지
          완성하는 올인원 패키지`,

      p: `여러분의 시간은 소중합니다.
          꼭 필요한 내용으로 구성 하였습니다.`,

      img: "intro_ico02.png",
    },
    {
      t: `프로젝트 중심 수업과 기업과제
          수행으로 압축성장`,

      p: `취업에서 한걸음 더
          슈퍼 신입을 만듭니다.`,

      img: "intro_ico03.png",
    },
    {
      t: `2500명 이상의 수료생과
          검증된 교육`,
      p: `당신이 상상하던
        그 이상의 교육`,
      img: "intro_ico04.webp",
    },
    {
      t: `비교할 수 없는 취업률
          88%`,

      p: `우리는
          취업의 전문가입니다.`,
      img: "intro_ico05.webp",
    },
    {
      t: `수료후 평균 취업기간
          1개월 이내`,
      p: `체계적인 취업 프로세스로
          여러분을 지원합니다`,
      img: "intro_ico06.png",
    },
  ];

  const box_data_sm: BoxTy[] = [
    {
      t: `비용부담 없이 
      집중몰입교육 가능`,

      p: `수강료 전액지원 + 훈련장려금 316,000원`,

      img: "intro_ico01.webp",
    },
    {
      t: `한번에 제대로, 취업까지 
      완성하는 올인원 패키지`,

      p: `여러분의 시간은 소중합니다. 꼭 필요한 내용으로 구성 하였습니다.`,

      img: "intro_ico02.png",
    },
    {
      t: `프로젝트 중심 수업과 기업과제 
      수행으로 압축성장`,

      p: `취업에서 한걸음 더 슈퍼 신입을 만듭니다.`,

      img: "intro_ico03.png",
    },
    {
      t: `2500명 이상의 수료생과 
      검증된 교육`,
      p: `당신이 상상하던 그 이상의 교육`,
      img: "intro_ico04.webp",
    },
    {
      t: `비교할 수 없는 취업률 
      88%`,

      p: `우리는 취업의 전문가입니다.`,
      img: "intro_ico05.webp",
    },
    {
      t: `수료후 평균 취업기간 
      1개월 이내`,
      p: `체계적인 취업 프로세스로 여러분을 지원합니다`,
      img: "intro_ico06.png",
    },
  ];
  return (
    <CenterContainer_section className="bg-gray-100 py-32 relative">
      <small className="text-lg text-indigo-500 text-center font-bold">
        WHY? KYUNGIL
      </small>
      <div className="pt-12">
        <Slide />
      </div>
      <div
        className="relative pt-16 sm:pt-36 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 auto-rows-[200px] sm:auto-rows-[280px]"
        style={{
          display: "grid",
          gap: "30px",
        }}
      >
        {box_data.map((v, idx) => (
          <Box t={v["t"]} p={v["p"]} img={v["img"]} key={idx} idx={idx}></Box>
        ))}
        {box_data_sm.map((v, idx) => (
          <Box_sm
            t={v["t"]}
            p={v["p"]}
            img={v["img"]}
            key={idx}
            idx={idx}
          ></Box_sm>
        ))}
      </div>
      <div className="flex justify-center pt-16">
        <Image
          width={30}
          height={17}
          src={"/pair_quot_ico.png"}
          alt={"pair_quot_ico.png"}
          className="sm:w-[40] sm:h-[24px] w-[30px] h-[18px]"
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
      <small
        className={clsx(
          "text-center pt-4 break-keep whitespace-pre-line sm:whitespace-normal lg:whitespace-pre-line mx-auto",
          "w-[90%] text-[1.05rem] sm:text-2xl text-indigo-900 font-[550] tracking-[-0.05rem] sm:leading-9"
        )}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* <span className="inline-block w-[90%] text-[1.05rem] sm:text-2xl text-indigo-900 font-[550] tracking-[-0.05rem] sm:leading-9"> */}
        {`메타버스, 블록체인, 가상증강에 이르기까지 게임업계에서 많이 연구 및 투자되고 있는 
      트렌디한 기술을 여러분의 가치로 만들어보세요!`}
        {/* </span> */}
      </small>
    </CenterContainer_section>
  );
};

const Slide = () => {
  const slide_data = [
    "경일만의 후끈한🔥 관리를 받아보세요.",
    "우리는 취업에 진심입니다.",
    "현장과 가장 닮아있는 교육을 목표로 합니다.",
    "경일만의 후끈한🔥 관리를 받아보세요.",
    "우리는 취업에 진심입니다.",
    "현장과 가장 닮아있는 교육을 목표로 합니다.",
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay
      centeredSlides
      direction="vertical"
      className="h-[200px] select-text"
      slidesPerView={"auto"}
      loop
      speed={800}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {slide_data.map((v, idx) => (
        <SwiperSlide key={idx} className="!h-fit opacity-[0.4] text-center">
          <strong className="sm:text-4xl text-md text-indigo-900 leading-15">
            {v}
          </strong>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Box = ({
  t,
  p,
  img,
  idx,
}: {
  t: string;
  p: string;
  img: string;
  idx: number;
}) => {
  return (
    <div
      className={clsx(
        "relative hidden lg:flex flex-col justify-center items-center p-6 text-2xl text-gray-500 text-center font-bold rounded-3xl group",
        "shadow-inner hover:bg-white break-keep whitespace-pre-line",
        Number.isInteger(idx / 2) ? "bg-purple-100" : "bg-violet-200"
      )}
      style={{
        transitionDuration: "800ms, 800ms, 300ms",
        transitionProperty: "opacity, transform, background-color",
      }}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={`${idx * 50}`}
    >
      <div
        className="w-full group-hover:opacity-0 duration-450"
        style={{ transitionProperty: "opacity" }}
      >
        {t}
      </div>
      <div
        className={clsx(
          "flex flex-col justify-center items-center w-full text-xl text-gray-900 break-keep duration-450",
          "absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100"
        )}
        style={{ transitionProperty: "opacity" }}
      >
        <p className="w-full pb-6">{p}</p>
        <Image
          src={"/" + img}
          alt={img}
          width={186}
          height={105}
          className="w-[186px] h-[105px] object-center"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

const Box_sm = ({
  t,
  p,
  img,
  idx,
}: {
  t: string;
  p: string;
  img: string;
  idx: number;
}) => {
  return (
    <div
      className={clsx(
        "relative flex lg:hidden flex-col bg-white p-8 text-left rounded-3xl group",
        "shadow-outer break-keep whitespace-pre-line"
      )}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={`${idx * 75}`}
    >
      <div className="w-full pb-3 text-xl sm:text-[1.6rem] font-bold leading-7 tracking-[-0.025rem]">
        {t}
      </div>

      <p className="w-3/5 text-sm sm:text-xl tracking-[-0.025rem] text-gray-600 font-semibold">
        {p}
      </p>
      <Image
        src={"/" + img}
        alt={img}
        width={186}
        height={105}
        className="absolute bottom-5 sm:bottom-11 right-3 w-[137px] h-[90px] object-center"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};
