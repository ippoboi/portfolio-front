import Image from "next/image";

const Features = ({ iconSrc, title, alt }) => {
  return (
    <div className="relative w-72 h-72 lg:w-64 lg:h-64 flex items-center justify-center">
      <div className="absolute left-0 top-0 border-t-[1px] border-l-[1px] border-primary-black w-10 h-10"></div>
      <div className="absolute bottom-0 right-0 border-r-[1px] border-b-[1px] border-primary-black w-10 h-10"></div>
      <div className="absolute right-0 top-0 border-t-[1px] border-r-[1px] border-primary-black w-10 h-10"></div>
      <div className="absolute bottom-0 left-0 border-l-[1px] border-b-[1px] border-primary-black w-10 h-10"></div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src={iconSrc} width={100} height={100} alt={alt} />
        <h4 className="text-[24px] tracking-smaller-title text-highlight-purple">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default Features;
