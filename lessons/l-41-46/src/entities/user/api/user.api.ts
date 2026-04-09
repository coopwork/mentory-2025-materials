import { CORE_API } from '@/shared/api/instance.ts';
import { ENDPOINTS } from '@/config/endpoints.ts';
import type {
	SignInArgsType,
	SignUpArgsType,
	UserResponseType,
	UserType,
} from '@/entities/user/model/types.ts';

export const postSignUp = async (payload: SignUpArgsType) => {
	const { data } = await CORE_API.post<UserResponseType>(
		ENDPOINTS.POST.SIGN_UP,
		payload,
	);

	return data;
};

export const postSignIn = async (payload: SignInArgsType) => {
	const { data } = await CORE_API.post<UserResponseType>(
		ENDPOINTS.POST.SIGN_IN,
		payload,
	);

	return data;
};

export const getMe = async () => {
	const { data } = await CORE_API.get<UserType>(ENDPOINTS.GET.ME);

	return data;
};
