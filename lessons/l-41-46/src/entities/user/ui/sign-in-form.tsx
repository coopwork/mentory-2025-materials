import { Input } from '@/shared/ui/input.tsx';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@/shared/ui/field.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { useUser } from '@/entities/user/model/hooks.ts';
import { Loader } from 'lucide-react';

const formSchema = z.object({
	email: z.string().email('Invalid email'),
	password: z.string().min(1, 'Password is required'),
});

const SignInForm = () => {
	const { sign_in } = useUser();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	function onSubmit(data: z.infer<typeof formSchema>) {
		sign_in.mutate(data);
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup>
				<Controller
					name='email'
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor='email'>Email</FieldLabel>
							<Input
								{...field}
								id='email'
								aria-invalid={fieldState.invalid}
								placeholder='Enter your email'
								autoComplete='off'
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Controller
					name='password'
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor='password'>Password</FieldLabel>
							<Input
								{...field}
								id='password'
								type='password'
								aria-invalid={fieldState.invalid}
								placeholder='Enter your password'
								autoComplete='off'
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>
			{sign_in.error?.message && (
				<div className='text-destructive mt-3'>
					<p>{sign_in.error?.message}</p>
				</div>
			)}
			<Button
				disabled={sign_in.isPending}
				type='submit'
				size='lg'
				className='w-full mt-7'
			>
				{sign_in.isPending && <Loader className='animate-spin' />}
				Войти
			</Button>
		</form>
	);
};

export default SignInForm;
