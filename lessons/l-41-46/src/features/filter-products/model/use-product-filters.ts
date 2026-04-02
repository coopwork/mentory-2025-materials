import { useSearchParams } from 'react-router';

export const useProductFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const searchQuery = {
		search: searchParams.get('search') ?? undefined,
		_category: searchParams.get('_category') ?? undefined,
		_sort: searchParams.get('_sort') ?? undefined,
		price_gte: searchParams.get('price_gte')
			? Number(searchParams.get('price_gte'))
			: undefined,
		price_lte: searchParams.get('price_lte')
			? Number(searchParams.get('price_lte'))
			: undefined,
	};

	const setSearchQuery = (
		updateSearchQuery: Partial<
			Record<keyof typeof searchQuery, string | number | null>
		>,
	) => {
		setSearchParams((prev) => {
			const params = new URLSearchParams(prev);
			Object.entries(updateSearchQuery).forEach(([key, value]) => {
				if (value) {
					params.set(key, String(value));
				} else {
					params.delete(key);
				}
			});
			return params.toString();
		});
	};

	return { searchQuery, setSearchQuery };
};
