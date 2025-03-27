import clsx from "clsx";
import { motion, useInView } from "motion/react";
import { Ref, useCallback, useEffect, useId, useRef, useState } from "react";
import useInViewAnime from "../hooks/useInViewAnime";
import Link from "next/link";

export const CenterContainer = ({
  children,
  className,
  className_wrapper,
}: {
  children: React.ReactNode;
  className?: string;
  className_wrapper?: string;
}) => {
  return (
    <div className={clsx("flex justify-center w-full", className)}>
      <div
        className={clsx(
          "flex flex-col justify-center w-[90%] xl:w-[1200px]",
          className_wrapper
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const CenterContainer_article = ({
  children,
  className,
  className_wrapper,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  className_wrapper?: string;
  ref?: Ref<HTMLElement | null>;
}) => {
  return (
    <article
      className={clsx("flex justify-center w-full", className)}
      ref={ref}
    >
      <div
        className={clsx(
          "flex flex-col justify-center w-[90%] xl:w-[1200px]",
          className_wrapper
        )}
      >
        {children}
      </div>
    </article>
  );
};

export const CenterContainer_section = ({
  children,
  className,
  className_wrapper,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  className_wrapper?: string;
  ref?: Ref<HTMLElement | null>;
}) => {
  return (
    <section
      className={clsx("flex justify-center w-full", className)}
      ref={ref}
    >
      <div
        className={clsx(
          "flex flex-col justify-center w-[90%] xl:w-[1200px]",
          className_wrapper
        )}
      >
        {children}
      </div>
    </section>
  );
};

export const Bottom_btn = ({
  children,
  wrapper_cls,
  cls,
  href,
}: {
  children: string;
  cls?: string;
  wrapper_cls?: string;
  href: string;
}) => {
  return (
    <div className={clsx("flex justify-center items-center", wrapper_cls)}>
      <Link
        href={href}
        className={clsx(
          "flex justify-center items-center bg-indigo-500 hover:bg-indigo-600 text-center text-sm sm:text-lg text-white font-bold rounded-4xl",
          cls
        )}
      >
        {children}
      </Link>
    </div>
  );
};
