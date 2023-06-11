import { useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '../../components/button/Button';
import Delete from '../../components/delete/Delete';
import Icon from '../../components/icon/Icon';
import Loading from '../../components/loading/Loading';
import Modal from '../../components/modal/Modal';
import ProductImage from '../../components/product-image/ProductImage';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { HEADERS } from '../../constants/formDefaultValues';
import { ICONS, ICONS_SIZES } from '../../constants/icons';
import { URLS } from '../../constants/requests';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import {
	ButtonsContainer,
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
	const [content, setContent] = useState(null);
	const [inCart, setInCart] = useState(state.isInCart);
	const navigate = useNavigate();
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const { setFetchInfo } = useFetch();
	const date = state.currentRecord.date.split(',');

	if (firebaseLoading) return <Loading />;
	if (state.isInCart !== inCart) return <Navigate to={'/'} />;

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
					<Title type={TITLES_TYPES.SUBTITLE}>Genre:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{state.currentRecord.genre}</Text>
				</ProductInfoField>
				<ProductInfoField>
					<Title type={TITLES_TYPES.SUBTITLE}>Styles:</Title>
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
					{!state.isYours && (
						<Button
							type={BUTTONS.CART}
							src={ICONS.cart}
							action={() =>
								handleFetchCart(
									setFetchInfo,
									currentUser.uid,
									state.currentRecord._id,
									inCart,
									setInCart
								)
							}
						>
							{!inCart ? 'ADD TO CART' : 'REMOVE FROM CART'}
						</Button>
					)}
				</PriceField>
				{state.isYours && (
					<ButtonsContainer>
						<Button type={BUTTONS.SQUARED} src={ICONS.edit}>
							Edit Record
						</Button>
						<Button
							type={BUTTONS.SQUARED}
							src={ICONS.trash}
							action={() =>
								showModal(
									setContent,
									<Delete
										id={state.currentRecord._id}
										setContent={setContent}
									/>
								)
							}
						>
							Delete Record
						</Button>
					</ButtonsContainer>
				)}
			</ProductInfoData>
			<Modal>{content}</Modal>
		</ProductInfoContainer>
	);
};

const showModal = (setContent, component) => {
	setContent(component);
};

const handleFetchCart = async (
	setFetchInfo,
	userId,
	productId,
	inCart,
	setInCart
) => {
	await setFetchInfo({
		url: URLS.ADD_CART + userId,
		options: {
			method: 'PATCH',
			body: JSON.stringify({
				_id: productId
			}),
			headers: {
				...HEADERS
			}
		},
		redirectTo: '/your-products'
	});
	setInCart(!inCart);
};

export default ProductInfo;
