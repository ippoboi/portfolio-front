import Image from "next/image";

function HeroPostTile({ PostTitle, PostDescription, imageUrl, altTag }) {
  return (
    <div className="flex h-[600px] group/card flex-col justify-end p-10 relative bg-gradient-to-t from-white to-transparent items-center">
      <Image
        src={imageUrl}
        alt={altTag}
        width={1000}
        height={1000}
        className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
      />
      <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-2xl max-w-xs w-full flex flex-col gap-5 ">
        <h2 className="lg:text-[32px] text-[20px] lg:tracking-medium-title tracking-small-title uppercase font-semibold max-w-4xl">
          {PostTitle}
        </h2>
        <div className="h-[1px] bg-primary-black w-20 lg:mt-5"></div>
        <p className="text-[14px] small_spaced_text max-w-3xl">
          {PostDescription}
        </p>
        <button className="border  group/button border-highlight-purple py-[5px] px-[16px] text-highlight-purple bg-transparent duration-500 ease-in-out hover:bg-highlight-purple hover:text-secondary-white text-center text-sm font-inter lg:flex items-center justify-center w-fit tracking-button-spacing uppercase mt-5 hidden">
          Read More
          <div className="hidden group-hover/card:block group-hover/button:hidden  pl-3">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1H10M10 1V10M10 1L1 10" stroke="#C51EFF" />
            </svg>
          </div>
          <div className="group-hover/button:block hidden duration-500 ease-in-out pl-3">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1H10M10 1V10M10 1L1 10" stroke="white" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default HeroPostTile;
