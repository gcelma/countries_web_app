import View from "./view.js";

class countryInfoView extends View {
    _modal = document.querySelector('.modal');
    _overlay = document.querySelector('.overlay');

    _openModal() {
        this._modal.classList.remove('hidden');
        this._overlay.classList.remove('hidden');
        this._parentElement.classList.add('hidden');
        if (this._body.classList.contains('body__dark')) {
            const country = document.querySelector('.country__info');
            country.classList.add('dark__theme'); 
        }
    }

    _closeModal(modal, overlay, parentElement) {
        this._overlay.addEventListener('click', function(e) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            parentElement.classList.remove('hidden');            
        })
    }

    _cleanModal() {
        this._modal.innerHTML = '';
    }

    renderInfoCountry(data) {
        this._cleanModal();
        if(!data || (Array.isArray(data) && data.length === 0)) return 'Error';

        this._data = data;
        const markup = this._generateMarkupInfoCountry();
        this._modal.insertAdjacentHTML("beforeend", markup);
        this._openModal();
        this._closeModal(this._modal, this._overlay, this._parentElement);
    }

    _gettingInfo(object) {
        if (object) {
          return Object.values(object)
          .map(e => e.name ? e.name : e).join(', ')
        } else {
          return 'none'
        }
    }

    _generateMarkupInfoCountry() {
        const borders = this._data.neighbors ? this._data.neighbors.map(b => `<a class="country__row__border">${b}</a>`).join('') : ' none';
        return `
        <article class="country__info">
            <img class="country__img__info" src=${this._data.flag} />
            <div class="country__data">
              <h3 class="country__name">${this._data.name}</h3>
              <h4 class="country__region">${this._data.region}</h4>
              <p class="country__row"><span>🧍</span>population: ${(this._data.population / 1000000).toFixed(1)} M</p>
              <p class="country__row"><span>🏙</span>capital: ${this._data.capital}</p>
              <p class="country__row"><span>💰</span>currenci: ${this._gettingInfo(this._data.currenci)}</p>
              <p class="country__row"><span>🗣️</span>language: ${this._gettingInfo(this._data.language)}</p>
              <p class="country__row borders"><span>👫</span>borders:${borders}</p>
            </div>
        </article>`;
    }
}

export default new countryInfoView();  