import Image from "next/image";

const PostTile = ({ PostTitle, PostDescription, imageUrl, altTag }) => {
  return (
    <div className="border-primary-black border max-w-md h-72 flex flex-col justify-end p-5 relative bg-gradient-to-t from-white to-transparent">
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
      <button className="border border-highlight-purple py-[5px] px-[16px] text-highlight-purple bg-transparent transition-all hover:bg-highlight-purple hover:text-secondary-white text-center text-sm font-inter lg:flex items-center justify-center w-fit tracking-button-spacing uppercase mt-5 hidden">
        Read in 2 min
      </button>
    </div>
  );
};

export default PostTile;
