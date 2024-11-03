"use client"
import { useState } from "react";
import Tablero from "./components/tablero";
import Search from "./components/search";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term); // Actualiza el término de búsqueda
  };

  return <main className="h-full w-full flex flex-col">
    <div className="flex flex-col gap-10 m-5 justify-center items-center md:mx-20 md:mt-10">
      <Search onSearch={handleSearch} />
      <Tablero searchTerm={searchTerm} />
    </div>
  </main>
}


