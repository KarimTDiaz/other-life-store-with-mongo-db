import { TITLES_TYPES } from '../../constants/titles';
import RecordPreview from '../record-preview/RecordPreview';
import Title from '../title/Title';
import { StyledRecordsGrid } from './styles';

const RecordsGrid = ({ records }) => {
	return (
		<>
			<Title type={TITLES_TYPES.SECTION}>Latest Additions</Title>
			<StyledRecordsGrid>
				{records.map(record => (
					<RecordPreview key={record._id} record={record} />
				))}
			</StyledRecordsGrid>
		</>
	);
};

export default RecordsGrid;
