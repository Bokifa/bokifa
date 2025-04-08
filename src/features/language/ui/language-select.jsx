'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const LanguageSelect = ({defaultLanguage, children, isPending,selectTriggerProps, className, ...props}) => {

	return (
		<Select value={defaultLanguage} {...props}>
			<SelectTrigger className={cn("cursor-pointer select-none border-none shadow-none")} {...selectTriggerProps}>
				<SelectValue placeholder={defaultLanguage} defaultValue={defaultLanguage}>
					{props?.t(defaultLanguage)}
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				<div className='flex flex-col w-full'>
					{children} 
				</div>
			</SelectContent>
		</Select>
	)
}
export const LanguageSelectItem = ({ children, isPending, locale, defaultLanguage, ...props }) => {
	return (
		<Link 
			href={`/${locale}`}
			replace={true} 
			className={cn('flex items-center w-full p-2 text-sm rounded-lg hover:bg-accent', defaultLanguage === locale ? 'text-primary' : '')}
		>
			{props.t(locale)}
		</Link>
	)
}