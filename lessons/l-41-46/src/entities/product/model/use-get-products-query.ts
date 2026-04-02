import { useQuery } from '@tanstack/react-query';
import { getProductListRequest } from '@/entities/product/api/product.api.ts';
import { useProductFilters } from '@/features/filter-products/model/use-product-filters.ts';

export const useGetProductsQuery = () => {
	const { searchQuery } = useProductFilters();

	return useQuery({
		queryKey: [`products`, searchQuery],
		queryFn: () => getProductListRequest(searchQuery),
		staleTime: 1000 * 60 * 30,
	});
};
