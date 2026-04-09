import { UserContext } from '@/entities/user/model/user-context.ts';
import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMe } from '@/entities/user/api/user.api.ts';
import type { UserReducerType } from '@/entities/user/model/types.ts';

export function useUser() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('UserContext not found');
	}
	return context;
}

export function useGetMe(
	dispatch: React.ActionDispatch<[action: UserReducerType]>,
) {
	const token = localStorage.getItem('robo-store-token');
	const { data, isPending } = useQuery({
		queryKey: ['session'],
		queryFn: getMe,
		staleTime: 1000 * 60 * 240,
		enabled: !!token,
	});
	useEffect(() => {
		if (data) {
			dispatch({ type: 'SET', payload: data });
		}
	}, [data, dispatch]);

	if (!token) return { isPending: false };
	return { isPending };
}
