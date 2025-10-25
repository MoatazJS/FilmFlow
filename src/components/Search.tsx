"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { searchMovies } from "@/lib/services/ApiServices";

export default function Search() {
  const [query, setQuery] = useState<string>("");

  async function getSearchResults(query: string) {
    const res = await searchMovies(query);
    console.log(res);
  }

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    getSearchResults(value);
  }

  return (
    <div className="bg-gray-50 text-black ">
      <Input
        onChange={handleSearchInput}
        id="searchInput"
        type="text"
        value={query}
        placeholder="Search here.."
      />
    </div>
  );
}
