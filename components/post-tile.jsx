import Image from "next/image";

function PostTile({ PostTitle, PostDescription, imageUrl, altTag }) {
  return (
    <div className="border-primary-black group/card border max-w-lg h-72 flex flex-col justify-end p-5 relative bg-gradient-to-t from-white to-transparent">
      <Image
        src={imageUrl}
        alt={altTag}
        width={1000}
        height={1000}
        className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
      />
      <p className="text-highlight-purple small_spaced_text lg:hidden font-semibold">
        Read in 2 min
      </p>
      <h2 className="small_spaced_text font-semibold">{PostTitle}</h2>
      <p className="text-[14px]">{PostDescription}</p>
      <button className="border  group/button border-highlight-purple py-[5px] px-[16px] text-highlight-purple bg-transparent duration-500 ease-in-out hover:bg-highlight-purple hover:text-secondary-white text-center text-sm font-inter lg:flex items-center justify-center w-fit tracking-button-spacing uppercase mt-5 hidden">
        Read in 2 min
        <div className="hidden group-hover/card:block group-hover/button:hidden pl-3">
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
  );
}

export default PostTile;
