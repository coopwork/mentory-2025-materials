import { useGetProductsQuery } from '@/entities/product/model/use-get-products-query.ts';
import ProductCard from '@/entities/product/ui/product-card.tsx';
import ProductCardSkeleton from '@/entities/product/ui/product-card.skeleton.tsx';

const ProductListWidget = () => {
	const { data, isPending } = useGetProductsQuery();

	if (isPending) {
		return (
			<section className='pb-10 grid grid-cols-3 gap-4'>
				{Array.from({ length: 4 }).map((_, index) => (
					<ProductCardSkeleton key={index} />
				))}
			</section>
		);
	}

	if (!data?.length) {
		return (
			<section className='pb-10 h-[25vh] flex items-end justify-center'>
				<h2 className='text-2xl font-medium'>
					Товары по вашему запросу не найдены
				</h2>
			</section>
		);
	}

	return (
		<section className='pb-10 grid grid-cols-3 gap-4'>
			{data?.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</section>
	);
};

export default ProductListWidget;
