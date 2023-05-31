import { useLocation } from 'react-router-dom';
import Button from '../../components/button/Button';
import ProductImage from '../../components/product-image/ProductImage';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import {
	PriceField,
	ProductInfoContainer,
	ProductInfoData,
	ProductInfoField,
	ProductInfoHead,
	ProductInfoTitle
} from './styles';

const ProductInfo = () => {
	const { state } = useLocation();
	return (
		<ProductInfoContainer>
			<ProductInfoHead>
				<ProductInfoTitle>{state.currentRecord.artist} -</ProductInfoTitle>
				<ProductInfoTitle>{state.currentRecord.title}</ProductInfoTitle>
			</ProductInfoHead>
			<ProductImage src={state.currentRecord.productImage} />
			<ProductInfoData>
				<ProductInfoField>
					<Button type={BUTTONS.USER}>{state.seller}</Button>
				</ProductInfoField>
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
				<PriceField>
					<Text type={TEXTS_TYPES.FIELD} price>
						{state.currentRecord.price} €
					</Text>
				</PriceField>
			</ProductInfoData>
			{state.isYours && <Button type={BUTTONS.SQUARED}>Edit Record</Button>}
		</ProductInfoContainer>
	);
};

export default ProductInfo;
