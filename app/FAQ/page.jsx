import FaqComponent from "@components/faq-component";
import Form from "@components/form";
import faqData from "@data/faq.json";
import { AiOutlineSearch } from "react-icons/ai";

export default function FAQ() {
  return (
    <div className="w-full bg-primary-black flex flex-col justify-center items-center border-b-[1px] border-white">
      {/* FAQ */}
      <section className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl max-w-2xl w-full text-white flex flex-col justify-center items-center gap-20 pt-20 pb-20 px-5 lg:px-0 mt-20">
        <h1 className="text-[18px] md:text-[32px] tracking-small-title uppercase text-center">
          How can I help you ?
        </h1>
        <div className="w-full max-w-3xl border-b-[1px] border-white flex justify-center items-center">
          <AiOutlineSearch size={20} className="pl-5 w-10" />
          <input
            className="w-full bg-primary-black p-5 small_spaced_text font-light placeholder:text-white/50 focus:outline-none"
            placeholder="Search..."
          />
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
      </section>
      <section className="text-white flex flex-col mx-auto gap-20 pt-20 pb-32 justify-center items-center px-5 lg:px-0">
        <div className="text-center w-full max-w-3xl">
          <h2 className="lg:text-[32px] text-[20px] tracking-small-title uppercase">
            YOU DIDN’T FOUND YOUR ANSWER ?
          </h2>
          <p className="lg:text-[20px] text-[16px] tracking-small-title uppercase text-gray-200 mt-2">
            SEND ME AN EMAIL!
          </p>
        </div>
        <Form
          isBlack={false}
          btnMessage={"Ask Me"}
          messagePlaceholder={
            "Hello, I am John Doe and I wanted to ask you about..."
          }
        />
      </section>
    </div>
  );
}
