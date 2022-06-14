export default class View {
    _parentElement = document.querySelector('.countries');
    _data;

    render(data) {
        if(!data || (Array.isArray(data) && data.length === 0)) return 'Error';
        
        this._data = data;
        const markup = this._generateMarkup();

        this._parentElement.insertAdjacentHTML("beforeend", markup);
    }

    clear() {
        this._parentElement.innerHTML = '';
    }

    _generateMarkup() {
        return `
        <article class="country">
            <img class="country__img" src=${this._data.flag} />
            <div class="country__data">
              <h3 class="country__name">${this._data.name}</h3>
              <h4 class="country__region">${this._data.region}</h4>
              <p class="country__row"><span>👫</span>population: ${(this._data.population / 1000000).toFixed(1)} M</p>
              <p class="country__row"><span>🏙</span>capital: ${this._data.capital}</p> 
            </div>
        </article>`;
    }

    renderError(message = this._errorMessage) {
        const markup = `
        <div class="error">
          <p>${message}!</p>
        </div>`
        this.clear();
        this._parentElement.insertAdjacentHTML('beforeend', markup);
    };

    addHandlerCountry(handler) {
      this._parentElement.addEventListener('click', function(e) {
        const cty = e.target.closest('.country').innerHTML;
        if(!cty) return;

        const newDom = document.createRange().createContextualFragment(cty);
        const countryName = newDom.querySelector('.country__name').innerHTML;
        handler(countryName);
      })
    }
};