import { useContext } from 'react';
import { URLS } from '../../constants/requests';
import { TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../loading/Loading';
import RecordPreview from '../record-preview/RecordPreview';
import Title from '../title/Title';
import { StyledRecordsGrid } from './styles';

const RecordsGrid = ({ records, title }) => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const {
		finalData: allUsers,
		load,
		wrong
	} = useFetch({ url: URLS.ALL_USERS });

	if (load) return <Loading />;
	if (wrong) return <h1>Wrong...</h1>;
	if (loadingFirebase || !records) return;
	return (
		<>
			<Title type={TITLES_TYPES.SECTION}>{title}</Title>
			<StyledRecordsGrid>
				{records.map(record => {
					const isLike =
						currentUser && currentUser.favorites.includes(record._id);
					const isYours =
						currentUser && currentUser.products.includes(record._id);
					const isInCart = currentUser && currentUser.cart.includes(record._id);
					const seller = allUsers.find(
						seller => seller._id === record.sellerId
					);
					return (
						<RecordPreview
							key={record._id}
							record={record}
							isLike={isLike}
							isYours={isYours}
							isInCart={isInCart}
							seller={seller.userName}
						/>
					);
				})}
			</StyledRecordsGrid>
		</>
	);
};

export default RecordsGrid;
