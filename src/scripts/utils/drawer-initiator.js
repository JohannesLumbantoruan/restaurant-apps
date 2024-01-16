const DrawerInitiator = {
    init({
        hamburgerButton, closeNavButton, nav, lists, main
    }) {
        hamburgerButton.addEventListener('click', (event) => {
            this._hamburgerButtonClickHandler(event, nav);
        });

        hamburgerButton.addEventListener('keydown', (event) => {
            this._hamburgerButtonKeydownHandler(event, hamburgerButton);
        });

        closeNavButton.addEventListener('click', (event) => {
            this._closeNavButtonClickHandler(event, nav);
        });

        lists.forEach((li) => {
            li.addEventListener('keydown', this._listKeydownHandler);
        });

        main.addEventListener('click', (event) => {
            if (window.innerWidth < 576) {
                this._mainClickHandler(event, closeNavButton);
            }
        });

        window.addEventListener('resize', (event) => {
            this._windowResizeHandler(event, nav);
        });
    },

    _hamburgerButtonClickHandler(event, nav) {
        event.stopPropagation();

        nav.style.display = 'block';
    },

    _hamburgerButtonKeydownHandler(event, hamburgerButton) {
        if (event.key === ' ' || event.key === 'Enter') {
            hamburgerButton.click();
        }
    },

    _closeNavButtonClickHandler(event, nav) {
        event.stopPropagation();

        nav.style.display = 'none';
    },

    _listKeydownHandler(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.target.click();
        }
    },

    _mainClickHandler(event, closeNavButton) {
        event.stopPropagation();

        closeNavButton.click();
    },

    _windowResizeHandler(event, nav) {
        if (event.target.innerWidth >= 576 && nav.style.display !== 'block') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
};

export default DrawerInitiator;