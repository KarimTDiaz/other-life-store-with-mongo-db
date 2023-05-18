import { v4 } from 'uuid';

export const MENU_LINKS = [
	{
		id: v4(),
		link: 'PROFILE',
		route: '/profile'
	},
	{
		id: v4(),
		link: 'PRODUCTS',
		route: '/your-products'
	},
	{
		id: v4(),
		link: 'FAVORITES',
		route: '/favorites'
	},
	{
		id: v4(),
		link: 'PURCHASES',
		route: '/your-purchases'
	}
];
