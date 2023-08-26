import Image from "next/image";

const Features = ({ iconSrc, title, alt, description }) => {
  return (
    <div className="relative w-72 h-72 lg:w-64 lg:h-64 flex items-center justify-center text-highlight-purple hover:text-white hover:bg-primary-black group">
      <div className="absolute left-0 top-0 border-t-[1px] border-l-[1px] border-primary-black group-hover:border-white w-10 h-10 "></div>
      <div className="absolute bottom-0 right-0 border-r-[1px] border-b-[1px] border-primary-black group-hover:border-white w-10 h-10"></div>
      <div className="absolute right-0 top-0 border-t-[1px] border-r-[1px] border-primary-black group-hover:border-white w-10 h-10"></div>
      <div className="absolute bottom-0 left-0 border-l-[1px] border-b-[1px] border-primary-black group-hover:border-white w-10 h-10"></div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={iconSrc}
          width={100}
          height={100}
          alt={alt}
          className="group-hover:hidden"
        />
        <h4 className="text-[24px] tracking-smaller-title uppercase">
          {title}
        </h4>
        <p className="small_spaced_text text-center text-white hidden group-hover:block">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Features;
