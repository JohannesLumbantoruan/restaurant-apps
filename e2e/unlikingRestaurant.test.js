const assert = require('assert');

Feature('Unliking a Restaurant');

Scenario('unliking a restaurant', async ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.restaurants__name a');

    for (let i = 1; i <= 3; i++) {
        I.click(locate('.restaurants__name a').at(i));

        I.seeElement('#likeButton');
        I.click('#likeButton');

        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.see('Favorite Restaurants', '.main__title');

    let visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurants__card');

    assert.strictEqual(3, visibleLikedRestaurants);

    I.seeElement('.restaurants__name a');
    I.click(locate('.restaurants__name a').first());

    I.seeElement('#likeButton');

    const unfavoriteMovie = await I.grabTextFrom('.restaurant__name');

    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Favorite Restaurants', '.main__title');

    visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurants__card');

    assert.strictEqual(2, visibleLikedRestaurants);

    const restaurantsRemain = [];

    for (let i = 1; i <= visibleLikedRestaurants; i++) {
        restaurantsRemain.push(await I.grabTextFrom(locate('.restaurants__name a').at(i)));
    }

    assert.ok(!restaurantsRemain.includes(unfavoriteMovie));
});