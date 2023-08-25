"use client";

import { useState } from "react";

const FaqComponent = ({ question, answer }) => {
  const [status, setStatus] = useState(false);
  return (
    <div className="flex items-center justify-start">
      {status ? (
        <div className="w-full max-w-3xl">
          <div
            className="flex items-center justify-between border-b-white border-b-[1px] p-5 cursor-pointer"
            onClick={() => setStatus(!status)}
          >
            <p className="uppercase tracking-smaller-title text-[14px] lg:text-[16px] font-light">
              {question}
            </p>
            <svg
              width="25"
              height="10"
              viewBox="0 0 30 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M29 15.2905L15 1.06299L1 15.2905" stroke="white" />
            </svg>
          </div>
          <div>
            <p className="text-white text-[14px]  p-5">{answer}</p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          <div
            className="flex items-center justify-between border-b-white border-b-[1px] p-5 cursor-pointer"
            onClick={() => setStatus(!status)}
          >
            <p className="uppercase tracking-smaller-title text-[14px] lg:text-[16px] font-light">
              {question}
            </p>
            <svg
              width="25"
              height="10"
              viewBox="0 0 30 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M29 15.2905L15 1.06299L1 15.2905" stroke="white" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqComponent;
