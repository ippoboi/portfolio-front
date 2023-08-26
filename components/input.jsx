const Input = ({ inputTitle, isTextArea, placeholder, isEmail, isBlack }) => {
  return (
    <div className="flex flex-col">
      <label
        className={`uppercase tracking-small-text text-[14px] ${
          isBlack ? "text-primary-black" : "text-white"
        }`}
        for=""
      >
        {inputTitle}
      </label>
      {!isTextArea ? (
        <input
          type={isEmail ? "email" : "text"}
          autoComplete={isEmail ? "off" : "on"}
          placeholder={placeholder}
          className={`border ${
            isBlack
              ? "border-primary-black focus:ring-primary-black"
              : "border-white focus:ring-white bg-transparent"
          }  py-2 px-4 focus:outline-none focus:ring-2 focus:border-transparent w-full`}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          rows={7}
          className={`border ${
            isBlack
              ? "border-primary-black focus:ring-primary-black"
              : "border-white focus:ring-white bg-transparent placeholder:text-white/50"
          } py-2 px-4 focus:outline-none focus:ring-2  focus:border-transparent placeholder:text-gray-300 text-[14px] w-full`}
        />
      )}
    </div>
  );
};

export default Input;
