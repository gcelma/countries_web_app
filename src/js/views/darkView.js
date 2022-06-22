import View from "./view.js";

class DarkView extends View {
    _btnChangeTheme = document.querySelector('.theme-container');
    _titleContainer = document.querySelector('.title-container');
    _mode = document.querySelector('#mode');
    _imageTheme = document.querySelector('#image_theme');
    _searchBtn = document.querySelector('#search_button');
    _searchInput = document.querySelector('.search__field');
    _searchContainer = document.querySelector('.form-container');
    _filter = document.querySelector('select');
    
    _addDarkTheme() {
        this._titleContainer.classList.add('dark__theme');
        this._titleContainer.classList.add('no-box-shadow');

        this._mode.innerHTML = 'Light Mode';
        this._imageTheme.src = './src/images/moon-outline.png';

        this._searchContainer.classList.add('no-box-shadow');
        this._searchBtn.style.backgroundColor = 'var(--dark-blue)';
        this._searchInput.classList.add('dark__theme');

        this._filter.classList.add('dark__theme');
        this._filter.classList.add('no-box-shadow');

        this._darkThemeCountry();
    }

    _removedarkTheme() {
        this._titleContainer.classList.remove('dark__theme');
        this._titleContainer.classList.remove('no-box-shadow');

        this._mode.innerHTML = 'Dark Mode';
        this._imageTheme.src = './src/images/sun-icon.png';

        this._searchContainer.classList.remove('no-box-shadow');
        this._searchBtn.style.backgroundColor = 'var(--white)';
        this._searchInput.classList.remove('dark__theme');

        this._filter.classList.remove('dark__theme');
        this._filter.classList.remove('no-box-shadow');

        this._darkThemeCountry();
    }

    changingTheme() {
        this._btnChangeTheme.addEventListener('click', e => {
            const btn = e.target.closest('.theme-container');
            if(!btn) return;

            if (!this._body.classList.contains('body__dark')) {
                this._body.classList.add('body__dark');
                this._addDarkTheme();
            } else {
                this._body.classList.remove('body__dark');
                this._removedarkTheme();
            }
        })
    }
}

export default new DarkView();