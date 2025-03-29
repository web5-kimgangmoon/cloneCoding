import Image from "next/image";
import { Bottom_btn, CenterContainer_article } from "../public";
import clsx from "clsx";

export function Section7() {
  return (
    <section className="py-16 sm:py-32 bg-violet-100">
      <small className="block mx-auto text-[1.05rem] sm:text-xl font-bold text-violet-600 text-center break-keep">
        KYUNGIL TEACHER
      </small>
      <div className="flex flex-col sm:flex-row pt-4 m-auto justify-center items-center text-3xl sm:text-[2.65rem] lg:text-5xl text-center break-keep font-extrabold sm:tracking-[-0.08rem]">
        <h1 className="leading-12">현업 개발자, PM 출신의</h1>
        <strong className="pl-2 text-violet-600 sm:leading-15">
          독보적인 교수진
        </strong>
      </div>
      <div className="flex flex-col-reverse sm:flex-col">
        <p className="pt-8 m-auto text-sm sm:text-2xl font-semibold text-center break-keep whitespace-pre-line leading-7 sm:leading-10">
          <strong className="text-violet-600 underline font-semibold">
            2,500명
          </strong>{" "}
          {`이상의 수료생 배출! 
          직업훈련포털(HRD-Net) 수강생 평균 만족도`}{" "}
          <strong className="text-violet-600 underline font-semibold">
            90점!
          </strong>
        </p>
        <Image
          //   src={"/teacher.webp"}
          src={"/#"}
          alt="초상권 때문에 교체합니다"
          width={1542}
          height={603}
          className={clsx("w-full pt-10", "aspect-[12/5] bg-yellow-300")}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <Bottom_btn
        href="#"
        cls="w-56 h-11 sm:h-15 transition-colors duration-400"
        wrapper_cls="pt-8"
      >
        교직원 소개 바로가기
      </Bottom_btn>
    </section>
  );
}
