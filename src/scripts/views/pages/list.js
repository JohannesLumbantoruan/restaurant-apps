import DicodingRestaurantApi from '../../data/dicoding-restaurant-api';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const List = {
    async render() {
        const hero = document.querySelector('.hero');

        hero.style.display = 'block';

        return `
            <h2 class="main__title">Explore Our Restaurants</h2>
            <div class="restaurants">
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await DicodingRestaurantApi.restaurantList();
        const restaurantsContainer = document.querySelector('.restaurants');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
        });

        const restaurantNameElements = document.querySelectorAll('.restaurants__name > a');

        restaurantNameElements.forEach((element) => {
            element.addEventListener('keydown', (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.target.click();
                }
            });
        });
    }
};

export default List;