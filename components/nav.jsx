"use client";

import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between backdrop-blur-md fixed top-0 max-w-6xl w-full py-[5px] pr-[5px] pl-[30px] items-center border border-primary-black mt-5">
      <div className="nav_text">
        <a href="/">Dimitar Dimitrov</a>
      </div>
      <div className="nav_text flex items-center gap-10">
        <a
          href="/"
          className={`nav_link ${pathname === "/" ? "border-b-[1px]" : ""}`}
        >
          <span className="-mr-[4px]">Home</span>
        </a>
        <a
          href="/blog"
          className={`nav_link ${pathname === "/blog" ? "border-b-[1px]" : ""}`}
        >
          <span className="-mr-[4px]">Blog</span>
        </a>
        <a
          href="/FAQ"
          className={`nav_link ${pathname === "/FAQ" ? "border-b-[1px]" : ""}`}
        >
          <span className="-mr-[4px]">FAQ</span>
        </a>
        <a href="/" className="black_btn">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Nav;
