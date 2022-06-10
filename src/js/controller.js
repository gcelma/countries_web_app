import * as model from "./model.js"
import countriesView from "./views/countriesView.js";
import regionView from "./views/regionView.js";

const controlCountries = async function() {
    try {
        await model.createCountriesObject();

        model.state.countries.countries.forEach(cty => countriesView.render(cty));
    } catch (err) {
        console.error(err);
    }
};

const controlRegionCountries = async function() {
    try {
        regionView.getRegionValue();
    } catch (err) {
        console.error(err);
    }
};

const init = function() {
    countriesView.addHandlerRender(controlCountries);
    controlRegionCountries();
}
init();