'use client';

import { useTranslations } from 'next-intl';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { valuesTransformToFieldNames } from '@/lib/utils';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';


import { registerSchema } from '../services/user.schemas';
import { UserService } from '../services/user.service';
import { RegisterForm } from '../ui/register-form';

const defaultRegisterValues = {
    Name: '',
    Surname: '',
    Username: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
};

export const Register = () => {
    const t = useTranslations('Validations');
    const form = useForm({
        resolver: zodResolver(registerSchema(t)),
        defaultValues: defaultRegisterValues,
    });

    const { mutate, isPending, error } = useMutation({
        mutationFn: (formData) => UserService.register(formData),
        onSuccess: (data) => {
			debugger
            if (data) {
            }
        },
        onError: (error) => {
            console.error('❌ Unexpected error:', error.message);
        },
    });
	
    const onSubmit = (data) => mutate(data);

    const filedNames = valuesTransformToFieldNames(defaultRegisterValues);
    const RegisterFormItems = (t) => [
        {
            id: filedNames.Name,
            label: 'name',
            placeholder: t('enterYourName'),
            type: 'text',
        },
        {
            id: filedNames.Surname,
            label: 'surname',
            placeholder: t('enterYourSurname'),
            type: 'text',
        },
        {
            id: filedNames.Username,
            label: 'username',
            placeholder: t('enterYourUsername'),
            type: 'text',
        },
        {
            id: filedNames.Email,
            label: 'email',
            placeholder: 'm@example.com',
            type: 'email',
        },
        {
            id: filedNames.Password,
            label: 'password',
            placeholder: '**********',
            type: 'password',
        },
        {
            id: filedNames.ConfirmPassword,
            label: 'confirmPassword',
            placeholder: '**********',
            type: 'password',
        },
    ];

    return (
        <div className="flex h-screen w-full items-center-safe justify-center px-3">
            <div className="w-full sm:w-[80%] md:w-[400px]">
                <RegisterForm
                    form={form}
                    onSubmit={onSubmit}
                    errorsOnServer={error?.useValidationErrors}
                    isPending={isPending}
                    RegisterFormItems={RegisterFormItems}
                />
            </div>
        </div>
    );
};
