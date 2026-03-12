import type {SignInFormValuesType} from "../../../types/user.ts";

export async function signIn(data: SignInFormValuesType) {
	const {email} = data;
	if (email.includes('user')) {
		return {
			id: 1,
			name: 'My User Name',
			email: email,
			role: 'user',
		}
	}
	if (email.includes('admin')) {
		return {
			id: 1,
			name: 'My Admin Name',
			email: email,
			role: 'user',
		}
	}
	return new Error('User not found')
}