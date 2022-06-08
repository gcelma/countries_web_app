import * as model from "./model.js"
import countriesView from "./views/countriesView.js";

const controlCountries = async function() {
    try {
        await model.createCountriesObject('all');

        model.state.countries.countries.forEach(cty => countriesView.render(cty));
    } catch (err) {
        console.error(err);
    }
};

const init = function() {
    countriesView.addHandlerRender(controlCountries);
}
init();