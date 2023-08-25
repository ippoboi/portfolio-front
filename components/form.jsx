"use client";
import { useState } from "react";
import Input from "./input";

const Form = () => {
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
        <Input inputTitle={"First Name"} placeholder={""} />
        <Input inputTitle={"Last Name"} placeholder={""} />
      </div>
      <Input inputTitle={"Email"} placeholder={""} isEmail={true} />
      <Input
        inputTitle={"Quick Description"}
        isTextArea={true}
        placeholder={
          "Hello, I am the owner of a small restaurant at X and I want to expand my presence online. I already have some ideas about..."
        }
      />
      <div className="flex flex-col justify-center items-center mt-10">
        <button className="outline_btn_black mx-auto lg:mx-0" value={"submit"}>
          SEND IT !
        </button>
      </div>
    </form>
  );
};

export default Form;
