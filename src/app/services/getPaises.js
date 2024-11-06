import axios from "axios";

const instance = axios.create({
    baseURL: 'https://restcountries.com/',
    timeout: 1000,
    responseType: 'json',
});

export default async function getPaises(search) {
    let response;
    if (!search.inputText && !search.selectText) {
        response = await instance.get('v3.1/all?fields=name,flags,population,region,capital,ccn3');
        response = response.data;
    } else if (search.inputText) {
        response = await instance.get(`v3.1/name/${search.inputText}?fields=name,flags,population,region,capital,ccn3`);
        response = response.data;

        if (search.selectText) {
            response = response.filter(country =>
                country.region.toLowerCase() === search.selectText.toLowerCase()
            );
        }
    } else if (search.selectText) {
        response = await instance.get(`v3.1/region/${search.selectText.toLowerCase()}?fields=name,flags,population,region,capital,ccn3`);
        response = response.data;
    }

    return response ? await response : [];
}