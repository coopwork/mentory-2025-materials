import { Route, Routes } from 'react-router';
import { ROUTES } from '@/config/app-routes.ts';
import { Suspense } from 'react';

const AppRouter = () => {
	return (
		<Routes>
			{ROUTES.ADMIN.map((route) => (
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
