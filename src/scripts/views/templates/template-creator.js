import CONFIG from '../../globals/config';

const createRestaurantCardTemplate = (restaurant) => `
    <div class="restaurants__card" tabindex="0">
        <figure class="restaurants__figure">
            <img class="restaurants__photo" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant's photo" crossorigin="anonymous">
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
    <p class="restaurant__rating">Rating: ⭐ ${restaurant.rating}</p>
    <p class="restaurant__categories">Categories: ${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <figure class="restaurant__figure">
        <img class="restaurant__photo" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant's photo" crossorigin="anonymous">
        <figcaption class="restaurant__figcaption">${restaurant.address}, ${restaurant.city}</figcaption>
    </figure>
    <p class="restaurant__description">${restaurant.description}</p>
    <div class="restaurant__menu">
        <h3>Menu</h3>
        <div class="restaurant__menu__foods">
            <h4>Foods</h4>
            <ul>
                ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
        </div>
        <div class="restaurant__menu__drinks">
            <h4 class="restaurant__menu__drinks">Drinks</h4>
            <ul>
                ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
        </div>
    </div>
    <div class="restaurant__reviews">
        <h3>Review</h3>
        ${restaurant.customerReviews.map((review) => `
            <div class="restaurant__reviews__item">
                <p class="restaurant__reviews__item__name">${review.name}</p>
                <p class="restaurant__reviews__item__date">${review.date}</p>
                <p class="restaurant__reviews__item__review">${review.review}</p>
            </div>
        `).join('')}
    </div>
    <add-review-form></add-review-form>
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