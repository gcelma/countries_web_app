import View from "./view.js";

class DarkView extends View {
    _btnChangeTheme = document.querySelector('.theme-container');
    _body = document.querySelector('body');
    
    _addDarkThemeHeader() {
        const titleContainer = document.querySelector('.title-container');
        titleContainer.classList.add('dark__theme');
        titleContainer.style.boxShadow = 'none';

        const themeContainer = document.querySelector('.theme-container');
        themeContainer.innerHTML = 'Light Mode';
        themeContainer.src = './src/images/moon-outline.svg';
    }

    changingTheme() {
        this._btnChangeTheme.addEventListener('click', e => {
            const btn = e.target.closest('.theme-container');
            if(!btn) return;

            if (!this._body.classList.contains('body__dark')) {
                this._body.classList.add('body__dark');
                this._addDarkThemeHeader();
            } else {
                this._body.classList.remove('body__dark');
            }


        })
    }
}

export default new DarkView();