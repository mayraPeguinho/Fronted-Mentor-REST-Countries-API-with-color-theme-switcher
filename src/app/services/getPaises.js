import axios from "axios";

const instance = axios.create({
    baseURL: 'https://restcountries.com/',
    timeout: 1000,
    responseType: 'json',
});

export default async function getPaises(country, region) {
    let response;
    try {
        if (!country && !region) {
            response = await instance.get('v3.1/all?fields=name,flags,population,region,capital,ccn3');
            response = response.data;
        } else if (country) {
            response = await instance.get(`v3.1/name/${country}?fields=name,flags,population,region,capital,ccn3`);
            response = response.data;

            if (region) {
                response = response.filter(country =>
                    country.region.toLowerCase() === region.toLowerCase()
                );
            }
        } else if (region) {
            response = await instance.get(`v3.1/region/${region.toLowerCase()}?fields=name,flags,population,region,capital,ccn3`);
            response = response.data;
        }
    } catch {

    }


    return response ? await response : [];
}