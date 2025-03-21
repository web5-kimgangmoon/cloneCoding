import Image from "next/image";
import { CenterContainer, CenterContainer_article } from "../public";
import clsx from "clsx";
import Link from "next/link";
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export const Section2 = () => {
  return (
    <section>
      <Article_1 />
      <Article_2 />
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
        <div className="flex items-center select-none">
          <Image
            className="inline-block"
            width={60}
            height={60}
            src={"/award1.webp"}
            alt="award1.webp"
          ></Image>
          <span className="pl-5 pr-10 text-lg text-gray-900">
            대한민국 No.1 교육 부문 대상
          </span>
        </div>
      </div>
    </CenterContainer_article>
  );
};

export const Article_2 = () => {
  return (
    <CenterContainer_article className="pt-32">
      <h2 className="text-center text-lg text-indigo-600 font-bold">
        KYUNGIL COURSE
      </h2>
      <h1 className="pt-8 pb-12 text-center text-4xl font-bold">
        능력으로 인정 받는 슈퍼신입으로 만들어드립니다.
      </h1>
      <div className="flex gap-6 w-full h-88">
        <div className="w-full flex-[1] p-12 from-indigo-600 to-violet-400 bg-gradient-to-br rounded-3xl">
          <Link href={"#"} className="block w-max text-white">
            <h3 className="w-max text-2xl font-bold leading-10">
              현업 경력 10년 이상의 <br />
              베테랑에게 배우는 실무
              <br />
              중점 교육
            </h3>
            <h4 className="w-max pt-3 font-bold">
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
          <div className="h-full">
            <div className="h-full flex flex-col justify-center items-center bg-gray-200 rounded-3xl">
              <h3 className="flex items-center text-2xl font-bold text-violet-600">
                <span className="pr-2">기획</span>
                <ChevronRight />
              </h3>
              <p className="pt-1 text-center leading-5">
                기획의 이해부터 <br /> 게임을 제작하고 론칭까지
              </p>
            </div>
            <div hidden></div>
          </div>
          <div className="h-full bg-gray-200 rounded-3xl"></div>
        </div>
        <div className="w-full flex-[1.35] bg-black">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </CenterContainer_article>
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
