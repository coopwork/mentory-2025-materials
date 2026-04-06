import type { UserContextType } from '@/entities/user/model/types.ts';

export const DEFAULT_USER_CONTEXT: UserContextType = {
	user: null,
	dispatch: () => {},
} as const;
