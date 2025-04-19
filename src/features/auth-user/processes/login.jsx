'use client';

import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';

import { valuesTransformToFieldNames } from '@/lib/utils';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { loginSchema } from '../services/user.schemas';
import { UserService } from '../services/user.service';
import { LoginForm } from '../ui/login-form';

const defaultValues = {
    UsernameOrEmail: '',
    Password: '',
    RememberMe: false,
};
export const Login = () => {
    const t = useTranslations('Validations');
    const form = useForm({
        resolver: zodResolver(loginSchema(t)),
        defaultValues: defaultValues,
    });

    const { mutate, isPending, error } = useMutation({
        mutationFn: (formData) => UserService.login(formData),
        onSuccess: (data) => {
            setAccessToken(data.accessToken);
        },
        onError: (error) => {
            console.error('❌ Login error', error);
        },
    });

    const onSubmit = (data) => mutate(data);

    return (
        <div className="flex h-screen w-full items-center justify-center px-3">
            <div className="w-full sm:w-[80%] md:w-[400px]">
                <LoginForm
                    form={form}
                    onSubmit={onSubmit}
                    isPending={isPending}
                    fieldNames={valuesTransformToFieldNames(defaultValues)}
                    error={error}
                />
            </div>
        </div>
    );
};
