import { LitElement, html, css } from 'lit';
import API_ENDPOINT from '../globals/api-endpoint';

class AddReviewForm extends LitElement {
    static properties = {
        name: { type: String, state: true },
        review: { type: String, state: true }
    };

    static styles = css`
        *,
        *::before,
        *::after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            border: solid #fff;
        }

        h3 {
            text-align: center;
            margin-bottom: 15px;
        }

        .form__item {
            margin-bottom: 15px;

            & > * {
                display: block;
                width: 100%;
                margin-bottom: 10px;
            }

            & > :not(label) {
                padding: 5px 10px;
                min-height: 44px;
                font-family: Tahoma, Arial, Verdana, sans-serif;

                &::placeholder {
                    font-family: sans-serif;
                }
            }

            > #reviewTextarea {
                resize: none;
            }
        }

        button {
            display: block;
            width: 100%;
            padding-block: 5px 10px;
            margin-block: 20px 10px;
            min-height: 44px;
        }

        /* media query */
        @media screen and (min-width: 992px) {
            button {
                margin-block: 30px 0;
            }
        }
    `;

    nameInputHandler(event) {
        this.name = event.target.value;
    }

    reviewInputHandler(event) {
        this.review = event.target.value;
    }

    async formSubmitHandler(event) {
        event.preventDefault();

        const id = window.location.hash.slice(1).split('/')[2];

        const payload = {
            id,
            name: this.name,
            review: this.review
        };

        try {
            const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const responseJson = await response.json();

            if (responseJson.error) {
                throw new Error(responseJson.message);
            }

            this.shadowRoot.querySelector('#nameInput').value = '';
            this.shadowRoot.querySelector('#reviewTextarea').value = '';

            const { customerReviews } = responseJson;
            const review = customerReviews[customerReviews.length - 1];

            const customerReviewsContainer = document.querySelector('.restaurant__reviews');

            customerReviewsContainer.innerHTML += `
                <div class="restaurant__reviews__item">
                    <p class="restaurant__reviews__item__name">${review.name}</p>
                    <p class="restaurant__reviews__item__date">${review.date}</p>
                    <p class="restaurant__reviews__item__review">${review.review}</p>
                </div>
            `;
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return html`
            <form @submit=${this.formSubmitHandler}>
                <h3>Add Review</h3>
                <div class="form__item">
                    <label for="nameInput">Name</label>
                    <input
                        @input=${this.nameInputHandler}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        id="nameInput"
                        required
                    >
                </div>
                <div class="form__item">
                    <label for="reviewTextarea">Review</label>
                    <textarea
                        @input=${this.reviewInputHandler}
                        name="review"
                        id="reviewTextarea"
                        cols="30"
                        rows="5"
                        placeholder="Enter your review"
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        `;
    }
}

customElements.define('add-review-form', AddReviewForm);