import { useLocation } from 'react-router-dom';
import {
	ProductInfoContainer,
	ProductInfoData,
	ProductInfoField
} from './styles';
import Title from '../../components/title/Title';
import { TITLES_TYPES } from '../../constants/titles';
import ProductImage from '../../components/product-image/ProductImage';
import { TEXTS_TYPES } from '../../constants/texts';
import Text from '../../components/text/Text';

const ProductInfo = () => {
	const { state } = useLocation();
	return (
		<ProductInfoContainer>
			<ProductImage src={state.productImage} />
			<ProductInfoData>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Title:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.title}</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Artist:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.artist}</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Genres:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.styles}</Text>
				</ProductInfoField>

				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Condition:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.mediaCondition}</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Description:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.description}</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Price:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.price} €</Text>
				</ProductInfoField>
			</ProductInfoData>
		</ProductInfoContainer>
	);
};

export default ProductInfo;
