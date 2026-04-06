import { BotIcon } from 'lucide-react';
import Container from '@/shared/ui/container.tsx';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/shared/ui/navigation-menu.tsx';
import { Link } from 'react-router';
import NavigationListItem from '@/widgets/header/items/navigation-list-item.tsx';
import { NAVIGATION } from '@/config/navigation.ts';
import { PATHS } from '@/config/paths.ts';
import { useGetCategoriesQuery } from '@/entities/categories/model/use-get-categories-query.ts';

const Header = () => {
	const categories = useGetCategoriesQuery();
	return (
		<header className='fixed top-0 left-0 right-0 py-4 border-b border-border rounded-b-2xl bg-card'>
			<Container className='flex items-center justify-between'>
				<Link
					to={PATHS.HOME}
					className='flex items-center gap-2'
				>
					<BotIcon className='size-12' />
					<span className='font-bold text-xl'>
						ROBO/<span className='text-destructive'>STORE</span>
					</span>
				</Link>

				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem className='hidden md:flex'>
							<NavigationMenuTrigger>Товары</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
									{NAVIGATION.HEADER.map((component) => (
										<NavigationListItem
											key={component.title}
											title={component.title}
											href={component.href}
										>
											{component.description}
										</NavigationListItem>
									))}
									{categories?.data?.map((category) => (
										<NavigationListItem
											key={category.id}
											title={category.label}
											href={PATHS.PRODUCTS + `?category=${category.name}`}
										>
											Все {category.label}
										</NavigationListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<Link to={PATHS.SIGN_IN}>Войти</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</Container>
		</header>
	);
};

export default Header;
