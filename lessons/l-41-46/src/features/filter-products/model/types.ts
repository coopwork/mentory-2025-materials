export type FilterType = {
	search: string | undefined;
	category: string | undefined;
	_sort: string | undefined;
	_order: string | undefined;
	price_gte: number | undefined;
	price_lte: number | undefined;
};
