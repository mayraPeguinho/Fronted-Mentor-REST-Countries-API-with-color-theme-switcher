"use client"

import { useState } from "react";

export default function InputSearch({onSearch}) {
    const [searchTerm, setSearch] = useState("");
  
    const handleSearchChange = (event) => {
      setSearch(event.target.value)
      console.log(searchTerm)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm); // Llama a la función pasada como prop
      };
  
    return <div >
        <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm" />
        <input id="searchTerm" type="text" value={searchTerm} onChange={handleSearchChange} className="w-1/4 bg-blue-950 text-white" placeholder="Search for a country..." />
        <button type="submit">Buscar</button>
        </form>   
    </div>
  }