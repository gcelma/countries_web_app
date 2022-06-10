import { API_URL } from "./config.js";
import { AJAX } from "./helper.js";

export const state = {
    countries : {
        region : '',
        countries : [],
    },
}

export const createCountriesObject = async function(region = 'all') {
    try {
        state.region = region;

        const data = await AJAX(`${API_URL}${region}`);

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

