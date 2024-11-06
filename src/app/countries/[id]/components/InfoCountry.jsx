"use client"

import Link from "next/link";
import React, { useEffect, useState } from 'react';

export default function InfoCountry({ id }) {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const fetchCountry = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
            const data = await response.json();
            setCountry(data[0]);
        };

        fetchCountry();
    }, [id]);

    if (!country) {
        return <p>Cargando pais...</p>;
    }

    return (
        <article className="flex flex-col gap-10 lg:flex-row">
            <img src={country.flags.svg} alt="Bandera" className="w-full h-auto object-cover md:w-6/12" />
            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xl">{country.name.common}</h1>
                <div className="flex flex-col gap-5">
                    <p className="leading-loose">
                        <span className="font-semibold">Native Name:</span> {Object.values(country.name.nativeName || {})[0]?.official || 'N/A'}
                        <br />
                        <span className="font-semibold">Population:</span> {country.population.toLocaleString() || 'N/A'}
                        <br />
                        <span className="font-semibold">Region:</span> {country.region || 'N/A'}
                        <br />
                        <span className="font-semibold">Sub Region:</span> {country.subregion || 'N/A'}
                        <br />
                        <span className="font-semibold">Capital:</span> {country.capital ? country.capital.join(", ") : 'N/A'}
                        <br />
                    </p>
                    <p className="leading-loose">
                        <span className="font-semibold">Top Level Domain:</span> {country.tld?.join(", ") || 'N/A'}
                        <br />
                        <span className="font-semibold">Currencies:</span> {Object.values(country.currencies || {}).map(currency => currency.name).join(", ") || 'N/A'}
                        <br />
                        <span className="font-semibold">Languages:</span> {Object.values(country.languages || {}).join(", ") || 'N/A'}
                    </p>
                    {country.borders && country.borders.length > 0 ? (
                        <>
                            <h1 className="text-lg font-semibold">Border Countries:</h1>
                            <div className="flex flex-grow gap-2">
                                {country.borders.map((border) => (
                                    <Link key={border} className="text-white text-center w-1/3 bg-darkBlue shadow-black shadow-sm md:w-1/6 lg:w-7/12" href={`/countries/${border}`}>
                                        {border}
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </article>
    );
}