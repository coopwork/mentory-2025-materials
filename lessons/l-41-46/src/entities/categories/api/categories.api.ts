import { CORE_API } from '@/shared/api/instance.ts';
import { ENDPOINTS } from '@/config/endpoints.ts';
import type { CategoryType } from '@/entities/categories/model/types.ts';

export const getCategoriesRequest = async () => {
	const { data } = await CORE_API.get<CategoryType[]>(ENDPOINTS.GET.CATEGORIES);

	return data;
};
