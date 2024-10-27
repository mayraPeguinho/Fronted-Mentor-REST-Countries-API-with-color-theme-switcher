"use client"
import { useState } from "react";
import InputSearch from "./components/InputSearch";
import Tablero from "./components/Tablero";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term); // Actualiza el término de búsqueda
  };

  return <div className="h-full w-full flex flex-col bg-black gap-10">
    <main className="flex flex-col pl-16 gap-10">
      <InputSearch onSearch={handleSearch} />
      <div className="flex gap-10 w-full h-full">
        <Tablero searchTerm={searchTerm} />
      </div>
    </main>
  </div>
}


