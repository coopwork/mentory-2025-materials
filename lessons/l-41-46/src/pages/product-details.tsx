import { useParams } from 'react-router';

const ProductDetailsPage = () => {
	const { productId } = useParams();

	return (
		<div>
			<div>PRODUCT ID {productId}</div>
		</div>
	);
};

export default ProductDetailsPage;
