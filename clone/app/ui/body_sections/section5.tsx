import { useInViewAnime_p } from "@/app/hooks/useInViewAnime";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Section5() {
  const [isRunning, setIsRunning] = useState(false);
  const target = useRef<HTMLHeadingElement | null>(null);
  useInViewAnime_p(target, setIsRunning, {
    bottomMargin: 100,
    exposeRatio: 0,
  });
  return (
    <section className="relative flex flex-col h-[750px] py-24 bg-violet-400 ">
      <h2 className="text-center sm:text-lg text-sm text-white font-bold">
        KYUNGIL COURSE
      </h2>
      <h1
        ref={target}
        style={{
          translate: isRunning ? "0px 0%" : "0px 100%",
          opacity: isRunning ? 1 : 0,
        }}
        className="pt-4 pb-12 text-center sm:text-[2.75rem] text-[1.6rem] text-white font-extrabold break-keep sm:leading-14 leading-9 transition-all duration-[800ms]"
      >
        능력으로 인정 받는 슈퍼신입으로 만들어드립니다.
      </h1>
      <Slider />
    </section>
  );
}

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 0 }}
      centeredSlides
      slidesPerView={"auto"}
      preventInteractionOnTransition
      allowTouchMove={false}
      speed={6000}
      loop
      spaceBetween={50}
      wrapperClass="!ease-linear"
      className="h-full"
    >
      {Array.from({ length: 8 }, (v, k) => k).map((v, idx) => (
        <SwiperSlide key={idx} className="!w-fit">
          <div
            className="!flex flex-col items-center select-none upDownAnime"
            style={{
              animationDelay: Number.isInteger(idx / 2) ? "3000ms" : "0ms",
            }}
          >
            <div className="w-[340px] h-[300px] bg-white pt-10 pl-10 pr-10 rounded-4xl">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon
                    className="w-[20px] sm:w-[30px] text-yellow-400"
                    key={idx}
                    fill="oklch(.905 .182 98.111)"
                  ></StarIcon>
                ))}
              </div>
              <p className="py-6 text-2xl break-keep font-bold">
                처음엔 걱정했지만 많이 배웠고 취업까지 했어요.
              </p>
              <div className="flex justify-between items-center">
                <small className="text-[0.95rem] text-violet-700 font-semibold">
                  플밍 OO기 OOO
                </small>
                <Image
                  width={107}
                  height={107}
                  src={"/#"}
                  alt={"초상권 문제로 뺍니다"}
                  className="w-[107px] h-[107px] bg-yellow-300 rounded-full"
                />
              </div>
            </div>
            <div className="border-t-[25px] border-r-[25px] border-t-white border-r-transparent" />
          </div>
        </SwiperSlide>
      ))}
      {/* <SwiperSlide virtualIndex={2}>테스트 환경</SwiperSlide>
      <SwiperSlide virtualIndex={3}>테스트 환경</SwiperSlide> */}
    </Swiper>
  );
};
