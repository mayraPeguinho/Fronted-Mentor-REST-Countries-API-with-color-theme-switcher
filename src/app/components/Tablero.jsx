"use client"
import { useEffect, useState } from 'react';
import Tarjet from './tarjet';
import useStore from '../store';
import axios from 'axios';



export default function Tablero() {

    const instance = axios.create({
        baseURL: 'https://restcountries.com/',
        timeout: 1000,
        responseType: 'json',
    });


    const search = useStore((state) => state.search);

    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            let response;

            try {
                if (!search.inputText && !search.selectText) {
                    response = await instance.get('v3.1/all');
                    response = response.data;
                } else if (search.inputText) {
                    response = await instance.get(`v3.1/name/${search.inputText}`);
                    response = response.data;

                    if (search.selectText) {
                        response = response.filter(country =>
                            country.region.toLowerCase() === search.selectText.toLowerCase()
                        );
                    }
                } else if (search.selectText) {
                    response = await instance.get(`v3.1/region/${search.selectText.toLowerCase()}`);
                    response = response.data;
                }

                if (response) {
                    setResults(response);
                }
            } catch (error) {
                setResults([]); // Establecer resultados vacíos en caso de error
            }
        };

        fetchResults();
    }, [search.inputText, search.selectText]);

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


