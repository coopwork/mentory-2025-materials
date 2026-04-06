import { CORE_API } from '@/shared/api/instance.ts';
import { ENDPOINTS } from '@/config/endpoints.ts';
import type {
	UserResponseType,
	UserType,
} from '@/entities/user/model/types.ts';

export const postSignUp = async () => {
	const { data } = await CORE_API.get<UserResponseType>(ENDPOINTS.POST.SIGN_UP);

	return data;
};

export const postSignIn = async () => {
	const { data } = await CORE_API.get<UserResponseType>(ENDPOINTS.POST.SIGN_IN);

	return data;
};

export const getMe = async () => {
	const { data } = await CORE_API.get<UserType>(ENDPOINTS.GET.ME);

	return data;
};
