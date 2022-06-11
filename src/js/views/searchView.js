class searchView {
    _parentElement = document.querySelector('.countries');
    _searchElement = document.querySelector('.form-container');
    _data;

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

    render(data) {
        if(!data || (Array.isArray(data) && data.length === 0)) return 'Error';
        
        this._data = data;
        const markup = this._generateMarkup();

        this._parentElement.insertAdjacentHTML("beforeend", markup);
    }

    _generateMarkup() {
        return `
        <article class="country">
            <img class="country__img" src=${this._data.flag} />
            <div class="country__data">
              <h3 class="country__name">${this._data.name}</h3>
              <h4 class="country__region">${this._data.region}</h4>
              <p class="country__row"><span>👫</span>${this._data.population}</p>
              <p class="country__row"><span>🏙</span>${this._data.capital}</p> 
            </div>
        </article>`;
    }
}

export default new searchView();