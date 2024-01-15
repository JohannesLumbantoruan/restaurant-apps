import DicodingRestaurantApi from '../../data/dicoding-restaurant-api';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const List = {
    async render() {
        return `
            <h2 class="main__title">Explore Our Restaurants</h2>
            <div class="restaurants" id="main-content" tabindex="0">
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await DicodingRestaurantApi.restaurantList();
        const restaurantsContainer = document.querySelector('.restaurants');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
        });
    }
};

export default List;