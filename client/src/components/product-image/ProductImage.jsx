import { ProductImageContainer, StyledProductImage } from './styles';

const ProductImage = ({ src }) => {
	return (
		<ProductImageContainer>
			<StyledProductImage src={src} alt='Imagen de producto' />
		</ProductImageContainer>
	);
};

export default ProductImage;
