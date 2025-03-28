import { RefObject, useEffect, useRef, useState } from "react";

type targetTy = RefObject<
  HTMLElement | HTMLDivElement | HTMLHeadingElement | null
>;

type setTy = (set: boolean) => void;

interface option {
  bottomMargin: number;
  exposeRatio: number;
}

export default function useInViewAnime(
  target: targetTy,
  setIsRunning: setTy,
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
  setIsRunning: setTy,
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

    return () => {
      observer_enter.disconnect();
      observer_leave.disconnect();
    };
  }, []);
}

export function useInViewAnime_p_arr(
  targets: targetTy[],
  setIsRunning: setTy[],
  { bottomMargin = 0, exposeRatio = 0 }: option
) {
  return useEffect(() => {
    const observers_enter: IntersectionObserver[] = [];
    const observers_leave: IntersectionObserver[] = [];

    targets.map((target, idx) => {
      observers_enter.push(
        new IntersectionObserver(
          (e) => {
            if (e[0].isIntersecting) setIsRunning[idx](true);
          },
          {
            rootMargin: `0px 0px ${
              -target.current!.offsetTop -
              target.current!.offsetHeight * exposeRatio +
              bottomMargin
            }px 0px`,
          }
        )
      );
      observers_leave.push(
        new IntersectionObserver(
          (e) => {
            if (
              !e[0].isIntersecting &&
              window.innerHeight - e[0].boundingClientRect.top <
                e[0].boundingClientRect.top +
                  target.current!.offsetTop +
                  target.current!.offsetHeight * exposeRatio -
                  bottomMargin
            ) {
              setIsRunning[idx](false);
            }
          },
          {
            rootMargin: `0px 0px ${
              -target.current!.offsetTop -
              target.current!.offsetHeight * exposeRatio +
              bottomMargin
            }px 0px`,
          }
        )
      );
      observers_enter[idx].observe(target.current!.parentElement!);
      observers_leave[idx].observe(target.current!.parentElement!);
    });
    return () => {
      targets.forEach((_, idx) => {
        observers_enter[idx].disconnect();
        observers_leave[idx].disconnect();
      });
    };
  }, []);
}

// export const mk_inveiwAnime = (
//   setIsRunning: (is: boolean) => void,
//   margin: number,
//   amount: number,
//   moveBottom_v: number
// ) => {
//   const onViewportEnter = (e: IntersectionObserverEntry | null) => {
//     // console.log(e!.target.children.namedItem("test"));
//     if (e!.isIntersecting) setIsRunning(true);
//   };
//   const onViewportLeave = (e: IntersectionObserverEntry | null) => {
//     if (
//       !e!.isIntersecting &&
//       (window.innerHeight - e!.boundingClientRect.top <
//         e!.boundingClientRect.height * amount + moveBottom_v ||
//         window.innerHeight - e!.boundingClientRect.top < -margin + moveBottom_v)
//     ) {
//       setIsRunning(false);
//     }
//   };
//   const mk_viewPort: (is: boolean) => {
//     margin: string;
//     amount: number | "some";
//   } = (isRunning: boolean) => ({
//     // margin: `0px 0px ${margin}px 0px`,
//     margin: isRunning
//       ? `0px 0px ${margin}px 0px`
//       : `0px 0px ${margin - moveBottom_v}px 0px`,
//     // margin: isRunning
//     //   ? `0px 0px ${margin}px 0px`
//     //   : `${-moveBottom_v}px 0px ${margin}px 0px`,
//     // margin: `${margin - moveBottom_v}px`,
//     amount: amount === 0 ? "some" : amount,
//   });

//   return { onViewportEnter, onViewportLeave, mk_viewPort };
// };

// export const mk_inveiwAnime_p = (
//   id:string,
//   setIsRunning: (is: boolean) => void,
//   margin: number,
//   moveBottom_v: number
// ) => {
//   const onViewportEnter = (e: IntersectionObserverEntry | null) => {
//     if (e!.isIntersecting) setIsRunning(true);
//     e!.boundingClientRect.top
//   };
//   const onViewportLeave = (e: IntersectionObserverEntry | null) => {
//     if (
//       !e!.isIntersecting &&

//         window.innerHeight - e!.boundingClientRect.top < -margin + moveBottom_v)
//      {
//       setIsRunning(false);
//     }
//   };
//   const mk_viewPort: (is: boolean) => {
//     margin: string;
//   } = (isRunning: boolean) => ({
//     margin: `${margin}px`
//   });

//   return { onViewportEnter, onViewportLeave, mk_viewPort };
// };
