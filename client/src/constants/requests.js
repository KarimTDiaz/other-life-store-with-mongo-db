const API_URL = 'http://localhost:3000/';

export const URLS = {
	NEW_USER: API_URL + 'other-life-store/users/new-user',
	ALL_USERS: API_URL + 'other-life-store/users/all',
	SINGLE_USER: API_URL + 'other-life-store/users',
	LIKE: API_URL + 'other-life-store/users/like-product/',
	EDIT_USER: API_URL + 'other-life-store/users/edit-user/',
	NEW_PRODUCT: API_URL + 'other-life-store/products/new-product/',
	ALL_PRODUCTS: API_URL + 'other-life-store/products/all',
	MY_PRODUCTS: API_URL + 'other-life-store/products/my-products/',
	MY_FAVORITES: API_URL + 'other-life-store/products/my-favorites/',
	MY_CART: API_URL + 'other-life-store/products/my-cart/',
	DELETE_PRODUCT: API_URL + 'other-life-store/products/delete-product/',
	ADD_CART: API_URL + 'other-life-store/users/add-to-cart/',
	PURCHASE: API_URL + 'other-life-store/products/purchase-product/',
	RATING: API_URL + 'other-life-store/users/new-rating/'
};
