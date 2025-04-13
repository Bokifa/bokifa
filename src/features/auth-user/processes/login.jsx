'use client'

import { useTransition } from 'react';
import { LoginForm } from '../ui/login-form'
import { UserService } from '../services/user.service';

export const Login = () => {
	const [isPending, startTransition] = useTransition();
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries())
		startTransition(() => {
			UserService.login(data);
		})
		
	}
	return (
		<div className='w-full flex items-center-safe justify-center h-screen px-3'>
			<div className='w-full sm:w-[80%] md:w-[400px]'>
				<LoginForm onSubmit={handleSubmit} isPending={isPending}/>
			</div>
		</div>
	)
}