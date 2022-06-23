import * as model from "./model.js"
import countriesView from "./views/countriesView.js";
import countryInfoView from "./views/countryInfoView.js";
import darkView from "./views/darkView.js";
import regionView from "./views/regionView.js";
import searchView from "./views/searchView.js";

const controlRender = function(arr) {
    arr.forEach(cty => countriesView.render(cty));
};

const renderInfoCountry = function(arr) {
    arr.forEach(cty => countryInfoView.renderInfoCountry(cty))
};

const controlCountries = async function() {
    try {
        await model.loadAllCountries();
        controlRender(model.state.countries);
    } catch (err) {
        countriesView.renderError()
    }
};

const controlRegionCountries = async function(region) {
    try {
        if(region === 'All') {
            countriesView.clear();
            controlRender(model.state.countries);
        } else if(region === 'Africa') {
            countriesView.clear();
            controlRender(model.state.countries.filter(cty => cty.region === region));
        } else if (region === 'Americas') {
            countriesView.clear();
            controlRender(model.state.countries.filter(cty => cty.region === region));
        } else if (region === 'Asia') {
            countriesView.clear();
            controlRender(model.state.countries.filter(cty => cty.region === region));
        } else if (region === 'Europe') {
            countriesView.clear();
            controlRender(model.state.countries.filter(cty => cty.region === region));
        } else if (region === 'Oceania') {
            countriesView.clear();
            controlRender(model.state.countries.filter(cty => cty.region === region));
        }
    } catch (err) {
        regionView.renderError()
    }
};

const controlSearchCountry = async function() {
    try {
        const query = searchView.getQuery();
        if(!query) return
        const countryName = query.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    
        searchView.clear();
        controlRender(model.state.countries.filter(cty => cty.name === countryName));
    } catch (err) {
        searchView.renderError();
    }
}

const controlInfoCountry = async function(name) {
   try {
        renderInfoCountry(model.state.countries.filter(cty => cty.name === name));
        const neighbors = document.querySelectorAll('.country__row__border');
        neighbors.forEach(n => {
            n.addEventListener('click', e => {
                renderInfoCountry(model.state.countries.filter(cty => cty.countryCode === e.target.innerHTML))
            })
        })
   } catch (err) {
        console.error(err);
   }
};

const init = function() {
    countriesView.addHandlerRender(controlCountries);
    regionView.getRegionValue(controlRegionCountries);
    searchView.addHandlerSearch(controlSearchCountry);
    countriesView.addHandlerCountry(controlInfoCountry);
    darkView.changingTheme();
}
init();