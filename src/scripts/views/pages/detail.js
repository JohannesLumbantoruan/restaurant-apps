import DicodingRestaurantAPI from '../../data/dicoding-restaurant-api';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        const hero = document.querySelector('.hero');

        hero.style.display = 'none';

        return `
            <div class="restaurant" id="main-content" tabindex="0"></div>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const { id } = UrlParser.parseUrlWithoutCombiner();
        const restaurant = await DicodingRestaurantAPI.restaurantDetail(id);
        const restaurantContainer = document.querySelector('.restaurant');

        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant
        });
    }
};

export default Detail;