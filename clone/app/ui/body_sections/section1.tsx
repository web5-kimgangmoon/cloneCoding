import {
  Swiper,
  SwiperClass,
  SwiperRef,
  SwiperSlide,
  useSwiper,
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
import Image from "next/image";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import clsx from "clsx";
import { calc_bound } from "@/app/lib/calcBound";
import { SwiperContainer } from "swiper/element";

// export const Section1 = () => {
//   const slide = useRef<SwiperRef | null>(null);

//   const prevBtn = useId();
//   const nextBtn = useId();

//   const pages = useId();
//   //   const [page, setPage] = useState<HTMLDivElement | null>(null);
//   //   useLayoutEffect(() => {
//   //     const test = document.createElement("div");
//   //     test.textContent = "dejlqwe";
//   //     test.classList = "bg-black w-10 h-10 z-10";
//   //     slide.current!.swiper.navigation.nextEl() = (e) => {
//   //       e.currentTarget.appendChild(test);
//   //       console.log(e.currentTarget);
//   //     };
//   //     setPage(test);
//   //   }, []);

//   return (
//     <section className="w-screen h-[450px] sm:[609px] bg-blue-300 relative cursor-pointer">
//       <Swiper
//         className="h-full"
//         modules={[Pagination, Autoplay, Navigation]}
//         pagination={{
//           clickable: true,
//           el: `#${pages}`,
//           bulletClass: clsx(
//             "w-8 h-8 bg-white transition-all"
//             // "first:hidden first:absolute first:top-0 first:right-0",
//             // "last:hidden last:absolute last:top-0 last:left-0"
//           ),
//           bulletActiveClass: "!bg-blue-300 !block !w-16",
//           renderBullet: (index, className) => {
//             return `<div class="${className}"></div>`;
//           },
//         }}
//         // onPaginationUpdate={(swiper) => {
//         //   if (swiper.realIndex === 0) swiper.setProgress();
//         //   if (swiper.realIndex === 5) swiper.pagination.render();
//         // }}
//         navigation={{ prevEl: `#${prevBtn}`, nextEl: `#${nextBtn}` }}
//         allowTouchMove={false}
//         autoplay
//         ref={slide}
//         // onSlideChangeTransitionEnd={(swiper) => {
//         //   if (swiper.realIndex === 0) swiper.slideTo(4, 0);
//         //   if (swiper.realIndex === 5) swiper.slideTo(1, 0);
//         // }}
//         initialSlide={1}
//         speed={300}
//         slidesPerView={1}
//         // loop
//         freeMode={{ enabled: true }}
//         slidesOffsetAfter={300}

//       >
//         {[
//           ["/main_visual_interview.webp"],
//           ["/main_visual_game.webp"],
//           ["/main_visual_plan.webp"],
//           ["/main_visual_youtube.webp"],
//           ["/main_visual_interview.webp"],
//           ["/main_visual_game.webp"],
//         ].map((v, idx) => (
//           <SwiperSlide virtualIndex={}>
//             <Image
//               src={v[0]}
//               alt={v[0].split("/")[1]}
//               fill
//               style={{ objectFit: "cover" }}
//               key={idx}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <button
//         onClick={() => {
//           if (slide.current!.swiper.autoplay.paused)
//             slide.current!.swiper.autoplay.resume();
//           else slide.current!.swiper.autoplay.pause();
//         }}
//       >
//         ㅇㅇ
//       </button>
//       <button
//         className="flex justify-center items-center font-[swipe] h-12 w-12 absolute top-[calc(50%-1.5rem)] xl:left-[10%] left-[5%] after:content-['prev'] font-bold bg-white rounded-full z-10 nextBtn"
//         style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
//         id={prevBtn}
//       />
//       <button
//         className="flex justify-center items-center font-[swipe] h-12 w-12 absolute top-[calc(50%-1.5rem)] xl:right-[10%] right-[5%] after:content-['next'] font-bold bg-white rounded-full z-10"
//         style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
//         id={nextBtn}
//       />
//       <div className="h-8 w-64 absolute bottom-0 left-0 z-10">
//         <div className="relative flex gap-8 w-full h-full" id={pages}></div>
//         {/* {[1, 2, 3, 4].map((v, idx) => (
//           <div
//             key={idx}
//             className={clsx("w-8 h-8 cursor-pointer", {
//               "bg-blue-300":
//                 v === (slide.current ? slide.current!.swiper.activeIndex : 1),
//             })}
//             onClick={() =>
//               slide.current!.swiper.animating ||
//               slide.current!.swiper.slideTo(v, 300)
//             }
//           ></div>
//         ))} */}
//       </div>
//     </section>
//   );
// };

export const Section1 = () => {
  const slides = [
    ["/main_visual_interview.webp"],
    ["/main_visual_game.webp"],
    ["/main_visual_plan.webp"],
    ["/main_visual_youtube.webp"],
    ["/main_visual_interview.webp"],
    ["/main_visual_game.webp"],
  ];

  const slider = useRef<SwiperRef | null>(null);

  const prevBtn = useId();
  const nextBtn = useId();

  const pages = useId();

  const [controlledSlider, setControlledSlider] = useState<SwiperClass | null>(
    null
  );

  //   const [page, setPage] = useState<HTMLDivElement | null>(null);
  //   useLayoutEffect(() => {
  //     const test = document.createElement("div");
  //     test.textContent = "dejlqwe";
  //     test.classList = "bg-black w-10 h-10 z-10";
  //     slide.current!.swiper.navigation.nextEl() = (e) => {
  //       e.currentTarget.appendChild(test);
  //       console.log(e.currentTarget);
  //     };
  //     setPage(test);
  //   }, []);

  return (
    <section className="w-screen h-[450px] sm:[609px] bg-blue-300 relative cursor-pointer">
      <Swiper
        className="h-full"
        modules={[Pagination, Autoplay, Navigation, Controller]}
        // pagination={{
        //   clickable: true,
        //   el: `#${pages}`,
        //   bulletClass: clsx(
        //     "w-8 h-8 bg-white transition-all"
        //     // "first:hidden first:absolute first:top-0 first:right-0",
        //     // "last:hidden last:absolute last:top-0 last:left-0"
        //   ),
        //   bulletActiveClass: "!bg-blue-300 !block !w-16",
        //   renderBullet: (index, className) => {
        //     return `<div class="${className}"></div>`;
        //   },
        // }}
        // onPaginationUpdate={(swiper) => {
        //   if (swiper.realIndex === 0) swiper.setProgress();
        //   if (swiper.realIndex === 5) swiper.pagination.render();
        // }}
        // navigation={{ prevEl: `#${prevBtn}`, nextEl: `#${nextBtn}` }}
        allowTouchMove={false}
        autoplay
        ref={slider}
        // onSlideChangeTransitionEnd={(swiper) => {
        //   if (swiper.realIndex === 0) swiper.slideTo(4, 0);
        //   if (swiper.realIndex === 5) swiper.slideTo(1, 0);
        // }}
        initialSlide={1}
        speed={300}
        slidesPerView={1}
        // loop
        onSwiper={setControlledSlider}
      >
        {slides.map((v, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={v[0]}
              alt={v[0].split("/")[1]}
              fill
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Controller, Pagination, Navigation]}
        className="h-[20vh]"
        pagination={{
          clickable: true,
          el: `#${pages}`,
          bulletClass: clsx(
            "w-8 h-8 bg-white transition-all"
            // "first:hidden first:absolute first:top-0 first:right-0",
            // "last:hidden last:absolute last:top-0 last:left-0"
          ),
          bulletActiveClass: "!bg-blue-300 !block !w-16",
          renderBullet: (index, className) => {
            return `<div class="${className}"></div>`;
          },
        }}
        navigation={{ prevEl: `#${prevBtn}`, nextEl: `#${nextBtn}` }}
        // controller={{ control: controlledSlider }}
      >
        <SwiperSlide className="bg-black">ㅇㅇㅇ</SwiperSlide>
        <SwiperSlide className="bg-blue-300">ㅇㅇㅇ</SwiperSlide>
        <SwiperSlide className="bg-red-300">ㅇㅇㅇ</SwiperSlide>
        <SwiperSlide className="bg-green-300">ㅇㅇㅇ</SwiperSlide>
      </Swiper>
      <button
        onClick={() => {
          if (slider.current!.swiper.autoplay.paused)
            slider.current!.swiper.autoplay.resume();
          else slider.current!.swiper.autoplay.pause();
        }}
      >
        ㅇㅇ
      </button>
      <button
        className="flex justify-center items-center font-[swipe] h-12 w-12 absolute top-[calc(50%-1.5rem)] xl:left-[10%] left-[5%] after:content-['prev'] font-bold bg-white rounded-full z-10 nextBtn"
        style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
        id={prevBtn}
      />
      <button
        className="flex justify-center items-center font-[swipe] h-12 w-12 absolute top-[calc(50%-1.5rem)] xl:right-[10%] right-[5%] after:content-['next'] font-bold bg-white rounded-full z-10"
        style={{ fontFamily: "swiper-icons", cursor: "pointer" }}
        id={nextBtn}
      />
      <div className="h-8 w-64 absolute bottom-0 left-0 z-10">
        <div className="relative flex gap-8 w-full h-full" id={pages}></div>
        {/* {[1, 2, 3, 4].map((v, idx) => (
            <div
              key={idx}
              className={clsx("w-8 h-8 cursor-pointer", {
                "bg-blue-300":
                  v === (slide.current ? slide.current!.swiper.activeIndex : 1),
              })}
              onClick={() =>
                slide.current!.swiper.animating ||
                slide.current!.swiper.slideTo(v, 300)
              }
            ></div>
          ))} */}
      </div>
    </section>
  );
};
