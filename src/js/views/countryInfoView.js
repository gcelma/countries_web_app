import View from "./view.js";

class countryInfoView extends View {
    _modal = document.querySelector('.modal');
    _overlay = document.querySelector('.overlay');
    _btnCloseModal = document.querySelector('.close-modal');

    _openModal() {
        this._modal.classList.remove('hidden');
        this._overlay.classList.remove('hidden');
        this._btnCloseModal.classList.remove('hidden');
        this._parentElement.classList.add('hidden');
    }

    _closeModal(modal, overlay, parentElement, closeModal) {
        this._btnCloseModal.addEventListener('click', function(e) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            closeModal.classList.add('hidden');
            parentElement.classList.remove('hidden');
        })
    }

    _clear() {
        this._modal.innerHTML = '';
    }

    renderInfoCountry(data) {
        this._clear()
        if(!data || (Array.isArray(data) && data.length === 0)) return 'Error';

        this._data = data;
        const markup = this._generateMarkup();
        this._modal.insertAdjacentHTML("beforeend", markup);
        this._openModal();
        this._closeModal(this._modal, this._overlay, this._parentElement, this._btnCloseModal);
    }
}

export default new countryInfoView();