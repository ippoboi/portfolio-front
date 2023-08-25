const Input = ({ inputTitle, isTextArea, placeholder, isEmail }) => {
  return (
    <div className="flex flex-col">
      <label className="uppercase tracking-small-text text-[14px]" for="">
        {inputTitle}
      </label>
      {!isTextArea ? (
        <input
          type={isEmail ? "email" : "text"}
          autoComplete={isEmail ? "off" : "on"}
          placeholder={placeholder}
          className={`border border-primary-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-black focus:border-transparent w-full`}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          rows={7}
          className={`border border-primary-black py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-black focus:border-transparent placeholder:text-gray-300 text-[14px] w-full`}
        />
      )}
    </div>
  );
};

export default Input;
