import { PATHS } from '@/config/paths.ts';

const HEADER = [
	{
		title: 'Все товары',
		href: PATHS.PRODUCTS,
		description: 'Полный список товаров',
	},
	{
		title: 'Смартфоны',
		href: '/docs/primitives/hover-card',
		description: 'Все смартфоны',
	},
] as const;

export const NAVIGATION = {
	HEADER,
} as const;
