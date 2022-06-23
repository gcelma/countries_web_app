import { API_URL_ALLCOUNTRIES} from "./config.js";
import { AJAX } from "./helper.js";

export const state = {
    countries : [],
}

const countryObject = function(cty) {
    return  {
        name : cty.name.common,
        flag : cty.flags.png,
        region : cty.region,
        population : cty.population,
        capital : cty.capital,
        language : cty.languages,
        currenci : cty.currencies,
        neighbors : cty.borders,
        countryCode : cty.cca3,

        // gettingBorders() {
        //     return this.neighbors ? this.neighbors.map(b => b).join(' ') : ' none'
        // }
    }
};

const dataCountry = function(arr) {
    return arr.map(cty => {
        return countryObject(cty);
    });
};

export const loadAllCountries = async function() {
    try {
        const data = await AJAX(`${API_URL_ALLCOUNTRIES}all`);
        state.countries = dataCountry(data);
    } catch (err) {
        throw err;
    }
};