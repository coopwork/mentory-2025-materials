import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card.tsx';
import SignInWidget from '@/widgets/auth/sign-in-widget.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { Link } from 'react-router';
import { PATHS } from '@/config/paths.ts';

const SignIn = () => {
	return (
		<Card className='w-full max-w-sm'>
			<CardHeader>
				<CardTitle>Вход</CardTitle>
				<CardDescription>
					Нету аккаунта?
					<Button
						asChild
						variant='link'
					>
						<Link to={PATHS.SING_UP}>Зарегистрироваться</Link>
					</Button>
				</CardDescription>
			</CardHeader>
			<div className='px-6'>
				<SignInWidget />
			</div>
		</Card>
	);
};

export default SignIn;
