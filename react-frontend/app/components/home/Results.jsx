import React from "react";
import Error from "../Error";
import Users from "./Users";
import Bars from "./Bars";
import SearchMessage from "./SearchMessage";

const Results = ({ loading, isLoading, error, data }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 py-12">
      {(loading || isLoading) && (
        <div className="py-24">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-500" />
        </div>
      )}
      {error && (
        <div className="pt-24">
          <Error />
        </div>
      )}
      {data?.items && (
        <div className="flex flex-col gap-2 items-center">
          <div>
            <h1 className="text-2xl text-center mb-10">Lista de usuarios</h1>
            <Users data={data.items.slice(0, 10)} />
          </div>
          <div className="w-screen lg:w-full my-5">
            <h1 className="text-2xl text-center mt-5 mb-10">
              Número de seguidores
            </h1>
            <Bars users={data.items.slice(0, 10)} />
          </div>
        </div>
      )}
      {!loading && !isLoading && data?.errors && !error && <SearchMessage />}
    </div>
  );
};

export default Results;
