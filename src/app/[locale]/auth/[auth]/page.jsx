
import { Login } from '@/features/auth-user/processes/login';
import { AUTH_PAGES } from '@/features/auth-user/auth.urls';
import { notFound } from 'next/navigation';

const isAuthSlug = (value) => Object.values(AUTH_PAGES).includes(value);

export default async function AuthPage({params}) {
	const query = await params;
	
	if (!query?.auth && !isAuthSlug(query?.auth)) {
		notFound();
	}


	return (
		<>
			<Login/>
		</>
	)
}