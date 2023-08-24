import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex justify-center items-center lg:items-start flex-col gap-20 mx-auto mt-10 lg:mt-0">
        <div className="relative flex lg:flex-row flex-col-reverse max-w-6xl 2xl:max-w-7xl items-center">
          <div className="max-w-xs md:max-w-lg lg:max-w-6xl 2xl:max-w-7xlflex flex-col items-center justify-center lg:items-start">
            <h1 className="big_title lg:text-[40px] text-center lg:text-left leading-5 mb-12">
              <span className="leading-10">GROW YOUR BUSINESS</span> <br />
              <span className="small_spaced_text lg:text-[24px] lg:font-light">
                WITH A HIGH CONVERSION RATE WEBSITE
              </span>
            </h1>
            <div className="line w-20 mx-auto" />
            <p className="small_spaced_text text-center lg:text-left lg:max-w-xl md:max-w-lg mt-5">
              Listening and understanding your problems as a Business Owner is
              my top priority, I CREATE websites THAT are thought to solve them
              first.
            </p>
            <button className="outline_btn_black mt-20 mx-auto lg:mx-0">
              WORK WITH ME
            </button>
          </div>
          <div className="lg:relative lg:max-w-3xl md:max-w-lg max-w-xs -z-10 ">
            <Image
              src="/images/Hero-Section-Photo.webp"
              alt="A Business Owner and a Worker are looking at a computer screen and the business owner is pointing to the screen."
              width={600}
              height={400}
              className=" lg:right-6"
            />
            <div className="w-[600px] h-[400px] right-6 absolute bg-gradient-radial from-transparent from-70% to-white"></div>
          </div>
        </div>
      </section>

      {/* Pob Sol Section */}
      <section className="bg-primary-black text-white flex flex-col gap-20 lg:pt-32 pt-20 pb-20 px-5 lg:px-0">
        <div className="flex lg:flex-row flex-col-reverse gap-10 2xl:max-w-7xl lg:max-w-6xl mx-auto ">
          {/* Video */}
          <div className="border border-white py-5">
            <iframe
              className="lg:w-[500px] w-full md:h-96 h-48 xl:h-full "
              src={"https://www.youtube.com/embed/9No-FiEInLA"}
              allowFullScreen
            ></iframe>
          </div>
          {/* Text */}
          <div className="flex flex-col gap-5">
            <p className="spaced_text text-justify lg:text-left">
              Your business is running good, AND you think a website can give
              you{" "}
              <strong className="bg-gradient-to-t from-highlight-purple from-40% to-transparent to-40%">
                more clients
              </strong>{" "}
              ? <br /> Or perhaps, you already have one, yet he seems to give
              you little to{" "}
              <strong className="bg-gradient-to-t from-highlight-purple from-40% to-transparent to-40%">
                no results
              </strong>
              .
            </p>
            <div className="bg-white h-[1px] w-20"></div>
            <p className="text-[18px] text-justify">
              You paid a Web Designer because you wanted to grow your presence
              online, but the web designer thought only about selling you a
              beautiful design without actually listening to your business
              problems ? <br /> Maybe your website is old and doesn’t match with
              your current offer or style, so you would like to pay a good web
              designer to listen and create one that better answer to your need
              as a business owner ?
            </p>
          </div>
        </div>
        <div className="2xl:max-w-7xl lg:max-w-6xl mx-auto flex flex-col items-center gap-10">
          <div className="flex justify-center items-center gap-10">
            <div className="bg-white h-[1px] hidden lg:block w-20"></div>
            <div>
              <p className="text-center small_spaced_text">
                I AM DIFFERENT from others web designers, <br />
                <span className="text-[26px]">
                  because I understand what you <br />
                  <span className="bg-gradient-to-t from-highlight-purple/80 from-40% to-transparent to-40%">
                    need
                  </span>
                  .
                </span>
              </p>
            </div>
            <div className="bg-white h-[1px] hidden lg:block w-20"></div>
          </div>

          <p className="lg:max-w-3xl  text-justify lg:text-center text-[20px]">
            As a Business Owner, you see websites is one of the many available
            tools that will help you grow your business. Therefore, I think
            first about listening and analyzing my clients problems before even
            thinking about the design aspect. I create a real strategy to keep
            the visitors more engaged with your website as well as increase
            conversion rates so you can sell more.
          </p>
        </div>
        <div className="mx-auto flex flex-col items-center gap-5">
          <p className="small_title text-light-gray -mr-[3px]">BENEFITS</p>
          <svg
            width="57"
            height="34"
            viewBox="0 0 57 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L28.5 13L56 1" stroke="#B8B8B8" />
            <path d="M1 21L28.5 33L56 21" stroke="#B8B8B8" />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="text-primary-black flex flex-col mx-auto gap-20 pt-20 pb-32 ">
        <div className="text-center">
          <h2 className="medium_big_title">BENEFITS</h2>
          <p className="small_spaced_text">What I DO IT BETTER THAN OTHERS</p>
        </div>
        <div className="relative flex lg:flex-row flex-col gap-20 justify-center items-end">
          <div className="absolute md:-left-10 -top-10 -left-2 border-t-[1px] border-l-[1px] border-primary-black w-10 h-10"></div>
          <div className="absolute -bottom-10 md:-right-10 -right-2 border-r-[1px] border-b-[1px] border-primary-black w-10 h-10"></div>
          <div className="flex flex-col justify-center items-center gap-2 max-w-xs">
            <Image
              src="/icons/benefits/Solve-Problems.png"
              width={100}
              height={100}
            />
            <h3 className="spaced_text text-highlight-purple">
              SOLVING PROBLEMS
            </h3>
            <div className="bg-primary-black h-[1px] w-20"></div>
            <p className="text-center md:w-full w-4/5">
              I want to make a website that solves your business problems, so
              you think that you made a good choice choosing this tool to grow
              your business
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 max-w-xs">
            <Image
              src="/icons/benefits/Planning.png"
              width={120}
              height={120}
            />
            <h3 className="spaced_text text-highlight-purple">
              CREATING STRATEGIES
            </h3>
            <div className="bg-primary-black h-[1px] w-20"></div>
            <p className="text-center md:w-full w-4/5">
              I plan the website structure and functionalities to have a higher
              engagement from the visitors, and higher conversion rates than
              website with only design in mind
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 max-w-xs">
            <Image src="/icons/benefits/Speed.png" width={90} height={90} />
            <h3 className="spaced_text text-highlight-purple">SPEED IS KEY</h3>
            <div className="bg-primary-black h-[1px] w-20"></div>
            <p className="text-center md:w-full w-4/5">
              I know that time is money, and things happen fast in the world. I
              am trained to create excellent websites in the fastest way
              possible
            </p>
          </div>
        </div>
      </section>

      {/* About me Section */}
      <section className="text-primary-black flex flex-col mx-auto gap-20 pt-20 pb-32 "></section>
    </div>
  );
};

export default Home;
