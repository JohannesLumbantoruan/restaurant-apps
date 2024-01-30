import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Liking a Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    const addLikeButtonInitiator = async (restaurant) => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant
        });
    };

    beforeEach(async () => {
        addLikeButtonContainer();
    });

    it('should show the like button when restaurant has not been liked before', async () => {
        await addLikeButtonInitiator({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when restaurant has not been liked before', async () => {
        await addLikeButtonInitiator({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await addLikeButtonInitiator({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });

        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already liked', async () => {
        await addLikeButtonInitiator({ id: 1 });

        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await addLikeButtonInitiator({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});