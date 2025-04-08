'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

export const CurrencySelect = ({ defaultCurrency, currencies, children, onChangeCurrency, loading, ...props}) => {
	
	return (
		<Select value={defaultCurrency?.currency} onValueChange={onChangeCurrency} {...props}>
			<SelectTrigger className={cn("w-[90px] cursor-pointer select-none border-none shadow-none")}>
				<SelectValue placeholder={defaultCurrency?.currency} defaultValue={defaultCurrency?.currency}>
					{!loading && defaultCurrency?.currency} {defaultCurrency?.icon}
				</SelectValue>
				
			</SelectTrigger>
			<SelectContent>
				<div className='flex flex-col w-full'>
					{!loading && currencies?.map(item => (
						<SelectItem 
							key={item.currency} 
							value={item.currency} 
							className={cn('cursor-pointer',  defaultCurrency === item.currency ? 'text-primary' : '')}
						>
							{item.currency} {item.icon}
						</SelectItem>
					))} 
				</div>
			</SelectContent>
		</Select>
	)
}