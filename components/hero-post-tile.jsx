import Image from "next/image";

const HeroPostTile = ({ PostTitle, PostDescription, imageUrl, altTag }) => {
  return (
    <div className="flex h-[600px] flex-col justify-end p-10 relative bg-gradient-to-t from-white to-transparent items-center">
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
        <button className="outline_btn_purple mt-5">Read More</button>
      </div>
    </div>
  );
};

export default HeroPostTile;
