export default async function Country({ params }) {

  const { id } = await params;

  const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  const country = await response.json();

  return (
    <div>
      <article className="flex flex-col p-10 gap-10">
        <button className="w-1/5">Back</button>
        <img src={country[0].flags.svg} alt="Bandera" className="w-full h-auto object-cover" />
        <div>
          <h1>{country[0].name.common}</h1>
          <div className="flex flex-col gap-5">
            <p>
              Native Name: {Object.values(country[0].name.nativeName)[0].official}
              <br />
              Population: {country[0].population}
              <br />
              Region: {country[0].region}
              <br />
              Sub Region: {country[0].subregion}
              <br />
              Capital: {country[0].capital}
              <br />
            </p>
            <p>
              Top Level Domain: {country[0].population}
              <br />
              Currencies: {country[0].population}
              <br />
              Languages: {Object.values(country[0].languages || {}).join(", ")}
            </p>
            <h1>Border Countries:</h1>
          </div>
        </div>
      </article>
    </div>
  );
}