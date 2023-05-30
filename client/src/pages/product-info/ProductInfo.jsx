import { useLocation } from 'react-router-dom';
import Button from '../../components/button/Button';
import ProductImage from '../../components/product-image/ProductImage';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import {
	ProductInfoContainer,
	ProductInfoData,
	ProductInfoField
} from './styles';

const ProductInfo = () => {
	const { state } = useLocation();
	return (
		<ProductInfoContainer>
			<ProductInfoField>
				<Title type={TITLES_TYPES.SUBTITLE}>Title:</Title>
				<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.title}</Text>
			</ProductInfoField>
			<ProductInfoField>
				<Title type={TITLES_TYPES.SUBTITLE}>Artist:</Title>
				<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.artist}</Text>
			</ProductInfoField>
			<ProductImage src={state.currentRecord.productImage} />
			<Button type={BUTTONS.USER}>{state.seller}</Button>
			<ProductInfoData>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Genres:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.styles}</Text>
				</ProductInfoField>

				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Condition:</Title>
					<Text type={TEXTS_TYPES.FIELD}>
						{state.currentRecord.mediaCondition}
					</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Description:</Title>
					<Text type={TEXTS_TYPES.FIELD}>
						{state.currentRecord.description}
					</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Price:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.price} €</Text>
				</ProductInfoField>
			</ProductInfoData>
		</ProductInfoContainer>
	);
};

export default ProductInfo;
