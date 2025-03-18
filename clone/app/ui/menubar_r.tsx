import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const Menubar_r = () => {
  return (
    <aside className="fixed top-0 right-0 w-[6rem] h-full border-l border-gray-300 lg:block xs:hidden">
      <ul className="flex flex-col h-full text-center">
        <MenuList_text
          text={[
            ["국지지원", "안내", "#"],
            ["생활관", "소개", "#"],
          ]}
          className={["bg-purple-600 text-white", "bg-blue-500 text-white"]}
        />
        <MenuList_img
          text={[
            ["전화번호", "/aside_li01.png", "#"],
            ["위치안내", "/aside_li02.webp", "#"],
            ["자격조회", "/aside_li03.png", "#"],
            ["과정보기", "/aside_li04.png", "#"],
            ["수강후기", "/aside_li05.png", "#"],
            ["방문상담", "/aside_li06.png", "#"],
          ]}
        />
        <Menu className="bg-gray-800">
          <button
            className={clsx(
              "flex flex-col justify-center items-center gap-2 h-max",
              "font-bold text-white cursor-pointer"
            )}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div>
              <div
                className="border-b-[12px] border-l-[6px] border-r-[6px] border-white"
                style={{
                  borderLeftColor: "transparent",
                  borderRightColor: "transparent",
                }}
              ></div>
            </div>

            <span>TOP</span>
          </button>
        </Menu>
      </ul>
    </aside>
  );
};

const MenuList_text = ({
  text,
  className,
}: {
  text: [string, string, string][];
  className?: string[];
}) => {
  return text.map((v, idx) => (
    <Menu
      key={idx}
      className={clsx("text-whitec", className ? className[idx] : undefined)}
    >
      <Link href={v[2]}>
        {v[0]}
        <br />
        {v[1]}
      </Link>
    </Menu>
  ));
};

const MenuList_img = ({ text }: { text: [string, string, string][] }) => {
  return text.map((v, idx) => (
    <Menu
      key={idx}
      className={clsx(
        text.length - 1 !== idx && "border-b",
        "border-gray-300 bg-white"
      )}
    >
      <Link
        href={v[2]}
        className={clsx(
          "flex flex-col justify-center items-center gap-2 h-max",
          "font-bold"
        )}
      >
        <Image width={36} height={36} src={v[1]} alt={v[1]} />
        {v[0]}
      </Link>
    </Menu>
  ));
};

const Menu = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <li
      className={clsx(
        "flex flex-col justify-center items-center h-full font-bold",
        className
      )}
    >
      {children}
    </li>
  );
};
