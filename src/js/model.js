import { AJAX } from "./helper.js";

export const state = {
    countries : {
        region : '',
        countries : [],
    },
}

export const createCountriesObject = async function(region) {
    try {
        state.region = region;

        const data = await AJAX(`https://restcountries.com/v3.1/${region}`);

        state.countries.countries = data.map(cty => {
            return {
                name : cty.name.common,
                flag : cty.flags.png,
                region : cty.region,
                population : cty.population,
                capital : cty.capital,
            }
        })
    } catch (err) {
        console.error(err);
    }
};