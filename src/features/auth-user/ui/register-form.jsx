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
	getErrors,
	isPending,
	...props
}) => {
	const t = useTranslations("Auth");
	const formItems  = [
		{
			id: "name",
			label: "name",
			placeholder: t("enterYourName"),
			type: "text",
		},
		{
			id: "surname",
			label: "surname",
			placeholder: t("enterYourSurname"),
			type: "text",
		},
		{
			id: "username",
			label: "username",
			placeholder: t("enterYourUsername"),
			type: "text",
		},
		{
			id: "email",
			label: "email",
			placeholder: "m@example.com",
			type: "email",
		},
		{
			id: "password",
			label: "password",
			placeholder: "**********",
			type: "password",
		},
		{
			id: "confirmPassword",
			label: "confirmPassword",
			placeholder: "**********",
			type: "password",
		}
	]
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">{t('register')}</CardTitle>
					<CardDescription>{t('registerDescription')}</CardDescription>
				</CardHeader>
				<CardContent>
				<form onSubmit={onSubmit} >
					<div className="flex flex-col gap-6">
					{formItems.map((item) => (
						<div className="grid gap-2" key={item.id}>
							<Label htmlFor={item.id}>{t(`${item.label}`)}</Label>
							<Input
								id={item.id}
								type={item.type}
								name={item.id}
								placeholder={item.placeholder}
								autoComplete="off"
								// required
							/>	
							{getErrors(item.id)}
						</div>
					))}
					<Button className="w-full" type="submit">
						{t('login')}
					</Button>
					<Button variant="outline" className="w-full" type="button" asChild>
						<Link href={APP_URLS.home()}>{t('goToMainPage')}</Link>
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
