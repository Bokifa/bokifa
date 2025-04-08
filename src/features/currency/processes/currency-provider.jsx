"use client"
import { useEffect } from 'react';
import { useCurrencyStore } from '../store/currency-store';

export const CurrencyProvider = ({ children }) => {
    const { fetchCurrencies } = useCurrencyStore();

    useEffect(() => {
        fetchCurrencies();
    }, []);

    return children;
};
