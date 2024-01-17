import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
// import swRegister from './utils/sw-register';
import AddReviewForm from './components/add-review-form';

const app = new App({
    hamburgerButton: document.querySelector('#header__hamburger'),
    closeNavButton: document.querySelector('#nav__close-btn'),
    main: document.querySelector('.main'),
    nav: document.querySelector('.nav'),
    lists: document.querySelectorAll('.nav__list > li')
});

window.addEventListener('load', async () => {
    app.renderPage();

    // swRegister();
});

window.addEventListener('hashchange', async () => {
    app.renderPage();
});