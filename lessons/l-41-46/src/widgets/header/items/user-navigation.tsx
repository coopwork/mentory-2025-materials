import {
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from '@/shared/ui/navigation-menu.tsx';
import { Link } from 'react-router';
import { PATHS } from '@/config/paths.ts';
import { useUser } from '@/entities/user/model/hooks.ts';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar.tsx';

const UserNavigation = () => {
	const { user, sign_out } = useUser();

	if (!user) {
		return (
			<NavigationMenuItem>
				<NavigationMenuLink
					asChild
					className={navigationMenuTriggerStyle()}
				>
					<Link to={PATHS.SIGN_IN}>Войти</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='rounded-full cursor-pointer'>
				<NavigationMenuItem>
					<Avatar>
						<AvatarImage src='' />
						<AvatarFallback className='font-bold'>
							{user.name[0]}
						</AvatarFallback>
					</Avatar>
				</NavigationMenuItem>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuLabel>{user.name}</DropdownMenuLabel>
					{user.role === 'admin' && <DropdownMenuItem>Админ</DropdownMenuItem>}
					<DropdownMenuItem>Профиль</DropdownMenuItem>
					<DropdownMenuItem>Заказы</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem
						onClick={sign_out}
						className='text-destructive hover:bg-destructive/5 hover:text-destructive'
					>
						Выйти
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserNavigation;
