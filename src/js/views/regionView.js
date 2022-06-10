class regionView {
    _parentElement = document.querySelector('.regions');
    _data;

    getRegionValue() {
        this._parentElement.addEventListener('change', (e) => {
            console.log(e.target.value);
        })
    }
};

export default new regionView();