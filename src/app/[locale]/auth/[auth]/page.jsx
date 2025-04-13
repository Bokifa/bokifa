
import { AUTH_PAGES } from '@/features/auth-user/auth.urls';
import { Login, Register } from '@/features/auth-user/processes';
import { notFound } from 'next/navigation';

const isAuthSlug = (value) => Object.values(AUTH_PAGES).includes(value);

export default async function AuthPage({params}) {
	const query = await params;
	
	if (!query?.auth && !isAuthSlug(query?.auth)) {
		notFound();
	}


	return (
		<>
			{query.auth === AUTH_PAGES.LOGIN && <Login/>}
			{query.auth === AUTH_PAGES.REGISTER && <Register/>}
		</>
	)
}