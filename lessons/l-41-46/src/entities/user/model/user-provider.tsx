import { UserContext } from '@/entities/user/model/user-context.ts';
import type { WrapperPropsType } from '@/shared/types/base-types.ts';
import { DEFAULT_USER_CONTEXT } from '@/entities/user/model/user-default-values.ts';
import { useReducer } from 'react';
import { userReducer } from '@/entities/user/model/user-reducer.ts';

const UserProvider = ({ children }: WrapperPropsType) => {
	const [state, dispatch] = useReducer(userReducer, DEFAULT_USER_CONTEXT.user);
	console.log(state);
	// dispatch({ type: 'editUser', payload: null });
	return (
		<UserContext.Provider
			value={{
				user: state,
				dispatch,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
