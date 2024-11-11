import Input from "./Input";
import Select from "./Select";

export default function Search() {

    return <div className="flex flex-col md:flex-row md:justify-between w-full gap-4">
        <Input name="inputText" />
        <Select name="selectText" />
    </div>
}