import { PATHS } from '@/config/paths.ts';
import { lazy } from 'react';
import CommonLayout from '@/widgets/layouts/common-layout.tsx';
import AuthLayout from '@/widgets/layouts/auth-layout.tsx';
import AdminLayout from '@/widgets/layouts/admin-layout.tsx';

const SignInPage = lazy(() => import('@/pages/auth/sign-in.tsx'));
const SignUpPage = lazy(() => import('@/pages/auth/sign-up.tsx'));
const DashboardPage = lazy(() => import('@/pages/admin/dashboard.tsx'));
const HomePage = lazy(() => import('@/pages/home.tsx'));
const OrderPage = lazy(() => import('@/pages/user/order.tsx'));
const ProductsPage = lazy(() => import('@/pages/products.tsx'));
const ProductDetailsPage = lazy(() => import('@/pages/product-details.tsx'));

const AUTH = [
	{
		path: PATHS.SIGN_IN,
		element: SignInPage,
		layout: AuthLayout,
	},
	{
		path: PATHS.SING_UP,
		element: SignUpPage,
		layout: AuthLayout,
	},
] as const;

const COMMON = [
	{
		path: PATHS.HOME,
		element: HomePage,
		layout: CommonLayout,
	},
	{
		path: PATHS.PRODUCTS,
		element: ProductsPage,
		layout: CommonLayout,
	},
	{
		path: PATHS.PRODUCT_BY_ID(':productId'),
		element: ProductDetailsPage,
		layout: CommonLayout,
	},
] as const;

const USER = [
	...COMMON,
	{
		path: PATHS.ORDER,
		element: OrderPage,
		layout: CommonLayout,
	},
] as const;

const ADMIN = [
	...USER,
	{
		path: PATHS.ADMIN_DASHBOARD,
		element: DashboardPage,
		layout: AdminLayout,
	},
] as const;

export const ROUTES = {
	AUTH,
	COMMON,
	USER,
	ADMIN,
} as const;
