import View from "./view.js";

class regionView extends View {
    _filterElement = document.querySelector('.regions');
    _errorMessage = 'We could not find that region. Please try another one!';

    getRegionValue(handler) {
        this._filterElement.addEventListener('change', (e) => {
            const region = e.target.value;
            handler(region);
            const body = document.querySelector('body');
            if (body.classList.contains('body__dark')) {
                this._darkThemeCountry();
            }
        })
    }
};

export default new regionView();