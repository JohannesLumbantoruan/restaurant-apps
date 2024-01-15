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
            lists: this._lists
        });
    }

    async renderPage() {
        const url = UrlParser.parseUrlWithCombiner();
        const page = routes[url];

        this._main.innerHTML = await page.render();

        await page.afterRender();
    }
}

export default App;