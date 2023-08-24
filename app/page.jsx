import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="min-h-screen flex justify-center items-center lg:items-start flex-col gap-20">
        <div className="relative flex max-w-6xl 2xl:max-w-7xl items-center">
          <div className="max-w-xs md:max-w-lg lg:max-w-6xl 2xl:max-w-7xlflex flex-col items-center justify-center lg:items-start">
            <h1 className="big_title lg:text-[40px] text-center lg:text-left leading-5 mb-12">
              <span className="leading-10">GROW YOUR BUSINESS</span> <br />
              <span className="small_spaced_text lg:text-[24px] lg:font-light">
                WITH A HIGH CONVERSION RATE WEBSITE
              </span>
            </h1>
            <div className="line w-20" />
            <p className="small_spaced_text text-center lg:text-left lg:max-w-xl md:max-w-lg mt-5">
              Listening and understanding your problems as a Business Owner is
              my top priority, I CREATE websites THAT are thought to solve them
              first.
            </p>
            <button className="outline_btn_black mt-20">WORK WITH ME</button>
          </div>
          <div className="relative w-[600px] h-[400px] -z-10">
            <Image
              src="/images/Hero-Section-Photo.webp"
              alt="A Business Owner and a Worker are looking at a computer screen and the business owner is pointing to the screen."
              width={600}
              height={400}
              className="absolute right-6"
            />
            <div className="w-[600px] h-[400px] right-6 absolute bg-gradient-radial from-transparent from-70% to-white"></div>
          </div>
        </div>
      </section>

      {/* Pob Sol Section */}
      <section className="bg-primary-black"></section>
    </div>
  );
};

export default Home;
