import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card.tsx';
import { Button } from '@/shared/ui/button.tsx';
import { ShoppingCartIcon } from 'lucide-react';
import { Skeleton } from '@/shared/ui/skeleton.tsx';

const ProductCardSkeleton = () => {
	return (
		<Card className='relative mx-auto w-full max-w-sm pt-0'>
			<div className='absolute inset-0 z-30 aspect-video bg-linear-to-t from-black/25 to-transparent' />
			<Skeleton className='relative z-20 aspect-video w-full' />
			<CardHeader>
				<CardAction>
					<Skeleton className='w-full h-5' />
				</CardAction>
				<CardTitle className='line-clamp-2'>
					<Skeleton className='w-full h-6' />
				</CardTitle>
				<CardDescription className='line-clamp-3'>
					<Skeleton className='w-full h-5' />
				</CardDescription>
			</CardHeader>

			<CardFooter>
				<Button
					disabled
					className='w-full'
				>
					<ShoppingCartIcon />
					Добавить в корзину
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCardSkeleton;
