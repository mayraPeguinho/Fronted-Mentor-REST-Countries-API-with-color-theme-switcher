import Link from 'next/link';

export default function Tarjet({ flag, name, population, region, capital, ccn3 }) {

    return <Link href={`/countries/${ccn3}`} passHref className=' border-veryDarkBlue border-8 rounded-md'>
        <article className="flex flex-col bg-darkBlue cursor-pointer rounded-md">

            <img src={flag} alt="Bandera" className="w-72 h-48 object-cover rounded-t-md" />

            <div className="flex flex-col p-5 gap-3">
                <h1>{name}</h1>
                <p>Population: {population}
                    <br />
                    Region: {region}
                    <br />
                    Capital: {capital}</p>
            </div>
        </article>
    </Link>
}