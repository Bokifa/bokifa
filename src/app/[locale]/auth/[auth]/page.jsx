import { AUTH_SLUG } from '@/config/url.config';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/router';

const isAuthSlug = (value) => Object.values(AUTH_SLUG).includes(value);

export default function AuthPage() {
	const { query } = useRouter();
	if (!query?.auth && !isAuthSlug(query?.auth)) {
		notFound();
	}


	return (
		<>
		</>
	)
}