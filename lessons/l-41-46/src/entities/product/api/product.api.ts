import { CORE_API } from '@/shared/api/instance.ts';
import { ENDPOINTS } from '@/config/endpoints.ts';
import type { ProductType } from '@/entities/product/model/types.ts';
import type { FilterType } from '@/features/filter-products/model/types.ts';

export const getProductListRequest = async (params: FilterType) => {
	const { data } = await CORE_API.get<ProductType[]>(ENDPOINTS.GET.PRODUCTS, {
		params,
	});

	return data;
};

export const getProductByIdRequest = async (id: number | string) => {
	const { data } = await CORE_API.get<ProductType>(
		ENDPOINTS.GET.PRODUCT_BY_ID(id),
		{
			params: {},
		},
	);

	return data;
};
