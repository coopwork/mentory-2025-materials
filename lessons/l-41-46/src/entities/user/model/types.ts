import type { UseMutationResult } from '@tanstack/react-query';

export type UserRoleType = 'admin' | 'user';

export type UserType = {
	readonly id: number;
	email: string;
	name: string;
	role: UserRoleType;
	createdAt: string;
};

export type UserResponseType = {
	token: string;
	user: UserType;
};

export type SignInArgsType = {
	email: string;
	password: string;
};

export type SignUpArgsType = SignInArgsType & {
	name: string;
};

export type UserContextType = {
	user: UserType | null;
	isPending: boolean;
	sign_in: UseMutationResult<UserResponseType, Error, SignInArgsType, unknown>;
	sign_up: UseMutationResult<UserResponseType, Error, SignUpArgsType, unknown>;
	sign_out: () => void;
};

export type UserReducerType =
	| { type: 'SET'; payload: UserType | null }
	| { type: 'EDIT'; payload: Partial<UserType> };
