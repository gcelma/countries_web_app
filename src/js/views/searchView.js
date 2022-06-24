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
            const body = document.querySelector('body');
            if (body.classList.contains('body__dark')) {
                const country = document.querySelector('article');
                country.classList.add('dark__theme'); 
            }
        })
    }
}

export default new searchView();