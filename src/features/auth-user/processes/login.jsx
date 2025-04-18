'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { loginSchema } from '../services/user.schemas';
import { UserService } from '../services/user.service';
import { LoginForm } from '../ui/login-form';

export const Login = () => {
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const { mutate, isPending, error } = useMutation({
        mutationFn: (formData) => UserService.login(formData),
        onSuccess: (data) => {
            console.log('✅ Login success', data);
        },
        onError: (error) => {
            console.error('❌ Login error', error);
        },
    });

    const onSubmit = (data) => {
        debugger
        mutate(data);
    };

    return (
        <div className="flex h-screen w-full items-center justify-center px-3">
            <div className="w-full sm:w-[80%] md:w-[400px]">
                <LoginForm form={form} onSubmit={onSubmit} isPending={isPending} error={error} />
            </div>
        </div>
    );
};
