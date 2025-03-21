import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { calcBound, calcBoundMove } from "@/app/lib/calcBound";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Section1 = () => {
  const slides = [
    ["/main_visual_game.webp", "/m_main_visual_game.webp", "#"],
    ["/main_visual_plan.webp", "/m_main_visual_plan.webp", "#"],
    ["/main_visual_youtube.webp", "/m_main_visual_youtube.webp", "#"],
    ["/main_visual_interview.webp", "/m_main_visual_interview.webp", "#"],
    ["/main_visual_game.webp", "/m_main_visual_game.webp", "#"],
    ["/main_visual_plan.webp", "/m_main_visual_plan.webp", "#"],
    ["/main_visual_youtube.webp", "/m_main_visual_youtube.webp", "#"],
    ["/main_visual_interview.webp", "/m_main_visual_interview.webp", "#"],
    ["/main_visual_game.webp", "/m_main_visual_game.webp", "#"],
    ["/main_visual_plan.webp", "/m_main_visual_plan.webp", "#"],
    ["/main_visual_youtube.webp", "/m_main_visual_youtube.webp", "#"],
    ["/main_visual_interview.webp", "/m_main_visual_interview.webp", "#"],
  ];

  return (
    <section
      className={clsx(
        "w-screen bg-blue-300 relative cursor-pointer",
        "xs:h-[104.5vw] lg:h-[30vw] xl:!h-[450px]"
      )}
    >
      <Swiper
        className="h-full"
        modules={[Pagination, Autoplay]}
        allowTouchMove={false}
        autoplay
        onSlideChangeTransitionEnd={(swiper) => {
          swiper.animating ||
            swiper.slideTo(
              calcBound(swiper.activeIndex, swiper.slides.length),
              0
            );
          if (swiper.autoplay.paused) swiper.autoplay.resume();
        }}
        initialSlide={4}
        speed={500}
        slidesPerView={1}
      >
        {slides.map((v, idx) => (
          <SwiperSlide key={idx}>
            <Link href={v[2]} className="w-full h-full block">
              <Image
                src={v[0]}
                alt={v[0].split("/")[1]}
                fill
                style={{ objectFit: "cover" }}
                className="hidden lg:block"
              />
              <Image
                src={v[1]}
                alt={v[1].split("/")[1]}
                fill
                style={{ objectFit: "cover" }}
                className="block lg:hidden"
              />
            </Link>
          </SwiperSlide>
        ))}
        <Pages length={12} />
        <Navi_btn />
      </Swiper>
    </section>
  );
};

export const Pages = ({ length }: { length: number }) => {
  const swiper = useSwiper();
  const [page, setPage] = useState(4);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setPage(calcBound(swiper.activeIndex, swiper.slides.length));
    });
  }, []);
  return (
    <div
      className={clsx(
        "flex gap-4 w-max absolute bottom-[5rem] left-[1.5rem] z-10",
        "xl:left-[calc(50%-600px)]"
      )}
    >
      {Array.from({ length: length / 3 }, (v, i) => {
        return i + length / 3;
      }).map((v, idx) => (
        <button
          key={idx}
          className={`w-4 h-4 cursor-pointer bg-white rounded-full transition-all duration-500 ${
            v === page ? "!bg-indigo-600 w-12" : ""
          }`}
          onClick={() => {
            if (!swiper.animating) {
              const result = calcBoundMove(
                page,
                v,
                length / 3,
                (length / 3) * 2 - 1
              );
              swiper.slideTo(result[0], result[1] * 500);
            }
          }}
        />
      ))}
    </div>
  );
};

export const Navi_btn = () => {
  const swiper = useSwiper();
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    swiper.on("autoplayStart", () => setIsRunning(true));
    swiper.on("autoplayStop", () => setIsRunning(false));
  }, []);
  return (
    <>
      <button
        className={clsx(
          "absolute bottom-[3.25rem] left-[1.5rem] w-[1.2rem] h-[1.2rem] text-white cursor-pointer z-10",
          "xl:left-[calc(50%-600px)]"
        )}
        onClick={() => {
          if (isRunning) swiper.autoplay.stop();
          else swiper.autoplay.start();
        }}
      >
        <PlayIcon strokeWidth={3} className={clsx(isRunning && "hidden")} />
        <PauseIcon strokeWidth={3} className={clsx(isRunning || "hidden")} />
      </button>
      <button
        className="flex justify-center items-center font-[swipe] h-12 w-12 absolute top-[calc(50%-1.5rem)] xl:left-[10%] left-[5%] after:content-['prev'] font-bold bg-white rounded-full z-10 nextBtn"
        style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
        onClick={() => swiper.animating || swiper.slidePrev(500)}
      />
      <button
        className="flex justify-center items-center font-[swipe] h-12 w-12 absolute top-[calc(50%-1.5rem)] xl:right-[10%] right-[5%] after:content-['next'] font-bold bg-white rounded-full z-10"
        style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
        onClick={() => swiper.animating || swiper.slideNext(500)}
      />
    </>
  );
};
