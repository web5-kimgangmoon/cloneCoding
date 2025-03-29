import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

export function Section8() {
  return (
    <section className="grid sm:h-[720px] sm:grid-cols-2 sm:grid-rows-2 text-center break-keep">
      <article
        className={clsx(
          "row-span-1 sm:row-span-2 col-span-1 bg-no-repeat bg-center bg-cover bg-blend-multiply bg-[url('/counsel-bg01.webp')]"
        )}
        style={{
          backgroundColor: "oklch(0.59 0.28 299.22)",
        }}
      >
        <Link
          href="#"
          className="flex flex-col justify-center items-center w-full h-full py-24"
        >
          <div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              경일게임아카데미 상담신청
            </h2>
            <p
              className="py-10 text-lg sm:text-3xl text-white text-center sm:leading-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="75"
            >
              게임업계 취업을 위한 <br /> <strong>가장 빠른 방법</strong>
            </p>
            <button
              className="w-full py-4 sm:py-6 bg-white sm:text-2xl text-indigo-600 font-semibold rounded-[400px] cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              바로가기
            </button>
          </div>
        </Link>
      </article>
      <article className="flex flex-col-reverse sm:flex-col row-span-1 sm:row-span-2 col-span-1">
        <div
          className={clsx(
            // "row-span-1 col-span-1",
            "w-full h-full",
            "bg-no-repeat bg-center bg-cover bg-blend-multiply bg-[url('/counsel-bg02.png')]"
          )}
          style={{ backgroundColor: "#d3c9c9" }}
        >
          <Link
            href="#"
            className="mx-auto flex flex-col justify-center w-fit h-full py-16"
          >
            <h2
              className="flex items-center justify-center sm:justify-between xl:justify-start xl:gap-9"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-white">
                내일배움캠프
              </span>
              <div className="hidden sm:block bg-white w-[24px] h-[24px] py-1 rounded-full text-[#514a4a]">
                <ChevronRightIcon className="w-full h-full" strokeWidth={2} />
              </div>
            </h2>
            <p
              className="pt-10 text-2xl sm:text-[1.6rem] text-gray-300 text-center sm:text-left font-semibold leading-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="75"
            >
              교육비 0원! 횟수 제한 없이! <br />
              금액걱정없이 내일배움캠프와 함께
            </p>
            <div className="flex justify-center pt-8">
              <div className="block sm:hidden bg-white w-[24px] h-[24px] py-1 rounded-full text-[#514a4a]">
                <ChevronRightIcon className="w-full h-full" strokeWidth={2} />
              </div>
            </div>
          </Link>
        </div>
        <div
          className={clsx(
            // "row-span-1 col-span-1",
            "w-full h-full py-12",
            "bg-no-repeat bg-center bg-cover bg-blend-multiply bg-[url('/counsel-bg03.png')]",
            "flex flex-col justify-center items-center"
          )}
        >
          <div className="w-full sm:w-[90%] max-w-[410px]">
            <h2 className="flex items-center justify-between pb-12 text-3xl font-extrabold">
              <span className="break-keep">취준생에서 직장인으로</span>
              <Link href="#" className="text-[#514a4a]">
                <PlusIcon className="w-[36px] h-[36px]" strokeWidth={2} />
              </Link>
            </h2>
            <div className="flex flex-col gap-4 sm:gap-8">
              <Line
                h={"(주)하이브로"}
                t_arr={["언리얼 엔진", "엔진언 2기", "유*원"]}
              />
              <Line
                h={"스노우파이프"}
                t_arr={["게임기획", "메타기획 4기", "김*일"]}
              />
              <Line
                h={"솔라디자인"}
                t_arr={["블록체인", "블록체인 10기", "박*현"]}
              />
              <Line
                h={"지앤아이소프트"}
                t_arr={["게임기획", "메타기획 3기", "신*헌"]}
                isH
              />
              <Line
                h={"모히또게임즈"}
                t_arr={["게임기획", "기획 36기", "홍*수"]}
                isH
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

const Line = ({
  h,
  t_arr,
  isH,
}: {
  h: string;
  t_arr: string[];
  isH?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "justify-between text-lg text-gray-600",
        isH ? "flex sm:hidden" : "flex"
      )}
    >
      <h4 className="inline text-indigo-600 font-semibold shrink-0">{h}</h4>
      <p className="w-2/3 sm:w-full text-right truncate">
        {t_arr.map((v, idx) => `${v}${idx !== 2 ? " | " : ""}`)}
        {/* {t_arr.map((v, idx) => (
          <Line_s t={v} key={idx} />
        ))} */}
      </p>
    </div>
  );
};

const Line_s = ({ t }: { t: string }) => {
  return (
    <span
      className={clsx(
        "relative px-[0.4rem] first:pl-0 last:pr-0",
        "after:content-[''] after:inline-block after:absolute after:bottom-1/2 after:right-0 after:translate-y-2 after:h-4 after:border-r last:after:border-r-0 after:border-gray-300"
      )}
    >
      {t}
    </span>
  );
};
