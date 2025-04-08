"use client"

import { useCurrencyStore } from '../store/currency-store'

export const useCurrency = () => {
	const { currencies, currentCurrency, setCurrency, loading } = useCurrencyStore();

	const onChangeCurrency = (currencyName) => {
		const findedCurrency = currencies?.find(item => item.currency === currencyName);
		setCurrency(findedCurrency)
	}

	return { currencies, currentCurrency, onChangeCurrency, loading }
}