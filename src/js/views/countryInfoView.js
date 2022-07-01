import View from "./view.js";

class countryInfoView extends View {
    _modal = document.querySelector('.modal');
    _overlay = document.querySelector('.overlay');

    _openModal() {
        this._modal.classList.remove('hidden');

        const infoDetails = document.querySelectorAll('.info_details');
        infoDetails.forEach(d => {
            d.classList.remove('hidden')
        })

        const countries = document.querySelectorAll('.country');
        countries.forEach(cty => cty.classList.add('country__info'))

        const countryImg = document.querySelectorAll('.country__img');
        countryImg.forEach(img => img.classList.add('country__img__info'));

        if (this._body.classList.contains('body__dark')) {
            this._modal.querySelector('.country').classList.add('dark__theme')
        }

        this._overlay.classList.remove('hidden');
        this._parentElement.classList.add('hidden');
    }

    _closeModal(modal, overlay, parentElement) {
        this._overlay.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            parentElement.classList.remove('hidden');
            
            const infoDetails = document.querySelectorAll('.info_details');
            infoDetails.forEach(h => {
                h.classList.add('hidden')
            })

            const countries = document.querySelectorAll('.country');
            countries.forEach(cty => cty.classList.remove('country__info'))

            const countryImg = document.querySelectorAll('.country__img');
            countryImg.forEach(img => img.classList.remove('country__img__info'));
        })
    }

    _cleanModal() {
        this._modal.innerHTML = '';
    }

    renderInfoCountry(data) {
        this._cleanModal();
        if(!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();
        this._modal.insertAdjacentHTML("beforeend", markup);
        this._openModal();
        this._closeModal(this._modal, this._overlay, this._parentElement);
    }
}

export default new countryInfoView();  