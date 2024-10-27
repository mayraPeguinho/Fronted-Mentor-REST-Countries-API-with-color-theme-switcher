"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Tablero({ searchTerm }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            let response;

            if (!searchTerm) {
                response = await fetch('https://restcountries.com/v3.1/all');
            } else {
                // Si searchTerm no está vacío, busca por el nombre del país
                response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
            }
            if (response) {
                const countries = await response.json()
                setResults(countries);
            }
        }

        fetchResults();
    }, [searchTerm]);

    return (
        <div className="flex flex-wrap h-full w-full gap-10">
            {results.length > 0 ? (
                results.slice(0, 10).map((country, index) => (
                    <Tarjet
                        key={index}
                        name={country.name.common}
                        flag={country.flags.svg}
                        population={country.population}
                        region={country.region}
                        capital={country.capital ? country.capital[0] : 'N/A'}
                        ccn3={country.ccn3}
                    />
                ))
            ) : (
                <p className='text-white'>No se encontraron países.</p> // Mensaje cuando no hay resultados
            )}
        </div>)
}

export function Tarjet({ flag, name, population, region, capital, ccn3 }) {

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
