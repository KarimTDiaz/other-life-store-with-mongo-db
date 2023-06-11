import { useNavigate } from 'react-router-dom';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import LikeButton from '../like-button/LikeButton';
import Text from '../text/Text';
import Title from '../title/Title';
import {
	RecordPreviewData,
	RecordPreviewField,
	RecordPreviewImage,
	RecordPreviewImageContainer,
	RecordPreviewToClick,
	StyledRecordPreviewContainer
} from './styles';

const RecordPreview = ({ record, isLike, isYours, isInCart, seller }) => {
	const navigate = useNavigate();

	return (
		<StyledRecordPreviewContainer>
			<RecordPreviewToClick
				onClick={() =>
					navigate('/product-info', {
						state: {
							currentRecord: record,
							isYours: isYours,
							isInCart: isInCart,
							seller: seller
						}
					})
				}
			>
				<RecordPreviewImageContainer>
					<RecordPreviewImage
						src={record.productImage}
						alt='Carátula de disco'
					/>
				</RecordPreviewImageContainer>
				<RecordPreviewData>
					<RecordPreviewField>
						<Text type={TEXTS_TYPES.PREVIEW}>{record.title}</Text>
					</RecordPreviewField>
					<RecordPreviewField>
						<Text type={TEXTS_TYPES.PREVIEW}>{record.artist}</Text>
					</RecordPreviewField>
					<RecordPreviewField>
						<Title type={TITLES_TYPES.SUBTITLE}>Price:</Title>
						<Text type={TEXTS_TYPES.PREVIEW}>{record.price} €</Text>
					</RecordPreviewField>
				</RecordPreviewData>
			</RecordPreviewToClick>
			<LikeButton productId={record._id} isLike={isLike} />
		</StyledRecordPreviewContainer>
	);
};

export default RecordPreview;
