export type UserRoleType = 'unauthorized' | 'user' | 'admin';

export type UserType = {
	id: number;
	name: string;
	email: string;
	role: UserRoleType;
}

export type UserContextType = {
	user: UserType | undefined;
	sign_in: (data: SignInFormValuesType) => Promise<void>;
	sign_up: (data: SignUpFormValuesType) => Promise<void>;
	sign_out: () => void;
}

export type SignInFormValuesType = {
	email: string;
	password: string;
}

export type SignUpFormValuesType = {
	email: string;
	password: string;
	name: string;
}