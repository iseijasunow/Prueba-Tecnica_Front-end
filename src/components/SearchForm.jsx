/* eslint-disable react/prop-types */
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const SearchForm = ({ setSearch, notFound }) => {
  const [searchError, setSearchError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchError("");
    switch (true) {
      case e.target.search.value.length < 4:
        setSearchError("Introduzca mínimo 4 caracteres.");
        break;
      case e.target.search.value === "iseijasunow":
        setSearchError("El usuario iseijasunow está bloqueado de la búsqueda.");
        break;
      default:
        setSearch(e.target.search.value);
        break;
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="search"
          className="input w-full"
          placeholder="Buscar usuarios de Github"
        />
        <button type="submit" className="button rounded text-m text-white">
          <i className="fa-solid fa-magnifying-glass"></i>
          Buscar
        </button>
      </form>
      {notFound && !searchError ? <ErrorMessage message={notFound} /> : ""}

      {searchError ? <ErrorMessage message={searchError} /> : ""}
    </>
  );
};

export default SearchForm;
