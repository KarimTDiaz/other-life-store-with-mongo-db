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
				<RecordPreviewImage src={record.productImage} />
			</RecordPreviewImageContainer>
			<RecordPreviewData>
				<RecordPreviewField>
					<Text type={TEXTS_TYPES.FIELD}>{record.title}</Text>
				</RecordPreviewField>
				<RecordPreviewField>
					<Text type={TEXTS_TYPES.FIELD}>{record.artist}</Text>
				</RecordPreviewField>
				<RecordPreviewField>
					<Title type={TITLES_TYPES.SUBTITLE}>Price:</Title>
					<Text type={TEXTS_TYPES.FIELD}>{record.price} €</Text>
				</RecordPreviewField>
			</RecordPreviewData>
		</StyledRecordPreviewContainer>
	);
};

export default RecordPreview;
