import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
    constructor({
        hamburgerButton, closeNavButton, main, nav, lists
    }) {
        this._hamburgerButton = hamburgerButton;
        this._closeNavButton = closeNavButton;
        this._main = main;
        this._nav = nav;
        this._lists = lists;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            hamburgerButton: this._hamburgerButton,
            closeNavButton: this._closeNavButton,
            nav: this._nav,
            lists: this._lists,
            main: this._main
        });
    }

    async renderPage() {
        const url = UrlParser.parseUrlWithCombiner();
        const page = routes[url];

        this._main.innerHTML = await page.render();

        await page.afterRender();

        const skipLink = document.querySelector('.skip-link');

        skipLink.addEventListener('click', (event) => {
            event.preventDefault();

            document.querySelector('#main-content').focus();
        });

        skipLink.addEventListener('keydown', (event) => {
            if (event.key === ' ' || event.key === 'Enter') {
                document.querySelector('#main-content').focus();
            }
        });
    }
}

export default App;