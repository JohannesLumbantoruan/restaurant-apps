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
    }
};

export default Favorite;