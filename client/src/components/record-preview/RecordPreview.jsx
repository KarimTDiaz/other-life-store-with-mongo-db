import { useNavigate } from 'react-router-dom';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
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
import LikeButton from '../like-button/LikeButton';

const RecordPreview = ({ record }) => {
	const navigate = useNavigate();
	console.log(record);
	return (
		<StyledRecordPreviewContainer>
			<RecordPreviewToClick
				onClick={() => navigate('/product-info', { state: record })}
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
			<LikeButton productId={record._id} />
		</StyledRecordPreviewContainer>
	);
};

export default RecordPreview;
