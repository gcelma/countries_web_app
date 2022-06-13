import View from "./view.js";

class CountriesView extends View {
    _errorMessage = 'We cannot find any country. Try again!';

    addHandlerRender(handler) {
        ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler()));
    };
}

export default new CountriesView();