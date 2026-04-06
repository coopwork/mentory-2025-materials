import { BrowserRouter } from 'react-router';
import type { WrapperPropsType } from '@/shared/types/base-types.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { QUERY_CLIENT } from '@/shared/api/query-client.ts';
import UserProvider from '@/entities/user/model/user-provider.tsx';

const AppProviders = ({ children }: WrapperPropsType) => {
	return (
		<QueryClientProvider client={QUERY_CLIENT}>
			<BrowserRouter>
				<UserProvider>{children}</UserProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default AppProviders;
