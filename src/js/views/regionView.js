import View from "./view.js";

class regionView extends View {
    _filterElement = document.querySelector('.regions');
    _errorMessage = 'We could not find that region. Please try another one!';

    getRegionValue(handler) {
        this._filterElement.addEventListener('change', (e) => {
            const region = e.target.value;
            handler(region);
        })
    }
};

export default new regionView();