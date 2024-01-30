const assert = require('assert');

Feature('Liking a Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.see('Favorite Restaurants', '.main__title');
    I.see('No favorite restaurants yet!', '.restaurants__message');
});

Scenario('liking a restaurant', async ({ I }) => {
    I.see('No favorite restaurants yet!', '.restaurants__message');

    I.amOnPage('/');

    I.seeElement('.restaurants__name a');
    const firstRestaurant = locate('.restaurants__name a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurants__card');
    const likedRestaurantName = await I.grabTextFrom('.restaurants__name a');

    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});