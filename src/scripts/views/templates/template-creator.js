import CONFIG from '../../globals/config';

const createRestaurantCardTemplate = (restaurant) => `
    <div class="restaurants__card" tabindex="0">
        <figure class="restaurants__figure">
            <img class="restaurants__photo" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant's photo">
            <figcaption class="restaurants__figcaption">${restaurant.city}</figcaption>
        </figure>
        <div class="restaurants__data">
            <p class="restaurants__rating">${restaurant.rating}</p>
            <h3 class="restaurants__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p class="restaurants__description">${restaurant.description}</p>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => ``;

export {
    createRestaurantCardTemplate,
    createRestaurantDetailTemplate
};