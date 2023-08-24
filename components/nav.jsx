"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const Nav = () => {
  const [status, setStatus] = useState(false);
  const pathname = usePathname();
  return (
    <div className="fixed top-0 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-2xl max-w-xs w-full z-10 bg-white/50">
      <div className="flex justify-between backdrop-blur-md w-full border border-primary-black mt-5 lg:py-[5px] lg:pr-[5px] lg:pl-[30px] md:py-[17px] md:px-[30px] py-[15px] px-[12px] items-center">
        <div className="nav_text">
          <a href="/">Dimitar Dimitrov</a>
        </div>

        <button
          className="duration-300 ease-in-out lg:hidden"
          type="button"
          onClick={() => setStatus(!status)}
        >
          {status ? (
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L18.5 18.5" stroke="black" />
              <path d="M18.5 1L0.999999 18.5" stroke="black" />
            </svg>
          ) : (
            <svg
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="1" fill="#171717" />
              <rect y="9" width="24" height="1" fill="#171717" />
              <rect x="8" y="18" width="16" height="1" fill="#171717" />
            </svg>
          )}
        </button>

        <div className="nav_text hidden lg:flex items-center gap-10">
          <a
            href="/"
            className={`nav_link ${pathname === "/" ? "border-b-[1px]" : ""}`}
          >
            <span className="">Home</span>
          </a>
          <a
            href="/blog"
            className={`nav_link ${
              pathname === "/blog" ? "border-b-[1px]" : ""
            }`}
          >
            <span className="">Blog</span>
          </a>
          <a
            href="/FAQ"
            className={`nav_link ${
              pathname === "/FAQ" ? "border-b-[1px]" : ""
            }`}
          >
            <span className="">FAQ</span>
          </a>
          <a href="/" className="black_btn">
            Contact
          </a>
        </div>
      </div>
      {status && (
        <div className="nav_text backdrop-blur-md lg:hidden flex flex-col items-end border px-[20px] border-primary-black border-t-0">
          <a
            href="/"
            className={`py-[17px] w-full text-right ${
              pathname === "/" ? "bg-primary-black text-white pr-[17px]" : ""
            }`}
          >
            <span className="-mr-[4px]">Home</span>
          </a>
          <div className="line w-full" />
          <a
            href="/blog"
            className={`py-[17px] w-full text-right ${
              pathname === "/blog"
                ? "bg-primary-black text-white pr-[17px]"
                : ""
            }`}
          >
            <span className="-mr-[4px]">Blog</span>
          </a>
          <div className="line w-full" />
          <a
            href="/FAQ"
            className={`py-[17px] w-full text-right ${
              pathname === "/FAQ" ? "bg-primary-black text-white pr-[17px]" : ""
            }`}
          >
            <span className="-mr-[4px]">FAQ</span>
          </a>
          <div className="line w-full" />
          <a href="/" className="black_btn my-[18px]">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
