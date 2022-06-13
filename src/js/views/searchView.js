import View from "./view.js";

class searchView extends View {
    _searchElement = document.querySelector('.form-container');
    _errorMessage = 'We could not find that country. Please try another one!';

    getQuery() {
        const query = this._searchElement.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }

    _clearInput() {
        this._searchElement.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handler) {
        this._searchElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        })
    }
}

export default new searchView();