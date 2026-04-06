import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card.tsx';
import { Badge } from '@/shared/ui/badge.tsx';
import { Link } from 'react-router';
import { PATHS } from '@/config/paths.ts';
import { Button } from '@/shared/ui/button.tsx';
import { ShoppingCartIcon } from 'lucide-react';
import type { ProductType } from '@/entities/product/model/types.ts';
import { ENV } from '@/config/environments.ts';
import NO_IMAGE from '@/shared/assets/images/No_Product_Image_Available.webp';

const ProductCard = ({ product }: { product: ProductType }) => {
	const product_image = product.image
		? typeof product.image === 'string'
			? `${ENV.CORE_API_URL}${product.image}`
			: `${ENV.CORE_API_URL}${product.image[0]}`
		: NO_IMAGE;

	return (
		<Card className='relative mx-auto w-full max-w-sm pt-0 justify-between'>
			<div className='absolute inset-0 z-30 aspect-video bg-linear-to-t from-black/25 to-transparent' />
			<img
				src={product_image}
				alt={product.name}
				className='relative z-20 aspect-video w-full object-cover'
			/>
			<CardHeader>
				<CardAction>
					<Badge variant='secondary'>Featured</Badge>
				</CardAction>
				<CardTitle className='line-clamp-2'>{product.name}</CardTitle>
				<CardDescription className='line-clamp-3'>
					{product.description}
				</CardDescription>
				<p className='text-xl font-bold'>{product.price}$</p>
			</CardHeader>
			<Link
				to={PATHS.PRODUCT_BY_ID(product.id)}
				className='z-30 absolute top-0 left-0 right-0 bottom-20'
			/>
			<CardFooter>
				<Button className='w-full'>
					<ShoppingCartIcon />
					Добавить в корзину
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
