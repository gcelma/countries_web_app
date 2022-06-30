export default class View {
    _body = document.querySelector('body');
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

    renderError(message = this._errorMessage) {
      const markup = `
      <div class="error">
      <img src="./src/images/errorimage.png" alt="error image"></img>
      <p>${message}!</p>
      </div>`
      this.clear();
      this._parentElement.insertAdjacentHTML('beforeend', markup);
    }
    
    addHandlerCountry(handlerCountry) {
      this._parentElement.addEventListener('click', function(e) {
        const cty = e.target.closest('.country').innerHTML;
        if(!cty) return;

        const newDom = document.createRange().createContextualFragment(cty);
        const countryName = newDom.querySelector('.country__name').innerHTML;
        handlerCountry(countryName);
      })
    }

    _gettingInfo(object) {
      if (object) {
        return Object.values(object)
        .map(e => e.name ? e.name : e).join(', ')
      } else {
        return 'none'
      }
    }

    _darkThemeCountry() {
      const countries = document.querySelectorAll('article');
      countries.forEach(country => country.classList.toggle('dark__theme'));
    }

    _generateMarkup() {
      const borders = this._data.neighbors ? this._data.neighbors.map(b => `<a class="country__row__border">${b}</a>`).join('') : ' none';
      return `
      <article class="country">
          <img class="country__img" src=${this._data.flag} />
          <div class="country__data">
            <h3 class="country__name">${this._data.name}</h3>
            <h4 class="country__region">${this._data.region}</h4>
            <p class="country__row"><span>👫</span>population: ${(this._data.population / 1000000).toFixed(1)} M</p>
            <p class="country__row"><span>🏙</span>capital: ${this._data.capital}</p>
            <p class="country__row info_details hidden"><span>💰</span>currenci: ${this._gettingInfo(this._data.currenci)}</p>
            <p class="country__row info_details hidden"><span>🗣️</span>language: ${this._gettingInfo(this._data.language)}</p>
            <p class="country__row info_details hidden"><span>👫</span>borders:${borders}</p>
          </div>
      </article>`;
    }
};