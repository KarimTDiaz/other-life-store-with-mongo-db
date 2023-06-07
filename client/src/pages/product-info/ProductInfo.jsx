import { useLocation, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import ProductImage from '../../components/product-image/ProductImage';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { ICONS, ICONS_SIZES } from '../../constants/icons';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import {
	LikesAndDate,
	LikesAndDateIcons,
	PriceField,
	ProductInfoContainer,
	ProductInfoData,
	ProductInfoField,
	ProductInfoHead,
	ProductInfoTitle,
	TrackListContainer,
	TrackListField
} from './styles';

const ProductInfo = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const date = state.currentRecord.date.split(',');
	return (
		<ProductInfoContainer>
			<div>
				<ProductImage src={state.currentRecord.productImage} />
			</div>
			<ProductInfoData>
				<ProductInfoHead>
					<ProductInfoTitle>
						{state.currentRecord.artist} - {state.currentRecord.title}
					</ProductInfoTitle>
				</ProductInfoHead>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Label:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.label}</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Format:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.format}</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Released:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.year}</Text>
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
				<TrackListContainer>
					<Title type={TITLES_TYPES.SUBTITLE}>TrackList:</Title>
					{state.currentRecord.trackList.map((track, index) => (
						<TrackListField key={v4()}>
							<Title type={TITLES_TYPES.SUBTITLE}>0{index}</Title>
							<Text type={TEXTS_TYPES.FIELD}>{track}</Text>
						</TrackListField>
					))}
				</TrackListContainer>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>
						Posted by{' '}
						<Button
							type={BUTTONS.USER}
							action={() =>
								navigate('/seller-products', {
									state: { seller: state.currentRecord.sellerId }
								})
							}
						>
							{state.seller}
						</Button>
					</Title>
				</ProductInfoField>
				<LikesAndDate>
					<Text type={TEXTS_TYPES.FIELD}>{date[0]}</Text>
					<LikesAndDateIcons>
						<Icon src={ICONS.likeOff} size={ICONS_SIZES.small} />
						<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.likes}</Text>
					</LikesAndDateIcons>
				</LikesAndDate>

				<PriceField>
					<Text type={TEXTS_TYPES.FIELD} price>
						{state.currentRecord.price} €
					</Text>
				</PriceField>
				{state.isYours && <Button type={BUTTONS.SQUARED}>Edit Record</Button>}
			</ProductInfoData>
		</ProductInfoContainer>
	);
};

export default ProductInfo;
