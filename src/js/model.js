import { AJAX } from "./helper.js";

const parenElement = document.querySelector('.countries');

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

        state.countries = data.map(cty => {
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

await createCountriesObject('all');
console.log(state.countries);

const renderCountry = function(country) {
    const markup = `
    <article class="country">
    <img class="country__img" src="${country.flag}" />
    <div class="country__data">
      <h3 class="country__name">${country.name}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${country.population}</p>
      <p class="country__row"><span>🏙</span>${country.capital}</p> 
    </div>
    </article>`

    parenElement.insertAdjacentHTML('beforeend', markup);
};

state.countries.forEach(cty => renderCountry(cty));