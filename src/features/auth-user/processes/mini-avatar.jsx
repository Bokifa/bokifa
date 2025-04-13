
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from '@/features/navigation';
import { FiUser as UserIcon } from "react-icons/fi";

import * as PopoverComponent  from '@/components/ui/popover';
import { APP_URLS } from '@/config/url.config';

export const UserAvatar = () => {
	const appUrls = APP_URLS;
	
	const UserLinks = [
		{
			label: 'Login',
			href: appUrls.user.login(),
		},
		{
			label: 'Register',
			href: appUrls.user.register(),
		},
		{
			label: 'Wishlist',
			href: appUrls.wishlist(),
		}
	]
	return (
		<PopoverComponent.Popover>
			<PopoverComponent.PopoverTrigger asChild className="cursor-pointer">
				<UserIcon size={24} strokeWidth={1} />
			</PopoverComponent.PopoverTrigger>
			<PopoverComponent.PopoverContent align="end" className="max-w-40">
				<ul className="space-y-2">
					{UserLinks.map((link, index) => (
						<li key={index}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					))}
				</ul>
			</PopoverComponent.PopoverContent>
		</PopoverComponent.Popover>
		// <Avatar>
		// 	<AvatarImage src="https://github.com/shadcn.png" />
		// 	<AvatarFallback>CN</AvatarFallback>
		// </Avatar>

	)
}