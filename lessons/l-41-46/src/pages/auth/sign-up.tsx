import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { Link } from 'react-router';
import { PATHS } from '@/config/paths.ts';
import SignUpWidget from '@/widgets/auth/sign-up-widget.tsx';

const SignUpPage = () => {
	return (
		<Card className='w-full max-w-sm'>
			<CardHeader>
				<CardTitle>Вход</CardTitle>
				<CardDescription>
					Есть аккаунт?
					<Button
						asChild
						variant='link'
					>
						<Link to={PATHS.SIGN_IN}>Войти</Link>
					</Button>
				</CardDescription>
			</CardHeader>
			<div className='px-6'>
				<SignUpWidget />
			</div>
		</Card>
	);
};

export default SignUpPage;
