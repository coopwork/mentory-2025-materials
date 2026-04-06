import { PATHS } from '@/config/paths.ts';

const HEADER = [
	{
		title: 'Все товары',
		href: PATHS.PRODUCTS,
		description: 'Полный список товаров',
	},
] as const;

export const NAVIGATION = {
	HEADER,
} as const;
