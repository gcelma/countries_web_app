import * as model from "./model.js"
import countriesView from "./views/countriesView.js";
import regionView from "./views/regionView.js";
import searchView from "./views/searchView.js";

const controlCountries = async function() {
    try {
        await model.loadAllCountries();

        model.state.countries.allCountries.forEach(cty => countriesView.render(cty));
    } catch (err) {
        console.error(err);
    }
};

const controlRegionCountries = async function(region) {
    try {
        if(region === 'All') {
            regionView.clear();
            controlCountries();
        } else {
            await model.loadCountryByRegion(region);
            regionView.clear();
            model.state.countries.countriesByRegion.forEach(cty => regionView.render(cty));
        }
    } catch (err) {
        console.error(err);
    }
};

const controlSearchCountry = async function() {
    try {
        const query = searchView.getQuery();
        if(!query) return

        await model.loadCountryByName(query);
        regionView.clear();
        model.state.countries.results.countryResult.forEach(cty => searchView.render(cty));
    } catch (err) {
        console.error(err);
    }
}

const init = function() {
    countriesView.addHandlerRender(controlCountries);
    regionView.getRegionValue(controlRegionCountries);
    searchView.addHandlerSearch(controlSearchCountry)
}
init();