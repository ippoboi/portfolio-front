import FaqComponent from "@components/faq-component";
import Features from "@components/features";
import Image from "next/image";
import faqData from "@data/faq.json";
import Form from "@components/form";
import Benefits from "@components/benefits";
import Testimonials from "@components/testimonials";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex justify-center items-center lg:items-start flex-col gap-20 mx-auto mt-10 lg:mt-0">
        <div className="relative flex lg:flex-row flex-col-reverse max-w-6xl 2xl:max-w-7xl items-center">
          <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-2xl max-w-xs flex flex-col items-center justify-center lg:items-start">
            <h1 className="big_title lg:text-[40px] text-center lg:text-left leading-5 mb-12">
              <span className="leading-10">GROW YOUR BUSINESS</span> <br />
              <span className="small_spaced_text lg:text-[24px] lg:font-light">
                WITH A HIGH CONVERSION RATE WEBSITE
              </span>
            </h1>
            <div className="bg-primary-black h-[1px] w-20" />
            <p className="small_spaced_text text-center lg:text-left lg:max-w-xl md:max-w-lg mt-5">
              Listening and understanding your problems as a Business Owner is
              my top priority, I CREATE websites THAT are thought to solve them
              first.
            </p>
            <a
              className="outline_btn_black w-fit mt-20 mx-auto lg:mx-0"
              href="#contact"
            >
              WORK WITH ME
            </a>
          </div>
          <div className="lg:relative lg:max-w-3xl md:max-w-lg max-w-xs -z-10 ">
            <Image
              src="/images/Hero-Section-Photo.webp"
              alt="A Business Owner and a Worker are looking at a computer screen and the business owner is pointing to the screen."
              width={600}
              height={400}
              className=" lg:right-6 border border-primary-black"
            />
            <div className="w-[600px] h-[400px] right-6 absolute bg-gradient-radial from-transparent from-70% to-white"></div>
          </div>
        </div>
      </section>

      {/* Pob Sol Section */}
      <section className="bg-primary-black text-white flex flex-col gap-20 lg:pt-32 pt-20 pb-20 px-5 lg:px-0">
        <div className="flex lg:flex-row flex-col-reverse gap-10 2xl:max-w-7xl lg:max-w-6xl mx-auto">
          {/* Video */}
          <div className="border border-white py-5 h-fit">
            <iframe
              className="xl:w-[600px] lg:w-[450px] w-full md:h-96 lg:h-64 h-48 xl:h-96 "
              src={"https://www.youtube.com/embed/9No-FiEInLA"}
              allowFullScreen
            ></iframe>
          </div>
          {/* Text */}
          <div className="flex flex-col gap-5 lg:w-96 xl:w-full">
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
      <section className="text-primary-black flex flex-col mx-auto gap-20 pt-20 pb-32 px-5 xl:px-0">
        <div className="text-center">
          <h2 className="medium_big_title">BENEFITS</h2>
          <p className="small_title text-gray-800">
            What I DO IT BETTER THAN OTHERS
          </p>
        </div>
        <div className="relative flex lg:flex-row flex-col gap-20 justify-center items-center">
          <div className="absolute md:-left-4 xl:-left-10 -top-10 left-0 border-t-[1px] border-l-[1px] border-primary-black w-10 h-10"></div>
          <div className="absolute -bottom-10 md:-right-4 xl:-right-10 right-0 border-r-[1px] border-b-[1px] border-primary-black w-10 h-10"></div>
          <Benefits
            title={"SOLVING PROBLEMS"}
            description={
              "I want to make a website that solves your business problems, so you think that you made a good choice choosing this tool to grow your business"
            }
            imageUrl={"/icons/benefits/Solve-Problems.png"}
          />
          <Benefits
            title={"CREATING STRATEGIES"}
            description={
              "I plan the website structure and functionalities to have a higher engagement from the visitors, and higher conversion rates than website with only design in mind"
            }
            imageUrl={"/icons/benefits/Planning.png"}
          />
          <Benefits
            title={"SPEED IS KEY"}
            description={
              "I know that time is money, and things happen fast in the world. I am trained to create excellent websites in the fastest way possible"
            }
            imageUrl={"/icons/benefits/Speed.png"}
          />
        </div>
      </section>

      {/* About me Section */}
      <section className="text-primary-black flex flex-col justify-center items-center mx-auto gap-20 pt-20 pb-32 px-5 xl:px-0">
        <div className="relative">
          <div className="absolute md:-left-10 -top-5 -left-2 border-t-[1px] border-l-[1px] border-primary-black w-10 h-10"></div>
          <div className="absolute -bottom-5 md:-right-10 -right-2 border-r-[1px] border-b-[1px] border-primary-black w-10 h-10"></div>
          <h2 className="lg:text-[32px] text-[20px] tracking-small-title lg:tracking-medium-big-title uppercase text-center">
            THEN, WHAT ABOUT ME ?
          </h2>
        </div>
        <div className="flex gap-20 flex-col lg:flex-row">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative border border-primary-black pr-3 pb-3 w-[310px] h-[340px]">
              <div className="absolute -top-3 -left-3 border border-primary-black w-[310px] h-[340px]"></div>
              <Image />
            </div>
            <p className="small_title italic max-w-xs text-center">
              “IT STARTED AS A HOBBY, AND BECAME MY LIFE DRIVING PASSION.”
            </p>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="bg-primary-black h-[1px] w-20"></div>
              <div className="bg-primary-black h-[1px] w-10"></div>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center lg:items-start">
            <h4 className="lg:text-[24px] tracking-medium-title text-[20px] uppercase text-center lg:text-left">
              HELLO, MY NAME IS{" "}
              <span className="bg-gradient-to-t from-highlight-purple/60 from-40% to-transparent to-40% font-semibold">
                DIMITAR
              </span>
              .
            </h4>
            <p className="max-w-2xl tracking-small-text text-[16px] text-justify">
              I ASPIRE TO CREATE BEAUTIFUL WEBSITES THAT HAS A{" "}
              <strong>REAL VALUE</strong> TO MY CLIENTS AND THEIR BUSINESS.{" "}
              <br />
              <br />I STARTED MY JOURNEY 2 YEARS AGO BY THE BASICS OF WEB
              DEVELOPMENT. THEN LEARNED MY WAY THROUGH TRY AND ERROR LIKE EVERY
              DEVELOPER, TO CREATE <strong>BETTER WEBSITES</strong> DAY BY DAY.{" "}
              <br />
              <br />
              BACK THEN, I WAS ONLY THINKING OF IMPROVING MY WEBSITES DESIGN,
              WITHOUT EVEN THINKING THAT THE BUSINESS OWNER I HAD AS A CLIENT,
              WAS PAYING ME TO COME UP WITH A TOOL THAT ENABLES HIM TO{" "}
              <strong>SALE MORE</strong>
              AND <strong>GROW HIS BUSINESS</strong>.
              <br />
              <br /> NOW, I LISTEN AND UNDERSTAND BETTER WHAT MY CLIENTS WANT :
              A TOOL TO <strong>PROMOTE</strong> THEIR BUSINESS ONLINE, GET MORE{" "}
              <strong>CONVERSION RATES</strong>, AND STILL HAVE A GREAT DESIGN.{" "}
              <br />
              <br />
              FROM THE FIRST CALL TO THE END PRODUCT, I GUIDE THROUGH THE ENTIRE
              PROCESS AND GIVE YOU THE KEYS TO{" "}
              <strong>EXPAND YOUR PRESENCE ONLINE</strong> AND{" "}
              <strong>REACH NEW CLIENTS</strong>.
            </p>
            <div className="bg-primary-black h-[1px] w-20"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="tracking-small-text text-[16px] text-center">
            LET’S START DISCUSSING YOUR PROJECT.
          </p>
          <a className="outline_btn_black mx-auto lg:mx-0" href="#contact">
            WORK WITH ME
          </a>
        </div>
        <div className="mx-auto flex flex-col items-center gap-5">
          <p className="small_title text-light-gray -mr-[3px]">TESTIMONIALS</p>
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

      {/* Testimonials Section */}
      <section className="bg-primary-black text-white flex flex-col gap-20 pt-20 pb-20 px-5 xl:px-0">
        <div className="text-center">
          <h2 className="medium_big_title">TESTIMONIALS</h2>
          <p className="small_title text-gray-300">My clients talk about me</p>
        </div>
        <div className="mx-auto 2xl:max-w-7xl lg:max-w-6xl md:max-w-xl max-w-xs w-full flex gap-5 justify-center items-center flex-col lg:flex-row">
          <Testimonials />
          <Testimonials />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="tracking-small-text text-[16px] text-center">
            ONE CLICK TO NEW CLIENTS AND BETTER CONVERSION RATES
          </p>
          <a className="outline_btn_white mx-auto lg:mx-0" href="#contact">
            WORK WITH ME
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-primary-black flex flex-col mx-auto gap-20 pt-20 pb-32">
        <div className="text-center">
          <h2 className="medium_big_title">FEATURES</h2>
          <p className="small_title text-gray-800">HOW I WILL CREATE VALUE</p>
        </div>
        <div className="flex flex-col gap-20 items-center">
          <div className="grid lg:grid-cols-3 grid-cols-1 grid-rows-3 lg:grid-rows-1 xl:gap-40 gap-20">
            <Features
              iconSrc={"/icons/features/design.png"}
              title={"DESIGN"}
              alt={"decorative icon to describe my design skills"}
              description={
                "Sales first, Design Second. Yet, a good-looking design is still mandatory to have."
              }
            />
            <Features
              iconSrc={"/icons/features/dev.png"}
              title={"DEVELOPMENT"}
              alt={"decorative icon to describe my development skills"}
              description={
                "Sales first, Design Second. Yet, a good-looking design is still mandatory to have."
              }
            />
            <Features
              iconSrc={"/icons/features/seo.png"}
              title={"BASIC SEO"}
              alt={"decorative icon to describe my SEO skills"}
              description={
                "Sales first, Design Second. Yet, a good-looking design is still mandatory to have."
              }
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center xl:gap-40 gap-20">
            <Features
              iconSrc={"/icons/features/rocked-speed.png"}
              title={"SPEED"}
              alt={
                "decorative icon to describe that the website I build are fast"
              }
              description={
                "Sales first, Design Second. Yet, a good-looking design is still mandatory to have."
              }
            />
            <Features
              iconSrc={"/icons/features/perf.png"}
              title={"PERFORMANCE"}
              alt={
                "decorative icon to describe that the website I build are performant"
              }
              description={
                "Sales first, Design Second. Yet, a good-looking design is still mandatory to have."
              }
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary-black text-white flex flex-col gap-20 pt-20 pb-20 px-5 lg:px-0">
        <div className="text-center">
          <h2 className="medium_big_title">FAQ</h2>
          <p className="small_title text-gray-300">I ANSWER YOUR QUESTIONS</p>
        </div>
        <div className="mx-auto ">
          {faqData.map((item, index) => (
            <FaqComponent
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <a className="outline_btn_white mx-auto lg:mx-0" href="/FAQ">
            MORE ANSWERS HERE
          </a>
        </div>
        <div className="mx-auto flex flex-col items-center gap-5">
          <p className="small_title text-light-gray -mr-[3px]">WORK WITH ME</p>
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

      {/* Contact Section */}
      <section
        id="contact"
        className="text-primary-black flex flex-col mx-auto gap-20 pt-20 pb-32 justify-center items-center px-5 lg:px-0"
      >
        <div className="text-center">
          <h2 className="lg:text-[32px] text-[20px] tracking-small-title uppercase">
            DO YOU WANT TO WORK WITH ME ?
          </h2>
          <p className="lg:text-[20px] text-[16px] tracking-small-title uppercase text-gray-800 mt-2">
            LET’S DISCUSS ABOUT YOUR PROJECT !
          </p>
        </div>

        <Form
          isBlack={true}
          btnMessage={"send it"}
          messagePlaceholder={
            "Hello, I am the owner of a small restaurant at X and I want to expand my presence online. I already have some ideas about..."
          }
        />
      </section>
    </div>
  );
};

export default Home;
