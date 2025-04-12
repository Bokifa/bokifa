'use client'

import { LoginForm } from '../ui/login-form'

export const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries())
		console.log(data);
		;
	}
	return (
		<div className='w-full flex items-center-safe justify-center h-screen px-3'>
			<div className='w-full sm:w-[80%] md:w-[400px]'>
				<LoginForm onSubmit={handleSubmit}/>
			</div>
		</div>
	)
}