import { useContext } from 'react';
import { TITLES_TYPES } from '../../constants/titles';
import RecordPreview from '../record-preview/RecordPreview';
import Title from '../title/Title';
import { StyledRecordsGrid } from './styles';
import { AuthContext } from '../../contexts/Auth.context';

const RecordsGrid = ({ records }) => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase || !records) return;

	return (
		<>
			<Title type={TITLES_TYPES.SECTION}>Latest Additions</Title>
			<StyledRecordsGrid>
				{records.map(record => {
					const isLike = currentUser.favorites.includes(record._id);
					return (
						<RecordPreview key={record._id} record={record} isLike={isLike} />
					);
				})}
			</StyledRecordsGrid>
		</>
	);
};

export default RecordsGrid;
