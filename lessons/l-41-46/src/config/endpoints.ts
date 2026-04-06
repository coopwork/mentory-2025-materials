export const ENDPOINTS = {
	GET: {
		PRODUCTS: `/api/products`,
		PRODUCT_BY_ID: (id: string | number) => `/api/products/${id}`,
		CATEGORIES: `/api/categories`,
		ME: `/auth/me`,
	},
	POST: {
		SIGN_IN: `/auth/login`,
		SIGN_UP: `/auth/register`,
	},
} as const;
