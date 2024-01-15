import CONFIG from '../../globals/config';

const createRestaurantCardTemplate = (restaurant) => `
    <div class="restaurants__card" tabindex="0">
        <figure class="restaurants__figure">
            <img class="restaurants__photo" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant's photo">
            <figcaption class="restaurants__figcaption">${restaurant.city}</figcaption>
        </figure>
        <div class="restaurants__data">
            <p class="restaurants__rating">Rating: ⭐ ${restaurant.rating}</p>
            <h3 class="restaurants__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p class="restaurants__description">${restaurant.description}</p>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <h3 class="restaurant__rating">Rating: ⭐ ${restaurant.rating}</h3>
    <figure class="restaurant__figure">
        <img class="restaurant__photo" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant's photo">
        <figcaption class="restaurant__figcaption">${restaurant.address}, ${restaurant.city}</figcaption>
    </figure>
    <p class="restaurant__description">${restaurant.description}</p>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" class="like" id="likeButton">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="like this restaurant" class="like" id="likeButton">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantCardTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate
};