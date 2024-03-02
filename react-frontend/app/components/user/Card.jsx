import { today } from "@/app/utils/date";
import React from "react";
import { FaUser } from "react-icons/fa";

const Card = ({ data, loading, error }) => {
  return (
    <>
      {error && (
        <div className="pt-24 flex flex-row items-center justify-center">
          <Error />
        </div>
      )}
      {loading && (
        <div className="py-24 flex flex-row items-center justify-center">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-500" />
        </div>
      )}
      {data && !loading && !error && (
        <div className="flex flex-row items-center justify-center p-12">
          <div className="border-r border-b border-l border-gray-400 border-l-1 border-t  bg-white px-10 py-4 flex flex-col justify-between leading-normal rounded-lg">
            <div className="mb-8">
              <p className="text-md text-gray-600 flex items-center">
                <FaUser className="mr-1" /> User detail
              </p>
              <div className="text-gray-700 text-md mb-1 mt-10">
                <span className="font-bold mr-2">GitHub Profile:</span>
                <a
                  href={data.html_url}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  {data.html_url}
                </a>
              </div>
              <p className="text-gray-700 text-base">
                <span className="font-bold mr-2">Repos:</span>
                <a
                  href={data.repos_url}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500"
                >
                  {data.repos_url}
                </a>
              </p>
            </div>
            <div className="flex flex-row justify-between items-center mt-5">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={data.avatar_url}
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-blue-500 leading-none">{data.login}</p>
                  <p className="text-gray-600">{today()}</p>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                <span className="mr-1">followed by</span>
                {data.followers}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
