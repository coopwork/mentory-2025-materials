import Container from '@/shared/ui/container.tsx';
import ProductListWidget from '@/widgets/product-list/ui/product-list-widget.tsx';
import ProductFiltersWidget from '@/widgets/product-filters/ui/product-filters-widget.tsx';

const ProductsPage = () => {
	return (
		<Container>
			<ProductFiltersWidget />

			<ProductListWidget />
		</Container>
	);
};

export default ProductsPage;
