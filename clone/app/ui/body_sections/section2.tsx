import Image from "next/image";
import { CenterContainer_article } from "../public";
import clsx from "clsx";
import Link from "next/link";
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useInViewAnime, { useInViewAnime_p } from "@/app/hooks/useInViewAnime";
import { motion } from "motion/react";
import { useRef, useState } from "react";

export const Section2 = () => {
  return (
    <section className="min-h-screen">
      <Article_1 />
      <Article_2 />
      <Article_3 />
    </section>
  );
};

export const Article_1 = () => {
  return (
    <CenterContainer_article className="bg-gray-100">
      <div
        className={clsx(
          "lg:flex justify-between items-center w-full h-[6rem]",
          "hidden"
        )}
      >
        <span className="text-2xl font-bold">
          게임아카데미 최초! 8년 연속 우수훈련기관
        </span>
        <Swiper
          modules={[Autoplay]}
          autoplay
          loop
          style={{
            margin: 0,
            width: 372,
            height: 90,
          }}
          wrapperClass=""
          width={372}
          height={90}
          direction="vertical"
          slidesPerView={1}
        >
          {[
            ["/award1.webp", "대한민국 No.1 교육 부문 대상", "No.1 상"],
            ["/award2.png", "고용노동부 지정 5년 우수훈련기관", "우수훈련기관"],
            ["/award3.webp", "직업능력의 달 국무총리상 수상", "국무총리상"],
            [
              "/award4.webp",
              "대한민국 브랜드파워대상 게임부문 대상",
              "브랜드파워대상",
            ],
          ].map((v, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center h-full select-none gap-5">
                <Image
                  className="inline-block"
                  width={60}
                  height={60}
                  src={v[0]}
                  alt={v[2]}
                ></Image>
                <span className="text-lg text-gray-900">{v[1]}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CenterContainer_article>
  );
};

export const Article_2 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const target = useRef<HTMLHeadingElement | null>(null);
  useInViewAnime_p(target, setIsRunning, {
    bottomMargin_enter: 0,
    bottomMargin_leave: 0,
    exposeRatio_enter: 0,
    exposeRatio_leave: 0,
  });
  return (
    <CenterContainer_article className="py-32 relative">
      <h2 className="text-center text-lg text-indigo-600 font-bold">
        KYUNGIL COURSE
      </h2>
      <motion.h1
        ref={target}
        initial={{ translateY: 100 }}
        animate={{ translateY: isRunning ? 0 : 100 }}
        className="pt-8 pb-12 text-center text-[2.75rem] font-extrabold break-keep leading-14"
      >
        능력으로 인정 받는 슈퍼신입으로 만들어드립니다.
      </motion.h1>
      {/* <Title_section /> */}
      <div className="flex gap-6 w-full h-88">
        <div className="w-full flex-[1] p-12 from-indigo-600 to-violet-400 bg-gradient-to-br rounded-3xl">
          <Link href={"#"} className="block w-max text-white">
            <h3 className="w-max text-3xl font-bold leading-10">
              현업 경력 10년 이상의 <br />
              베테랑에게 배우는 실무
              <br />
              중점 교육
            </h3>
            <h4 className="w-max pt-3 font-[400]">
              모집중인 강좌 보기
              <ChevronDoubleRightIcon
                width={15}
                strokeWidth={2.5}
                className="inline-block"
              />
            </h4>
          </Link>
        </div>
        <div className="flex flex-col gap-8 w-full flex-[1.35] ">
          <SmallBox
            title="기획"
            line1="기획의 이해부터"
            line2="게임을 제작하고 론칭까지"
            imgPath="url('main_hover_plan.png')"
          />
          <SmallBox
            title="언리얼"
            line1="시각적인 충실함"
            line2="강한 심장을 가진 게임엔진"
            imgPath="url('main_hover_unreal.png')"
          />
        </div>
        <div className="flex flex-col gap-8 w-full flex-[1.35]">
          <SmallBox
            title="프로그래밍"
            line1="상상만 했던 게임을"
            line2="내 손으로 제작하는 과정"
            imgPath="url('main_hover_programming.png')"
          />
          <SmallBox
            title="온라인캠프"
            line1="장소 구애 없이"
            line2="온라인으로 동일한 경험"
            imgPath="url('main_hover_onlinecamp.png')"
          />
        </div>
      </div>
    </CenterContainer_article>
  );
};

const SmallBox = ({
  title,
  line1,
  line2,
  imgPath,
}: {
  title: string;
  line1: string;
  line2: string;
  imgPath: string;
}) => {
  return (
    <Link href={"#"} className="relative block h-full">
      <div className="h-full flex flex-col justify-center items-center bg-gray-200 rounded-3xl select-none">
        <h3 className="flex items-center text-2xl font-bold text-violet-600">
          <span className="pr-2">{title}</span>
          <ChevronRight />
        </h3>
        <p className="pt-1 text-xl text-center leading-5">
          {line1}
          <br /> {line2}
        </p>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center rounded-3xl opacity-0 hover:opacity-100 text-white text-3xl font-extrabold"
        style={{
          backgroundImage: imgPath,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {title}
      </div>
    </Link>
  );
};

const ChevronRight = () => {
  return (
    <div className="p-[0.1rem] border border-violet-600 rounded-full">
      <ChevronRightIcon
        width={12}
        hanging={12}
        strokeWidth={2.5}
        className="text-violet-600"
      />
    </div>
  );
};

const Article_3 = () => {
  return (
    <CenterContainer_article className="h-fit py-32 relative">
      <h2 className="text-center text-lg text-indigo-600 font-bold">
        KYUNGIL VIDEO
      </h2>
      <h1 className="text-center text-[2.75rem] font-extrabold break-keep leading-14">
        단순히 취업을 넘어
      </h1>
      <small className="text-gray-600 text-sm text-center pb-16">
        깊이 있는 게임제작자를 육성하는 고민에서 출발하였습니다.
      </small>

      <Swiper className="w-full h-full">
        {[
          ["/kivideo01.webp", "#"],
          ["/kivideo02.webp", "#"],
          ["/kivideo03.webp", "#"],
          ["/kivideo04.webp", "#"],
          ["/kivideo05.webp", "#"],
          ["/kivideo06.webp", "#"],
        ].map((v, idx) => (
          <SwiperSlide key={idx}>
            <Link href={v[1]} className="block relative aspect-video">
              <Image
                src={v[0]}
                alt={v[0].split("/")[1]}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Image
                  src={"/purpleplaybutton.png"}
                  alt={"purpleplaybutton.png"}
                  width={47}
                  height={47}
                  style={{ objectFit: "cover" }}
                  className=""
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </CenterContainer_article>
  );
};
