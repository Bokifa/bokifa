import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from '@/features/navigation';
import { FiUser as UserIcon } from "react-icons/fi";
import { USER_URLS } from '../user.config';

export const UserAvatar = () => {
	const userUrls = USER_URLS;
	return (
		<>
			<UserIcon size={24} strokeWidth={1} />
		</>
		// <Avatar>
		// 	<AvatarImage src="https://github.com/shadcn.png" />
		// 	<AvatarFallback>CN</AvatarFallback>
		// </Avatar>

	)
}