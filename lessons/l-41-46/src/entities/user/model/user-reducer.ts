import type { UserReducerType, UserType } from '@/entities/user/model/types.ts';

export const userReducer = (
	state: UserType | null,
	action: UserReducerType,
) => {
	switch (action.type) {
		case 'EDIT':
			if (!state) return state;
			return {
				...state,
				...action.payload,
			};
		case 'SET': {
			if (!action.payload) return null;
			return action.payload;
		}

		default:
			return state;
	}
};
