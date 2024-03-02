import React from "react";
import { FaBan } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-8">
      <FaBan size={96} />
      <h1 className="text-3xl">Ha ocurrido un error.</h1>
    </div>
  );
};

export default Error;
