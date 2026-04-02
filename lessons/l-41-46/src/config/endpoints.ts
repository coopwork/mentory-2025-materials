export const ENDPOINTS = {
	GET: {
		PRODUCTS: `/api/products`,
		PRODUCT_BY_ID: (id: string | number) => `/api/products/${id}`,
	},
} as const;
