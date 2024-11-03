"use client"

import { useState } from "react";
import Input from "./input";
import Select from "./select";

export default function Search({ onSearch }) {
    const [search, setSearch] = useState({
        inputText: "",
        selectText: "",
    });

    const onSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm); // Llama a la función pasada como prop
    };

    return <form className="flex flex-col md:flex-row md:justify-between w-full gap-4" onSubmit={handleSubmit}>
        <Input name="searchTerm1" onSearch={onSearchChange} searchTerm={search.inputText} />
        <Select name="searchTerm2" onSearch={onSearchChange} searchTerm={search.selectText} />
        <button className="hidden" type="submit">Buscar</button>
    </form>
}