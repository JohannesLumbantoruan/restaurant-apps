const DrawerInitiator = {
    init({
        hamburgerButton, closeNavButton, nav, lists
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
            // if (event.target.textContent.includes('X')) {
            //     event.target.click();
            // } else {
            //     event.target.
            // }
            event.target.click();
        }
    }
};

export default DrawerInitiator;