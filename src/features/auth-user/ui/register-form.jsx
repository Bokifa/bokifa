import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from '@/features/navigation'
import { useTranslations } from 'next-intl'
import { APP_URLS } from '@/config/url.config'

export const RegisterForm = ({
	className,
	onSubmit,
	errorsOnServer,
	isPending,
	form,
	RegisterFormItems,
	...props
}) => {
	const t = useTranslations("Auth");
	const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

	console.log(errors);
	
	const formItems = RegisterFormItems(t);
	
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">{t('register')}</CardTitle>
					<CardDescription>{t('registerDescription')}</CardDescription>
				</CardHeader>
				<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-6">
						{formItems.map(({id, type, placeholder, label, ...itemProps}) => (
							<div className="grid gap-2" key={id}>
								<Label htmlFor={id}>{t(`${label}`)}</Label>
								<Input
									id={id}
									type={type}
									name={id}
									placeholder={placeholder}
									autoComplete="off"
									{...register(id)}
									{...itemProps}
									// required
								/>	
								{errors[id] && (
									<div className="text-red-500 text-sm">
										{`${errors[id].message}`}
									</div>
								)}
							</div>
						))}
						<Button className="w-full" type="submit" disabled={isPending}>
							{t('login')}
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						{t('haveAccount')} {' '}
						<Link href={APP_URLS.user.login()} className="underline underline-offset-4">{t('login')}</Link>
					</div>
				</form>
				</CardContent>
			</Card>
		</div>
	)
}
