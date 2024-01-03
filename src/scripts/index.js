import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

document.addEventListener('DOMContentLoaded', async () => {
    // navigation
    const hamburger = document.querySelector('#header__hamburger');
    const nav = document.querySelector('.nav');
    const closeNavBtn = document.querySelector('#nav__close-btn');
    const lists = document.querySelectorAll('.nav__list > li');

    hamburger.addEventListener('click', (e) => {
        nav.style.display = 'block';

        e.stopPropagation();
    });

    hamburger.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            hamburger.click();
        }
    });

    closeNavBtn.addEventListener('click', (e) => {
        nav.style.display = 'none';

        e.stopPropagation();
    });

    lists.forEach((li) => {
        li.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                if (e.target.textContent.includes('X')) {
                    li.click();
                } else {
                    console.log(e.currentTarget);
                    console.log(e.target);
                    li.children[0].click();
                }
            }
        });
    });


    // main
    const res = await fetch('data/DATA.json');
    const { restaurants } = await res.json();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('.restaurants');

    restaurants.forEach((restaurant) => {
        // restaurants card
        const restaurantsCard = document.createElement('div');
        restaurantsCard.classList.add('restaurants__card');

        // restaurants figure
        const restaurantsFigure = document.createElement('figure');
        restaurantsFigure.classList.add('restaurants__figure');

        const restaurantsImg = document.createElement('img');
        restaurantsImg.classList.add('restaurants__img');
        restaurantsImg.setAttribute('src', restaurant.pictureId);
        restaurantsImg.setAttribute('alt', 'restaurant\'s photo');

        const restaurantFigcaption = document.createElement('figcaption');
        restaurantFigcaption.classList.add('restaurants__figcaption');
        restaurantFigcaption.textContent = restaurant.city;

        restaurantsFigure.appendChild(restaurantsImg);
        restaurantsFigure.appendChild(restaurantFigcaption);

        // restaurants data
        const restaurantsData = document.createElement('div');
        restaurantsData.classList.add('restaurants__data');

        const restaurantsRating = document.createElement('p');
        restaurantsRating.classList.add('restaurants__rating');
        restaurantsRating.textContent = `Rating: ${restaurant.rating}`;

        const restaurantsName = document.createElement('h3');
        restaurantsName.classList.add('restaurants__name');
        restaurantsName.textContent = restaurant.name;

        const restaurantsDescription = document.createElement('p');
        restaurantsDescription.classList.add('restaurants__description');
        restaurantsDescription.textContent = restaurant.description;

        restaurantsData.appendChild(restaurantsRating);
        restaurantsData.appendChild(restaurantsName);
        restaurantsData.appendChild(restaurantsDescription);

        // append figure and restaurants data to restaurants card
        restaurantsCard.appendChild(restaurantsFigure);
        restaurantsCard.appendChild(restaurantsData);

        // append restaurants card to restauranst container
        restaurantsContainer.appendChild(restaurantsCard);
    });
});