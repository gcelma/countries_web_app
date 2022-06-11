import * as model from "./model.js"
import countriesView from "./views/countriesView.js";
import regionView from "./views/regionView.js";

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
        await model.loadCountryByRegion(region);
        regionView.clear();
        model.state.countries.countriesByRegion.forEach(cty => regionView.render(cty));
    } catch (err) {
        console.error(err);
    }
};

const init = function() {
    countriesView.addHandlerRender(controlCountries);
    regionView.getRegionValue(controlRegionCountries);
}
init();