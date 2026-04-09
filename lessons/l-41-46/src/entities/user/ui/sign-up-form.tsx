import * as z from 'zod';
import { useUser } from '@/entities/user/model/hooks.ts';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@/shared/ui/field.tsx';
import { Input } from '@/shared/ui/input.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { Loader } from 'lucide-react';

const formSchema = z.object({
	name: z.string().min(2, 'Имя слишком короткое'),
	email: z.string().email('Некорректная почта'),
	password: z.string().min(6, 'Пароль слишком короткий'),
});

const SignUpForm = () => {
	const { sign_up } = useUser();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	function onSubmit(data: z.infer<typeof formSchema>) {
		sign_up.mutate(data);
	}
	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup>
				<Controller
					name='name'
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor='name'>Имя</FieldLabel>
							<Input
								{...field}
								id='name'
								aria-invalid={fieldState.invalid}
								placeholder='Введите свое имя'
								autoComplete='off'
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
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
								placeholder='Введите свою почту'
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
							<FieldLabel htmlFor='password'>Пароль</FieldLabel>
							<Input
								{...field}
								id='password'
								type='password'
								aria-invalid={fieldState.invalid}
								placeholder='Придумайте пароль'
								autoComplete='off'
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>
			{sign_up.error?.message && (
				<div className='text-destructive mt-3'>
					<p>{sign_up.error?.message}</p>
				</div>
			)}
			<Button
				disabled={sign_up.isPending}
				type='submit'
				size='lg'
				className='w-full mt-7'
			>
				{sign_up.isPending && <Loader className='animate-spin' />}
				Зарегистрироваться
			</Button>
		</form>
	);
};

export default SignUpForm;
