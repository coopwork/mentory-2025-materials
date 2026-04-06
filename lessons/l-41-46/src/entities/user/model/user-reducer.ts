import type { UserReducerType, UserType } from '@/entities/user/model/types.ts';

export const userReducer = async (
	state: UserType | null,
	action: UserReducerType,
) => {
	switch (action.type) {
		case 'editUser':
			return {
				...state,
				...action.payload,
			};
		case 'sign_in': {
			return {
				...state,
				...action.payload,
			};
		}
		case 'sign_up': {
			return {
				...state,
				...action.payload,
			};
		}
		case 'sign_out': {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}

	return state;
};
