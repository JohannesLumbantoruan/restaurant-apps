import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Unliking a Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    const addLikeButtonInitiator = async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: { id: 1 }
        });
    };

    beforeEach(async () => {
        addLikeButtonContainer();

        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

        await addLikeButtonInitiator();
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should show the unlike button when the restaurant has been liked', async () => {
        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it('should not show the like button when the restaurant has been liked', async () => {
        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
    });

    it('should be able to remove the liked restaurant from the list', async () => {
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error when user click unlike button if the unliked restaurant is not in the list', async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});