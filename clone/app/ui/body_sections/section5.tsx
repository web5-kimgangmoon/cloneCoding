import { useInViewAnime_p } from "@/app/hooks/useInViewAnime";
import { StarIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Bottom_btn } from "../public";

export function Section5() {
  const [isRunning, setIsRunning] = useState(false);
  const target = useRef<HTMLHeadingElement | null>(null);
  useInViewAnime_p(target, setIsRunning, {
    bottomMargin: 100,
    exposeRatio: 0,
  });
  return (
    <section className="relative flex flex-col py-24 bg-violet-400 ">
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
        여러분 선배들의 생생한 수강후기를 확인해보세요
      </h1>
      <Slider />
      <Bottom_btn
        href="#"
        wrapper_cls=""
        cls="w-36 sm:w-57 h-12 sm:h-15 transition-all duration-400"
      >
        수강후기 더보기
      </Bottom_btn>
    </section>
  );
}

const Slider = () => {
  const slide_data = [
    ["처음엔 걱정했지만 많이 배웠고 취업까지 했어요.", "플밍 OO기 OOO", "/#"],
    ["포기하지 않으면 누구나 성공할 수 있습니다.", "플밍OO기 OOO", "/#"],
    ["6개월이라는 짧지만 긴 시간이 아깝지 않았어요.", "플밍OO기 OOO", "/#"],
    ["비전공자인 저도 했습니다. 모두 취업하세요!", "플밍OO기 OOO", "/#"],
    ["처음엔 걱정했지만 많이 배웠고 취업까지 했어요.", "플밍 OO기 OOO", "/#"],
    ["포기하지 않으면 누구나 성공할 수 있습니다.", "플밍OO기 OOO", "/#"],
    ["6개월이라는 짧지만 긴 시간이 아깝지 않았어요.", "플밍OO기 OOO", "/#"],
    ["비전공자인 저도 했습니다. 모두 취업하세요!", "플밍OO기 OOO", "/#"],
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 0 }}
      slidesPerView={"auto"}
      preventInteractionOnTransition
      allowTouchMove={false}
      speed={6000}
      loop
      spaceBetween={30}
      wrapperClass="!ease-linear w-fit"
      className={clsx(
        "w-full h-[330px] sm:h-[400px]",
        "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-linear-[90deg] before:from-violet-400 before:to-[14.4%] before:to-black/0 before:z-10",
        "after:content-[''] after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-linear-[270deg] after:from-violet-400 after:to-[14.4%] after:to-black/0 after:z-10"
      )}
    >
      {slide_data.map((v, idx) => (
        <SwiperSlide key={idx} className="!w-fit">
          <SlideContent p={v[0]} s={v[1]} img={v[2]} idx={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SlideContent = ({
  idx,
  p,
  s,
  img,
}: {
  idx: number;
  p: string;
  s: string;
  img: string;
}) => {
  return (
    <div
      className="!flex flex-col items-center select-none upDownAnime"
      style={{
        animationDelay: Number.isInteger(idx / 2) ? "3000ms" : "0ms",
      }}
    >
      <div className="flex flex-col justify-between w-[220px] h-[250px] sm:w-[340px] sm:h-[300px] bg-white pt-10 pb-5 px-6 sm:px-10 rounded-2xl sm:rounded-4xl shadow-xl">
        <div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, idx) => (
              <StarIcon
                className="w-[20px] sm:w-[30px] text-yellow-400"
                key={idx}
                fill="oklch(.905 .182 98.111)"
              ></StarIcon>
            ))}
          </div>
          <p className="py-6 text-md sm:text-2xl break-keep font-bold">{p}</p>
        </div>
        <div className="flex justify-between items-center">
          <small className="text-sm sm:text-[0.95rem] text-violet-700 font-semibold">
            {s}
          </small>
          <Image
            width={107}
            height={107}
            src={img}
            alt={"초상권 문제로 뺍니다"}
            className="w-[60px] h-[60px] sm:w-[107px] sm:h-[107px] bg-yellow-300 rounded-full"
          />
        </div>
      </div>
      <div className="border-t-[15px] border-r-[15px] sm:border-t-[25px] sm:border-r-[25px] border-t-white border-r-transparent" />
    </div>
  );
};
