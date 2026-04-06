import { useQuery } from '@tanstack/react-query';
import { getCategoriesRequest } from '@/entities/categories/api/categories.api.ts';

export const useGetCategoriesQuery = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: getCategoriesRequest,
		staleTime: 1000 * 60 * 60,
	});
};
