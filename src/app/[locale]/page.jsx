import { getLanguage } from '@/features/language/helpers/lang.helper';
import { LanguageChange } from '@/features/language/processes/language-change';
export default async function HomePage() {
	const defaultLanguage = await getLanguage();
	return (
		<div>
			<h1>home</h1>
			<p>Welcome to the home page!</p>
			<LanguageChange defaultLanguage={defaultLanguage}/>
		</div>
	);
}