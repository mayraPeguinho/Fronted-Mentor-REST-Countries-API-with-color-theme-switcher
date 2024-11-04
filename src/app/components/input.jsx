export default function Input({ name, searchTerm, onSearch }) {
  return <>
    <label htmlFor={name} className="sr-only"> Search for a country </label>
    <input className="w-full min-w-[200px] md:w-1/3 px-8 py-5 rounded-lg focus:outline-none" id={name} type="text" value={searchTerm} onChange={onSearch} placeholder="Search for a country..." />
  </>
}