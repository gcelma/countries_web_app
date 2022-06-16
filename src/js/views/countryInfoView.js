import View from "./view.js";

class countryInfoView extends View {
    _modal = document.querySelector('.modal');
    _overlay = document.querySelector('.overlay');
    _btnCloseModal = document.querySelector('.close-modal');

    _openModal() {
        this._modal.classList.remove('hidden');
        this._overlay.classList.remove('hidden');
    }

    _closeModal() {
        this._btnCloseModal.addEventListener('click', function(e) {
            const modal = document.querySelector('.modal');
            const overlay = document.querySelector('.overlay');
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        })
    }

    _clear() {
        this._modal.innerHTML = '';
    }

    renderInfoCountry(data) {
        if(!data || (Array.isArray(data) && data.length === 0)) return 'Error';

        this._data = data;
        const markup = this._generateMarkup();
        this._modal.insertAdjacentHTML("beforeend", markup);
        this._openModal();
        this._closeModal();
    }
}

export default new countryInfoView();