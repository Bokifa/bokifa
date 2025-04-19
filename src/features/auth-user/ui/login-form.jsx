'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

import { Link } from '@/features/navigation';
import { APP_URLS } from '@/config/url.config';

export const LoginForm = ({ form, onSubmit, isPending, error, className, fieldNames, ...props }) => {
    const t = useTranslations('Auth');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;
    console.log('errors', errors);
    
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{t('loginTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor={fieldNames?.UsernameOrEmail}>{t('usernameOrEmail')}</Label>
                            <Input
                                id={fieldNames?.UsernameOrEmail}
                                name={fieldNames?.UsernameOrEmail}
                                type="email"
                                {...register('UsernameOrEmail')}
                                placeholder="m@example.com"
                                required
                            />
                            {errors?.[fieldNames?.UsernameOrEmail] && <p className="text-sm text-red-500">{errors?.[fieldNames?.UsernameOrEmail]?.message}</p>}
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor={fieldNames?.Password}>{t('password')}</Label>
                                <Link
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    {t('forgotPassword')}
                                </Link>
                            </div>
                            <Input
                                id={fieldNames?.Password}
                                name={fieldNames?.Password}
                                type="password"
                                {...register('Password')}
                                required
                                autoComplete="off"
                            />
                            {errors?.[fieldNames?.Password] && <p className="text-sm text-red-500">{errors?.[fieldNames?.Password]?.message}</p>}
                        </div>

                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Checkbox id={fieldNames?.RememberMe} name={fieldNames?.RememberMe} {...register('RememberMe')} />
                            <Label htmlFor={fieldNames?.RememberMe} className='cursor-pointer'>{t('rememberMe')}</Label>
                        </div>

                        <Button className="w-full" type="submit" disabled={isPending}>
                            {isPending && <Loader2 className="mr-2 animate-spin" />}
                            {t('login')}
                        </Button>


                        {error && <p className="text-sm text-red-500">{error.message}</p>}

                        <div className="mt-4 text-center text-sm">
                            {t('dontHaveAccount')}{' '}
                            <Link href={APP_URLS.user.register()} className="underline underline-offset-4">
                                {t('register')}
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
