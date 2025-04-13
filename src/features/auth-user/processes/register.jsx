import { RegisterForm } from '../ui/register-form'

export const Register = () => {
	return (
		<div className='w-full flex items-center-safe justify-center h-screen px-3'>
			<div className='w-full sm:w-[80%] md:w-[400px]'>
				<RegisterForm/>
			</div>
		</div>
	)
}