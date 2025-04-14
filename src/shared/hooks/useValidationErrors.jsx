'use client'

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const useValidationErrors = () => {
	const [errors, setErrors] = useState({});
	const t = useTranslations("Auth");

	const getErrors = (fieldName) => {
		const field = fieldName?.charAt(0)?.toUpperCase() + fieldName?.slice(1);
		const messages = errors?.[field];
		if (!messages || messages.length === 0) return null;
		return t(messages[0]) || messages[0];
	}
	return {
		getErrors,
		setErrors
	}
}