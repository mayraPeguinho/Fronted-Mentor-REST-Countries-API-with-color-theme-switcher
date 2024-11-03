"use client"
import { useEffect, useState } from 'react';
import Tarjet from './tarjet';

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
        <div className="flex flex-wrap h-full w-full gap-10 justify-center md:justify-center">
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
                <p>No se encontraron países.</p> // Mensaje cuando no hay resultados
            )}
        </div>)
}


