'use client'
import { useTranslations } from 'next-intl';
import { routing } from '../hooks/lang';
import { useChangeLanguage } from '../hooks/useChangeLanguage'
import { LanguageSelect, LanguageSelectItem } from '../ui/language-select'

export const LanguageChange = () => {
	const { isPending, defaultLanguage } = useChangeLanguage();
	const t = useTranslations("Languages");
	
	return (
		<LanguageSelect {...{isPending, defaultLanguage, t}}>
			{routing.locales?.map((locale) => (
				<LanguageSelectItem 
					key={locale} 
					{...{isPending, locale, defaultLanguage, t}} 
				>
					{locale}
				</LanguageSelectItem>
			))}
		</LanguageSelect>
	)
}