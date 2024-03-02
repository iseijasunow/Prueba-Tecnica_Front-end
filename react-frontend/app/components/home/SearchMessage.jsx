import React from "react";

const SearchMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-semibold pt-24">
        Realiza una busqueda para mostrar resultados.
      </h1>
      <p className="text-lg text-zinc-500">
        Introduce un nombre de usuario de Github en el campo de texto.
      </p>
    </div>
  );
};

export default SearchMessage;
