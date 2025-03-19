import clsx from "clsx";
import { CSSProperties } from "react";

export const Arrow = ({
  style,
  className,
}: {
  style?: CSSProperties;
  className?: string;
}) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("h-2.5 w-4 shrink-0 sm:h-4 sm:w-6", className)}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.93934 8.93934C4.52513 8.35355 5.47487 8.35355 6.06066 8.93934L15 17.8787L23.9393 8.93934C24.5251 8.35355 25.4749 8.35355 26.0606 8.93934C26.6464 9.52513 26.6464 10.4749 26.0606 11.0607L16.0607 21.0607C15.7793 21.342 15.3978 21.5 15 21.5C14.6022 21.5 14.2206 21.342 13.9393 21.0607L3.93934 11.0607C3.35355 10.4749 3.35355 9.52513 3.93934 8.93934Z"
        fill="black"
      ></path>
    </svg>
  );
};
