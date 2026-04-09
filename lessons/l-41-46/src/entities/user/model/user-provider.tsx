import { UserContext } from '@/entities/user/model/user-context.ts';
import type { WrapperPropsType } from '@/shared/types/base-types.ts';
import { useReducer } from 'react';
import { userReducer } from '@/entities/user/model/user-reducer.ts';
import { useMutation } from '@tanstack/react-query';
import { postSignIn, postSignUp } from '@/entities/user/api/user.api.ts';
import { useGetMe } from '@/entities/user/model/hooks.ts';
import { useNavigate } from 'react-router';
import { PATHS } from '@/config/paths.ts';

const UserProvider = ({ children }: WrapperPropsType) => {
	const navigate = useNavigate();
	const [user, dispatch] = useReducer(userReducer, null);
	const { isPending } = useGetMe(dispatch);

	const sign_in_mutation = useMutation({
		mutationFn: postSignIn,
		onSuccess: (data) => {
			localStorage.setItem('robo-store-token', data.token);
			dispatch({ type: 'SET', payload: data.user });
			navigate(PATHS.HOME);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const sign_up_mutation = useMutation({
		mutationFn: postSignUp,
		onSuccess: (data) => {
			localStorage.setItem('robo-store-token', data.token);
			dispatch({ type: 'SET', payload: data.user });
			navigate(PATHS.HOME);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const sign_out = () => {
		localStorage.removeItem('robo-store-token');
		dispatch({ type: 'SET', payload: null });
		navigate(PATHS.HOME);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				isPending,
				sign_in: sign_in_mutation,
				sign_up: sign_up_mutation,
				sign_out,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
