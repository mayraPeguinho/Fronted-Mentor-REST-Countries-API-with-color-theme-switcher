import Link from "next/link"

export default function Home() {
  return <div className="h-full w-full flex flex-col bg-black gap-10">
    <main className="flex flex-col pl-16 gap-10">
      <input className="w-1/4 bg-blue-950"></input>
      <div className="flex gap-10 w-full h-full">
        <Tablero />
      </div>
    </main>
  </div>
}




export function Tarjet({ flag, name, population, region, capital, ccn3 }) {
  console.log({ flag })

  return <Link href={`/countries/${ccn3}`} passHref>
    <article className="flex flex-col bg-slate-600 cursor-pointer">
      <div className="flex flex-col gap-3">
        <div className="flex">
          <img src={flag} alt="Bandera" className="w-72 h-48 object-cover" />
        </div>
        <div className="flex flex-col p-5 gap-3">
          <h1>{name}</h1>
          <p>Population: {population}
            <br />
            Region: {region}
            <br />
            Capital: {capital}</p>
        </div>
      </div>
    </article>
  </Link>
}

export async function Tablero() {
  let data = await fetch('https://restcountries.com/v3.1/all')
  let countries = await data.json()

  return (
    <div className="flex flex-wrap h-full w-full gap-10">
      {countries.slice(0, 10).map((country, index) => (
        <Tarjet
          key={index}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital ? country.capital[0] : 'N/A'}
          ccn3={country.ccn3}
        />
      ))}
    </div>
  );
}
