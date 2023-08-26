"use client";
import { useState } from "react";
import Input from "./input";

const Form = ({ isBlack, btnMessage, messagePlaceholder }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form
      className="flex flex-col gap-5 w-full md:w-fit"
      onSubmit={handleSubmit}
    >
      <div className="flex md:flex-row flex-col gap-5">
        <Input inputTitle={"First Name"} placeholder={""} isBlack={isBlack} />
        <Input inputTitle={"Last Name"} placeholder={""} isBlack={isBlack} />
      </div>
      <Input
        inputTitle={"Email"}
        placeholder={""}
        isEmail={true}
        isBlack={isBlack}
      />
      <Input
        inputTitle={"Message"}
        isTextArea={true}
        placeholder={messagePlaceholder}
        isBlack={isBlack}
      />
      <div className="flex flex-col justify-center items-center mt-10">
        <button
          className={`${
            isBlack ? "outline_btn_black" : "outline_btn_white"
          } mx-auto lg:mx-0`}
          value={"submit"}
        >
          {btnMessage}
        </button>
      </div>
    </form>
  );
};

export default Form;
