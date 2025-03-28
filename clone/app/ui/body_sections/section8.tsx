import clsx from "clsx";
import Link from "next/link";

export function Section8() {
  return (
    <section className="grid auto-cols sm:h-[720px] sm:grid-cols-2">
      <article
        className={clsx(
          "row-span-1 sm:row-span-2 col-span-1",
          "flex flex-col justify-center items-center"
        )}
        style={{
          backgroundImage: "url('/counsel-bg01.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundColor: "oklch(0.59 0.28 299.22)",
        }}
      >
        <Link href="#" className="w-fit h-fit">
          <h2 className="text-4xl font-extrabold text-white">
            경일게임아카데미 상담신청
          </h2>
          <p className="py-10 text-3xl text-white text-center leading-10">
            게임업계 취업을 위한 <br /> <strong>가장 빠른 방법</strong>
          </p>
          <button className="w-full py-6 bg-white text-2xl text-indigo-600 font-semibold rounded-[400px]">
            바로가기
          </button>
        </Link>
      </article>
      <article className="bg-red-300 row-span-1 col-span-1"></article>
      <article className="bg-pink-300 row-span-1 col-span-1"></article>
    </section>
  );
}
