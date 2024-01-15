import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurantAPI {
    static async restaurantList() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();

        return responseJson.restaurants;
    }

    static async restaurantDetail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();

        return responseJson.restaurant;
    }

    static async searchRestaurant(q) {
        const response = await fetch(API_ENDPOINT.SEARCH(q));
        const responseJson = await response.json();

        return responseJson.restaurants;
    }

    static async addReview({ id, name, review }) {
        const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                name,
                review
            })
        });
        const responseJson = await response.json();

        return responseJson.error;
    }
}

export default DicodingRestaurantAPI;