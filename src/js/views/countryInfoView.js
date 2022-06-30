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

        this._overlay.classList.remove('hidden');
        this._parentElement.classList.add('hidden');
        if (this._body.classList.contains('body__dark')) {
            const country = document.querySelector('.country__info');
            country.classList.add('dark__theme'); 
        }
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