export const PATHS = {
	SIGN_IN: '/sign-in',
	SING_UP: '/sign-up',
	HOME: '/',
	PRODUCTS: '/products',
	PRODUCT_BY_ID: (id: string | number) => `/products/${id}`,
	ORDER: '/order',
	ADMIN_DASHBOARD: '/admin/dashboard',
} as const;
