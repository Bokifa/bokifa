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
import { Checkbox } from '@/components/ui/checkbox'
import { Loader2 } from 'lucide-react'

export const LoginForm = ({
  className,
  onSubmit,
  isPending,
  ...props
}) => {
	const t = useTranslations("Auth");
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">{t('loginTitle')}</CardTitle>
					<CardDescription>{t('loginDescription')}</CardDescription>
				</CardHeader>
				<CardContent>
				<form onSubmit={onSubmit}>
					<div className="flex flex-col gap-6">
					<div className="grid gap-2">
						<Label htmlFor="email">{t('usernameOrEmail')}</Label>
						<Input
							id="email"
							type="email"
							name="email"
							placeholder="m@example.com"
							required
						/>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">{t('password')}</Label>
							<Link
								href="#"
								className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
							>
								{t('forgotPassword')}
							</Link>
						</div>
						<Input id="password" type="password" name="password" required autoComplete="off"/>
					</div>
					<div className="flex items-center space-x-2">
						<Checkbox id="rememberMe" name="rememberMe" />
						<label
							htmlFor="rememberMe"
							className=""
						>
							{t('rememberMe')}
						</label>
					</div>
					<Button className="w-full" type="submit" disabled={isPending}>
						{isPending &&  <Loader2 className="animate-spin" />}
						{t('login')}
					</Button>
					<Button variant="outline" className="w-full" type="button" asChild>
						<Link href={APP_URLS.home()}>{t('goToMainPage')}</Link>
					</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						{t('dontHaveAccount')} {' '}
						<Link href={APP_URLS.user.register()} className="underline underline-offset-4">{t('register')}</Link>
					</div>
				</form>
				</CardContent>
			</Card>
		</div>
	)
}
