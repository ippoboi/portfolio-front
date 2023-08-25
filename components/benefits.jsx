import Image from "next/image";

const Benefits = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 max-w-xs">
      <Image
        src="/icons/benefits/Solve-Problems.png"
        width={100}
        height={100}
        alt="decorative icon to describe the problems I solve on the website"
      />
      <h3 className="spaced_text text-highlight-purple"> {title}</h3>
      <div className="bg-primary-black h-[1px] w-20"></div>
      <p className="text-center md:w-full w-4/5 text-[14px] xl:text-[16px]">
        {description}
      </p>
    </div>
  );
};

export default Benefits;
