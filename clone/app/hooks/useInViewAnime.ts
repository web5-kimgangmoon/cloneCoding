import { RefObject, useEffect, useRef, useState } from "react";

export type targetTy = RefObject<
  HTMLElement | HTMLDivElement | HTMLHeadingElement | null
>;

interface option {
  bottomMargin_enter: number;
  exposeRatio_enter: number;
  bottomMargin_leave: number;
  exposeRatio_leave: number;
}

export default function useInViewAnime(
  target: targetTy,
  setIsRunning: (set: boolean) => void,
  {
    bottomMargin_enter = 0,
    exposeRatio_enter = 0,
    bottomMargin_leave = 0,
    exposeRatio_leave = 0,
  }: option
) {
  return useEffect(() => {
    const observer_enter = new IntersectionObserver(
      (e) => {
        // if (
        //   e[0].isIntersecting &&
        //   (window.innerHeight - e[0].boundingClientRect.top >
        //     target.current!.offsetHeight * exposeRatio_enter - 1 ||
        //     window.innerHeight - e[0].boundingClientRect.top >
        //       -bottomMargin_enter - 1)
        // ) {
        //   setIsRunning(true);
        // }
        if (e[0].isIntersecting) setIsRunning(true);
      },
      {
        threshold: exposeRatio_enter,
        rootMargin: `0px 0px ${bottomMargin_enter}px 0px`,
      }
    );
    const observer_leave = new IntersectionObserver(
      (e) => {
        if (
          (!e[0].isIntersecting &&
            window.innerHeight - e[0].boundingClientRect.top <
              target.current!.offsetHeight * exposeRatio_leave) ||
          window.innerHeight - e[0].boundingClientRect.top < -bottomMargin_leave
        ) {
          setIsRunning(false);
        }
      },
      {
        threshold: exposeRatio_leave,
        rootMargin: `0px 0px ${bottomMargin_leave}px 0px`,
      }
    );
    observer_enter.observe(target.current!);
    observer_leave.observe(target.current!);
  }, []);
}

export function useInViewAnime_p(
  target: targetTy,
  setIsRunning: (set: boolean) => void,
  {
    bottomMargin_enter = 0,
    exposeRatio_enter = 0,
    bottomMargin_leave = 0,
    exposeRatio_leave = 0,
  }: option
) {
  return useEffect(() => {
    const enterSize_ratio = -target.current!.offsetHeight * exposeRatio_enter;
    const leaveSize_ratio = -target.current!.offsetHeight * exposeRatio_leave;
    const observer_enter = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) setIsRunning(true);
      },
      {
        rootMargin: `0px 0px ${
          -target.current!.offsetTop + enterSize_ratio + bottomMargin_enter
        }px 0px`,
      }
    );
    const observer_leave = new IntersectionObserver(
      (e) => {
        if (
          !e[0].isIntersecting &&
          window.innerHeight - e[0].boundingClientRect.top <
            target.current!.offsetTop - leaveSize_ratio - bottomMargin_leave
        ) {
          setIsRunning(false);
        }
      },
      {
        rootMargin: `0px 0px ${
          -target.current!.offsetTop + leaveSize_ratio + bottomMargin_leave
        }px 0px`,
      }
    );
    observer_enter.observe(target.current!.parentElement!);
    observer_leave.observe(target.current!.parentElement!);
  }, []);
}
