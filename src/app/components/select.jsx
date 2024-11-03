const options = ["Africa", "America", "Asia", "Europe", "Oceania"]

export default function Select({ name, searchTerm, onSearch }) {

    return <>
        <label htmlFor={name} />
        <select className="w-1/2 min-w-[200px] md:w-1/6 px-8 py-5 rounded-lg" id={name} value={searchTerm} onChange={onSearch}>
            <option key="nothing" value="">Filter by Region</option>
            {options.map(element => <option key={element} value={element}>{element}</option>)}
        </select>
    </>
}
