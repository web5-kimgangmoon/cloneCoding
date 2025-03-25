import Link from "next/link";
import { CenterContainer_section } from "../public";

export default function Section3() {
  return (
    <CenterContainer_section
      className="py-12 bg-[url('/bg.png')] bg-no-repeat bg-cover text-white"
      className_wrapper="items-center"
    >
      <h1 className="text-center text-2xl sm:text-[3rem] font-extrabold pb-8">
        Since 1988
        <br className="sm:hidden" /> 경일게임아카데미
      </h1>
      <p className="text-center sm:text-2xl pb-8">
        경일전산원으로 시작하여
        <br className="sm:hidden" />
        고용노동부 <strong>8년 연속</strong> 우수훈련 기관,
        <br className="sm:hidden" />
        <strong>아카데미 최초</strong> 기업 맞춤형 교육과정 승인,
        <br /> 직업능력의 달 국무총리상을 수상하며
        <br className="sm:hidden" />
        서울 강동 지역의
        <br className="sm:hidden" />
        대표 IT학원으로 자리 잡았습니다.
      </p>

      <Link
        href="#"
        className="flex justify-center items-center w-[228px] sm:h-16 h-12 bg-white text-sm sm:text-lg text-indigo-700 font-semibold rounded-[400px]"
      >
        회사소개 더보기
      </Link>
    </CenterContainer_section>
  );
}
