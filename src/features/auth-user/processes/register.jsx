'use client'

import { useValidationErrors } from '@/shared/hooks/useValidationErrors'
import { RegisterForm } from '../ui/register-form'
import { useTransition } from 'react';
import { UserService } from '../services/user.service';

export const Register = () => {
	const { getErrors, setErrors } = useValidationErrors();
	const [isPending, startTransition] = useTransition();
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		startTransition(() => {
			try {
				const response = await UserService.register(data)
				debugger
			} catch (error) {
				debugger
			}
		})
		
	}
	return (
		<div className='w-full flex items-center-safe justify-center h-screen px-3'>
			<div className='w-full sm:w-[80%] md:w-[400px]'>
				<RegisterForm onSubmit={handleSubmit} getErrors={getErrors} isPending={isPending}/>
			</div>
		</div>
	)
}