import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Search = ({ loading, fetchData, isLoading, setIsLoading }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setName(value);
  };
  const validator = () => {
    if (name.length < 4) {
      setError("El texto de búsqueda debe tener al menos 4 caracteres.");
      return false;
    }
    if (name.toLowerCase() === "iseijasunow") {
      setError("Usuario no válido para esta busqueda.");
      return false;
    }
    return true;
  };
  const handleSearch = () => {
    if (!validator()) return;
    if (name) {
      fetchData(name);
      setError("");
      return;
    }
    fetchData("");
  };

  const handleCleaning = () => {
    setIsLoading(true);
    fetchData("");
    setName("");
    setError("");
    setIsLoading(false);
  };
  return (
    <div className="py-14 bg-zinc-700">
      <h1 className="text-2xl text-zinc-100 text-center mb-8">
        React-frontend
      </h1>
      <div className="flex md:flex-row flex-col justify-center gap-4 px-12">
        <Input
          label={"Nombre"}
          onChange={handleChange}
          type={"text"}
          value={name}
        />
        <Button
          label={"Buscar"}
          icon={FaSearch}
          disabled={loading}
          onClick={handleSearch}
          bg={"bg-blue-500"}
        />
        <Button
          label={"Limpiar"}
          icon={AiOutlineClose}
          disabled={isLoading}
          onClick={handleCleaning}
          bg={"bg-red-500"}
        />
      </div>
      {error && (
        <p className="text-red-400 text-center font-semibold pt-3">{error}</p>
      )}
    </div>
  );
};

export default Search;
