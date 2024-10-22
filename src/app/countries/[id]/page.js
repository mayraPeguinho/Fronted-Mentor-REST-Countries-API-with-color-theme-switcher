export default async function Tarjet({ params }) {

  const { id } = await params;

  const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  const country = await response.json();

  return (
    <div>
      <h1>Countries: {id}</h1>
      <article className="flex">
        <img></img>
        <div>
          <h1>{country[0].name.common}</h1>
          <div className="flex gap-10">
            <p>
              Native Name: {country[0].name.nativeName.eng.official}
              <br />
              Population: {country[0].population}
              <br />
              Region: {country[0].region}
              <br />
              Sub Region: {country[0].population}
              <br />
              Capital: {country[0].population}
              <br />
            </p>
            <p>
              Top Level Domain: {country[0].population}
              <br />
              Currencies: {country[0].population}
              <br />
              Languages: {country[0].population}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}