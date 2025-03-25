import { RefObject, useEffect, useRef, useState } from "react";

export type targetTy = RefObject<
  HTMLElement | HTMLDivElement | HTMLHeadingElement | null
>;

interface option {
  bottomMargin: number;
  exposeRatio: number;
}

export default function useInViewAnime(
  target: targetTy,
  setIsRunning: (set: boolean) => void,
  { bottomMargin = 0, exposeRatio = 0 }: option
) {
  return useEffect(() => {
    const observer_enter = new IntersectionObserver(
      (e) => {
        // if (
        //   e[0].isIntersecting &&
        //   (window.innerHeight - e[0].boundingClientRect.top >
        //     target.current!.offsetHeight * exposeRatio - 1 ||
        //     window.innerHeight - e[0].boundingClientRect.top >
        //       -bottomMargin - 1)
        // ) {
        //   setIsRunning(true);
        // }
        if (e[0].isIntersecting) setIsRunning(true);
      },
      {
        threshold: exposeRatio,
        rootMargin: `0px 0px ${bottomMargin}px 0px`,
      }
    );
    const observer_leave = new IntersectionObserver(
      (e) => {
        if (
          (!e[0].isIntersecting &&
            window.innerHeight - e[0].boundingClientRect.top <
              target.current!.offsetHeight * exposeRatio) ||
          window.innerHeight - e[0].boundingClientRect.top < -bottomMargin
        ) {
          setIsRunning(false);
        }
      },
      {
        threshold: exposeRatio,
        rootMargin: `0px 0px ${bottomMargin}px 0px`,
      }
    );
    observer_enter.observe(target.current!);
    observer_leave.observe(target.current!);
  }, []);
}

export function useInViewAnime_p(
  target: targetTy,
  setIsRunning: (set: boolean) => void,
  { bottomMargin = 0, exposeRatio = 0 }: option
) {
  return useEffect(() => {
    const observer_enter = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) setIsRunning(true);
      },
      {
        rootMargin: `0px 0px ${
          -target.current!.offsetTop -
          target.current!.offsetHeight * exposeRatio +
          bottomMargin
        }px 0px`,
      }
    );
    const observer_leave = new IntersectionObserver(
      (e) => {
        if (
          !e[0].isIntersecting &&
          window.innerHeight - e[0].boundingClientRect.top <
            e[0].boundingClientRect.top +
              target.current!.offsetTop +
              target.current!.offsetHeight * exposeRatio -
              bottomMargin
        ) {
          setIsRunning(false);
        }
      },
      {
        rootMargin: `0px 0px ${
          -target.current!.offsetTop -
          target.current!.offsetHeight * exposeRatio +
          bottomMargin
        }px 0px`,
      }
    );
    observer_enter.observe(target.current!.parentElement!);
    observer_leave.observe(target.current!.parentElement!);
  }, []);
}
