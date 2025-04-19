import { twMerge } from 'tailwind-merge';

import { clsx } from 'clsx';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function queryParamsBuilder(params) {
    const queryString = Object.entries(params)
        .flatMap(([key, value]) => {
            if (value === undefined || value === null) return [];
            if (Array.isArray(value)) {
                return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`);
            }
            return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
        })
        .join('&');

    return queryString ? `?${queryString}` : '';
}

export const dataTransformToFormData = (data) => {
    const form = new FormData();

    // Dynamically append fields
    Object.entries(data).forEach(([key, value]) => {
        form.append(key, value);
    });

    return form;
};

export const valuesTransformToFieldNames = (defaultValues) =>
    Object.keys(defaultValues).reduce((acc, key) => {
        acc[key] = key;
        return acc;
    }, {});
