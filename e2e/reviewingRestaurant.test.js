const assert = require('assert');

Feature('Reviewing a Restaurant');

Scenario('reviewing a restaurant', async ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.restaurants__name a');
    I.click(locate('.restaurants__name a').first());

    I.seeElement('.restaurant__reviews');
    I.seeElement('.restaurant__reviews__item');

    const totalReviews = await I.grabNumberOfVisibleElements('.restaurant__reviews__item');

    I.seeElement('add-review-form');

    const name = 'John Doe';
    const review = 'Saya suka semua menunya';

    I.seeElement('#nameInput');
    I.fillField('#nameInput', name);

    I.seeElement('#reviewTextarea');
    I.fillField('#reviewTextarea', review);

    I.seeElement('[type="submit"]');
    I.click('[type="submit"]');

    const newTotalReviews = await I.grabNumberOfVisibleElements('.restaurant__reviews__item');

    const submittedReviewName = await I.grabTextFrom(locate('.restaurant__reviews__item').at(newTotalReviews).find('.restaurant__reviews__item__name'));
    const submittedReviewContent = await I.grabTextFrom(locate('.restaurant__reviews__item').at(newTotalReviews).find('.restaurant__reviews__item__review'));

    assert.strictEqual(name, submittedReviewName);
    assert.strictEqual(review, submittedReviewContent);
});