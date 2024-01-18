import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        const hero = document.querySelector('.hero');

        hero.style.display = 'none';

        return `
            <h2 class="main__title">Favorite Restaurants</h2>
            <div class="restaurants">
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restaurantsContainer = document.querySelector('.restaurants');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
        });

        const restaurantNameElements = document.querySelectorAll('.restaurants__name > a');

        console.log(restaurantNameElements);

        restaurantNameElements.forEach((element) => {
            element.addEventListener('keydown', (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.target.click();
                }
            });
        });
    }
};

export default Favorite;