import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import Text from '../text/Text';
import Title from '../title/Title';
import {
	RecordPreviewData,
	RecordPreviewField,
	RecordPreviewImage,
	RecordPreviewImageContainer,
	StyledRecordPreviewContainer
} from './styles';

const RecordPreview = ({ record }) => {
	return (
		<StyledRecordPreviewContainer>
			<RecordPreviewImageContainer>
				<RecordPreviewImage src={record.productImage} alt='Carátula de disco' />
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
		</StyledRecordPreviewContainer>
	);
};

export default RecordPreview;