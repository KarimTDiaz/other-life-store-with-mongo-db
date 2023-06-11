import { useContext } from 'react';
import { v4 } from 'uuid';
import { URLS } from '../../constants/requests';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../loading/Loading';
import RecordListItem from '../record-list-item/RecordListItem';
import { RecordsListContainer } from './styles';

const RecordsList = ({ records, type }) => {
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
		<RecordsListContainer>
			{records.map(record => {
				const isYours =
					currentUser && currentUser.products.includes(record._id);
				const seller = allUsers.find(seller => seller._id === record.sellerId);
				const isInCart = currentUser && currentUser.cart.includes(record._id);
				return (
					<RecordListItem
						key={v4()}
						record={record}
						isYours={isYours}
						isInCart={isInCart}
						seller={seller.userName}
						type={type}
						sellerId={seller._id}
					/>
				);
			})}
		</RecordsListContainer>
	);
};

export default RecordsList;
