import React from "react";

const Input = ({ id, onChange, value, label, type, placeholder }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        type={type}
        className={
          placeholder
            ? "!ring-0 !outline-none border-zinc-600 focus:border-zinc-600 !ring-offset-0 rounded-md pl-1 pr-7 sm:pl-3 sm:pr-8 w-28 sm:w-full bg-zinc-900 opacity-60 placeholder-zinc-200  text-white"
            : "block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-zinc-400 appearance-none focus:outline-none focus:ring-0 peer h-14"
        }
        placeholder={placeholder ? placeholder : " "}
      />
      <label
        className="absolute text-md text-zinc-100 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
