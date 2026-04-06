import { UserContext } from '@/entities/user/model/user-context.ts';
import { useContext } from 'react';

export function useUser() {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('UserContext not found');
	}
	return context;
}
