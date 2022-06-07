import { AJAX } from "./helper.js";

export const state = {
    countries : [],
}

export const createCountriesObject = async function() {
    const data = await AJAX('https://restcountries.com/v3.1/all');

    state.countries = data.map(country => {
        return state.countries.push({
            name : country.name.official,
            flag : country.flag,
            region : country.region,
            population : country.population,
            capital : country.capital,
        });
    });
};
