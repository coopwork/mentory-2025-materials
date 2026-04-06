export type UserRoleType = 'admin' | 'user';

export type UserType = {
	id: number;
	email: string;
	name: string;
	role: UserRoleType;
	createdAt: string;
};

export type UserResponseType = {
	token: string;
	user: UserType;
};

export type UserContextType = {
	user: UserType | null;
	dispatch: (action: UserReducerType) => void;
};

export type UserReducerActionsType =
	| 'editUser'
	| 'sign_in'
	| 'sign_up'
	| 'sign_out';

export type UserReducerType = {
	type: UserReducerActionsType;
	payload: UserType | null;
};
