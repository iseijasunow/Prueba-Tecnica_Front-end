"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../Button";
import { FaArrowLeft } from "react-icons/fa";

const Header = ({ name, loading, error }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <div className="py-14 bg-zinc-700">
      <h1 className="text-5xl text-zinc-100 text-center mb-8 pb-8">{name}</h1>
      <div className="flex flex-row items-center justify-center">
        <Button
          label={"Regresar"}
          icon={FaArrowLeft}
          disabled={loading}
          onClick={handleBack}
          bg={"bg-blue-500"}
        />
      </div>
    </div>
  );
};

export default Header;
