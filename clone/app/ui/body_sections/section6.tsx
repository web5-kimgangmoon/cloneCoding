import { Swiper, SwiperSlide } from "swiper/react";
import { CenterContainer_section } from "../public";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import clsx from "clsx";

export const Section6 = () => {
  const box_data: { t: [string, string]; p: [string, string]; img: string }[] =
    [
      {
        t: [
          `비용부담 없이 
          집중몰입교육 가능`,
          "",
        ],
        p: [
          `수강료 전액지원+
          훈련장려금 316,000원`,
          "",
        ],
        img: "intro_ico01.webp",
      },
      {
        t: [
          `한번에 제대로, 취업까지
          완성하는 올인원 패키지`,
          "",
        ],
        p: [
          `여러분의 시간은 소중합니다.
          꼭 필요한 내용으로 구성 하였습니다.`,
          "",
        ],
        img: "intro_ico02.png",
      },
      {
        t: [
          `프로젝트 중심 수업과 기업과제
          수행으로 압축성장`,
          "",
        ],
        p: [
          `취업에서 한걸음 더
          슈퍼 신입을 만듭니다.`,
          "",
        ],
        img: "intro_ico03.png",
      },
      {
        t: [
          `2500명 이상의 수료생과
          검증된 교육`,
          "",
        ],
        p: ["당신이 상상하던", "그 이상의 교육"],
        img: "intro_ico04.webp",
      },
      {
        t: [
          `비교할 수 없는 취업률
          88%`,
          "",
        ],
        p: ["우리는", "취업의 전문가입니다."],
        img: "intro_ico05.webp",
      },
      {
        t: [
          `수료후 평균 취업기간
          1개월 이내`,
          "",
        ],
        p: ["체계적인 취업 프로세스로", "여러분을 지원합니다"],
        img: "intro_ico06.png",
      },
    ];
  return (
    <CenterContainer_section className="bg-gray-100 py-32">
      <small className="text-lg text-indigo-500 text-center font-bold">
        WHY? KYUNGIL
      </small>
      <div className="pt-12">
        <Slide />
      </div>
      <div
        className="pt-36 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        style={{
          display: "grid",
          gridAutoRows: "280px",
          gap: "30px",
        }}
      >
        {box_data.map((v, idx) => (
          <Box
            t={v["t"]}
            p={v["p"]}
            img={v["img"]}
            key={idx}
            isEven={Number.isInteger(idx / 2)}
          ></Box>
        ))}
      </div>
      <div></div>
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
    >
      {slide_data.map((v, idx) => (
        <SwiperSlide key={idx} className="!h-fit opacity-[0.4] text-center">
          <strong className="text-4xl text-indigo-900 leading-15">{v}</strong>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Box = ({
  t,
  p,
  img,
  isEven,
}: {
  t: [string, string];
  p: [string, string];
  img: string;
  isEven: boolean;
}) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col justify-center lg:items-center p-6 bg-white text-2xl text-gray-500 text-left lg:text-center font-bold rounded-3xl transition-all duration-400 group",
        "lg:shadow-inner shadow-outer lg:hover:bg-white break-keep whitespace-pre-line",
        isEven ? "lg:bg-purple-100" : "lg:bg-violet-200"
      )}
      // style={{ boxShadow: "-5px -5px 8px -2.5px rgb(0 0 0 /0.3) inset" }}
    >
      <div className="w-full lg:group-hover:opacity-0 transition-all duration-400">
        {t[0]}
        {t[1]}
      </div>
      <div
        className={clsx(
          "flex flex-col justify-center items-end lg:items-center w-full text-xl text-gray-900 break-keep transition-all duration-400",
          "lg:absolute top-1/2 left-1/2 lg:-translate-x-[50%] lg:-translate-y-[50%] lg:opacity-0 lg:group-hover:opacity-100"
        )}
      >
        <p className="w-3/5 lg:w-full pb-6 text-left lg:text-center">
          {p[0]}
          {p[1]}
        </p>
        <Image
          src={"/" + img}
          alt={img}
          width={186}
          height={105}
          className="w-[137px] h-[90px] lg:w-[186px] lg:h-[105px] object-right lg:object-center lg:translate-x-0 lg:translate-y-0 translate-x-6 translate-y-2"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
