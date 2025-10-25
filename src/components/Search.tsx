"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { searchMovies } from "@/lib/services/ApiServices";
import { Movie } from "@/lib/interfaces/interface";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Movie[]>([]);
  const [resultError, setResultError] = useState<string>("");

  async function getSearchResults(query: string) {
    if (!query.trim()) {
      setResults([]);
      setResultError("");
      return;
    }
    const res = await searchMovies(query);
    if (res.length == 0) {
      setResultError("We found 0 matches");
      setResults([]);
    } else {
      setResultError("");
      setResults(res);
      console.log(res);
    }
  }

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      getSearchResults(query);
    }, 500);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="bg-transparent text-yellow-500 transition-all duration-300 ease-in-out ">
      <Input
        className="w-40 h-[36px] md:w-52 text-[12px] md:text-[14px]"
        onChange={handleSearchInput}
        id="searchInput"
        type="text"
        value={query}
        placeholder="Search here.."
      />
    </div>
  );
}
