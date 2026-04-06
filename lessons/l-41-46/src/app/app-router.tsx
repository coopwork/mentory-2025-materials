import { Route, Routes } from 'react-router';
import { ROUTES } from '@/config/app-routes.ts';
import { Suspense } from 'react';
import { useUser } from '@/entities/user/model/use-user.ts';

const AppRouter = () => {
	const { user } = useUser();
	const ROLE = (user?.role?.toUpperCase() ?? 'UNKNOWN') as keyof typeof ROUTES;
	return (
		<Routes>
			{ROUTES[ROLE].map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={
						<Suspense>
							<route.layout>
								<route.element />
							</route.layout>
						</Suspense>
					}
				/>
			))}
		</Routes>
	);
};

export default AppRouter;
