'use client'
import { useCallback } from 'react';
import { CurrencySelect } from '../ui/currency-select';
import { useCurrency } from './../hooks/useCurrency';
export const ChangeCurrency = () => {
	const {currencies, currentCurrency, onChangeCurrency, loading} = useCurrency()
	return (
		<>
			<CurrencySelect 
				currencies={currencies} 
				defaultCurrency={currentCurrency} 
				onChangeCurrency={onChangeCurrency}
				loading={loading}
			/>
		</>
	)
}