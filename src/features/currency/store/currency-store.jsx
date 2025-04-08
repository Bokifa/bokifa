
'use client'
import { create } from 'zustand';

const fakeFetchCurrencies = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { currency: 'USD', icon: '$' },
                { currency: 'EUR', icon: '€' },
                { currency: 'JPY', icon: '¥' },
            ]);
        }, 300);
    });

export const useCurrencyStore = create((set, get) => ({
    currencies: [],
	loading: true,
    currentCurrency: null,

    fetchCurrencies: async () => {
		set({loading: true})
        const data = await fakeFetchCurrencies();
        set({ currencies: data });
		
        const saved = typeof window !== 'undefined' 
			? localStorage.getItem('currency') 
				? JSON.parse(localStorage.getItem('currency')) 
				: null 
			: null;
        const fallback = saved || data[0];
        set({ currentCurrency: fallback , loading: false});
    },

    setCurrency: (currency) => {
		set({loading: true})
        if (typeof window !== 'undefined') {
            localStorage.setItem('currency', JSON.stringify(currency));
        }
        set({ currentCurrency: currency, loading: false });
    },
}));
