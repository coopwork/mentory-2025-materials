import { useSearchParams } from 'react-router';
import { useDebounceValue } from '@/shared/hooks';
import { useEffect, useState } from 'react';
import type { FilterType } from '@/features/filter-products/model/types.ts';

export const useProductFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const searchQuery: FilterType = {
		search: searchParams.get('search') ?? undefined,
		category: searchParams.get('category') ?? undefined,
		_sort: searchParams.get('_sort') ?? undefined,
		_order: searchParams.get('_order') ?? undefined,
		price_gte: searchParams.get('price_gte')
			? Number(searchParams.get('price_gte'))
			: undefined,
		price_lte: searchParams.get('price_lte')
			? Number(searchParams.get('price_lte'))
			: undefined,
	};

	const [filters, setFilters] = useState<FilterType>(searchQuery);

	const debouncedFilters = useDebounceValue(filters, 750);

	const setFiltersQuery = (updateSearchQuery: Partial<FilterType>) => {
		setFilters((prev) => ({ ...prev, ...updateSearchQuery }));
	};

	useEffect(() => {
		setSearchParams((prev) => {
			const params = new URLSearchParams(prev);
			Object.entries(debouncedFilters).forEach(([key, value]) => {
				if (value) {
					params.set(key, String(value));
				} else {
					params.delete(key);
				}
			});
			return params.toString();
		});
	}, [debouncedFilters]);

	return { searchQuery, filters, setFiltersQuery };
};
