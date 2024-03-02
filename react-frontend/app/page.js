"use client";
import { useState } from "react";
import useFetchUser from "./hooks/useFetchUser";

import Search from "./components/home/Search";
import Results from "./components/home/Results";
import SearchMessage from "./components/home/SearchMessage";
export default function Home() {
  const { data, loading, error, fetchData } = useFetchUser();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="h-full w-full">
      <Search
        loading={loading}
        fetchData={fetchData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {data && (
        <Results
          isLoading={isLoading}
          loading={loading}
          data={data}
          error={error}
        />
      )}
      {!data && <SearchMessage />}
    </main>
  );
}
