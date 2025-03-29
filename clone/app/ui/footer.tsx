import Link from "next/link";
import { CenterContainer_section } from "./public";

export default function Footer() {
  const menus_data = [
    ["교육과정", "#"],
    ["게임부트캠프", "#"],
    ["디벨로켓", "#"],
    ["내일배움캠프", "#"],
    ["K-Room", "#"],
    ["지원하기", "#"],
    ["Why? KGA", "#"],
  ];

  const p_data = [
    [
      "ADDRESS",
      "서울특별시 강동구 올림픽로 651 예경빌딩 4,5,6,10층 (지하철 5,8호선 2번출구 50m이내 스타벅스 건물)",
    ],

    ["TEL", "02-479-4050"],
    ["FAX", "02-479-4056"],
    ["마케팅&협업 문의", "marketing@kiweb.or.kr"],
  ];

  const company_data = [
    ["대표자 박병준", "개인정보관리책임자 서혁준"],
    ["사업자번호  212-81-89247", "통신판매허가번호  제2020-서울강동-1360호"],
  ];

  const social_data = [
    ["BLOG", "#"],
    ["FACEBOOK", "#"],
    ["YOUTUBE", "#"],
  ];
  return (
    <CenterContainer_section
      className="py-12 bg-footer text-white"
      className_wrapper=""
    >
      <ul className="flex flex-wrap gap-y-6 sm:gap-12 text-sm sm:text-lg font-semibold">
        {menus_data.map((v, idx) => (
          <li key={idx} className="w-1/2 sm:w-fit">
            <Link className="" href={v[1]}>
              {v[0]}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-2 sm:gap-3 pt-12 text-gray-400">
        {p_data.map((v, idx) => (
          <li
            className="flex flex-col sm:flex-row sm:items-center gap-y-2"
            key={idx}
          >
            <h5 className="w-32 font-bold text-[0.8rem] sm:text-base">
              {v[0]}
            </h5>
            <p className="h-max">{v[1]}</p>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-y-1 pt-8 pb-12 text-[0.8rem] sm:text-base">
        {company_data.map((v, idx) => (
          <li
            key={idx}
            className="flex flex-col gap-y-1 sm:flex-row text-gray-400 font-semibold"
          >
            <span className="relative sm:pr-2 after:hidden sm:after:inline-block after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:h-2/3 after:border-r after:border-gray-400">
              {v[0]}
            </span>
            <span className="sm:pl-2">{v[1]}</span>
          </li>
        ))}
      </ul>
      <div className="pt-12 border-t border-gray-400/20 font-bold text-[0.8rem] sm:text-base">
        <Link href={social_data[0][1]}>{social_data[0][0]}</Link>
        <span className="px-4">·</span>
        <Link href={social_data[1][1]}>{social_data[1][0]}</Link>
        <span className="px-4">·</span>
        <Link href={social_data[2][1]}>{social_data[2][0]}</Link>
      </div>
      <div className="block sm:hidden py-6 text-[0.8rem] text-gray-400">
        ©2022 Kyungil Technical College. All rights reserved.
      </div>
    </CenterContainer_section>
  );
}
