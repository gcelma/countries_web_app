import * as model from "./model.js"
import countriesView from "./views/countriesView.js";
import regionView from "./views/regionView.js";
import searchView from "./views/searchView.js";

const controlRender = function(arr) {
    arr.forEach(cty => countriesView.render(cty));
};

const controlCountries = async function() {
    try {
        await model.loadAllCountries();

        controlRender(model.state.countries.allCountries);
    } catch (err) {
        countriesView.renderError()
    }
};

const controlRegionCountries = async function(region) {
    try {
        if(region === 'All') {
            countriesView.clear();
            controlCountries();
        } else {
            await model.loadCountryByRegion(region);
            countriesView.clear();
            controlRender(model.state.countries.countriesByRegion);
        }
    } catch (err) {
        regionView.renderError()
    }
};

const controlSearchCountry = async function() {
    try {
        const query = searchView.getQuery();
        if(!query) return

        await model.loadCountryByName(query);
        countriesView.clear();
        controlRender(model.state.countries.results.countryResult);
    } catch (err) {
        searchView.renderError();
    }
}

const controlInfoCountry = function(cty) {
    console.log(cty);
};

const init = function() {
    countriesView.addHandlerRender(controlCountries);
    regionView.getRegionValue(controlRegionCountries);
    searchView.addHandlerSearch(controlSearchCountry);
    countriesView.addHandlerCountry(controlInfoCountry);
}
init();