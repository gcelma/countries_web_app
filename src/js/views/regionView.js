class regionView {
    _parentElement = document.querySelector('.regions');
    _data;

    getRegionValue(handler) {
        this._parentElement.addEventListener('change', (e) => {
            const region = e.target.value;
            handler(region);
        })
    }
};

export default new regionView();