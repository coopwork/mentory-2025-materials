import { NavigationMenuLink } from '@/shared/ui/navigation-menu.tsx';
import { Link } from 'react-router';

const NavigationListItem = ({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) => {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link to={href}>
					<div className='flex flex-col gap-1 text-sm'>
						<div className='leading-none font-medium'>{title}</div>
						<div className='line-clamp-2 text-muted-foreground'>{children}</div>
					</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
};

export default NavigationListItem;
