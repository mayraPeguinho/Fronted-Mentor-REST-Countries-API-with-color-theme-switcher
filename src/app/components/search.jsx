"use client"

import useStore from "../store";
import Input from "./Input";
import Select from "./Select";

export default function Search() {

    const { search, setInputText, setSelectText } = useStore();

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value); // Actualiza el texto de búsqueda
    };

    const handleSelectChange = (e) => {
        console.log(e.target.value)
        setSelectText(e.target.value); // Actualiza la categoría seleccionada
    };

    return <div className="flex flex-col md:flex-row md:justify-between w-full gap-4">
        <Input name="inputText" onSearch={handleInputChange} searchTerm={search.inputText} />
        <Select name="selectText" onSearch={handleSelectChange} searchTerm={search.selectText} />
    </div>
}