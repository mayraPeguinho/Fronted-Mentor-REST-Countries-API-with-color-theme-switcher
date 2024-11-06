import Tarjet from './Tarjet';
import getPaises from '../services/getPaises';


export default async function TableroServer({ search }) {
    const results = await getPaises(search);

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
                <p>No se encontraron países.</p>
            )}
        </div>
    );
}


