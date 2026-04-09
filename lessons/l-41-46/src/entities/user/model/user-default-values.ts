import type {
	SignInArgsType,
	SignUpArgsType,
	UserContextType,
	UserResponseType,
} from '@/entities/user/model/types.ts';
import type { UseMutationResult } from '@tanstack/react-query';

export const DEFAULT_USER_CONTEXT: UserContextType = {
	user: null,
	isPending: false,
	sign_in: {} as UseMutationResult<
		UserResponseType,
		Error,
		SignInArgsType,
		unknown
	>,
	sign_up: {} as UseMutationResult<
		UserResponseType,
		Error,
		SignUpArgsType,
		unknown
	>,
	sign_out: () => {},
} as const;
