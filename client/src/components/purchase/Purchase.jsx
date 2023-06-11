import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BUTTONS } from '../../constants/buttons';
import { URLS } from '../../constants/requests';
import { TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import Button from '../button/Button';
import Loading from '../loading/Loading';
import Title from '../title/Title';
import { PurchaseButtons, PurchaseCard } from './styles';

const Purchase = ({ record, setContent, sellerId }) => {
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const navigate = useNavigate();
	const { setFetchInfo } = useFetch();

	if (firebaseLoading) return <Loading />;
	return (
		<PurchaseCard>
			<Title type={TITLES_TYPES.FORM}>Confirm the purchase</Title>
			<PurchaseButtons>
				<Button type={BUTTONS.SQUARED} action={() => setContent(null)}>
					NO
				</Button>
				<Button
					type={BUTTONS.SQUARED}
					action={() =>
						handlePurchase(
							record._id,
							currentUser.uid,
							setFetchInfo,
							sellerId,
							record,
							navigate
						)
					}
				>
					YES
				</Button>
			</PurchaseButtons>
		</PurchaseCard>
	);
};

const handlePurchase = async (
	recordId,
	userId,
	setFetchInfo,
	sellerId,
	record,
	navigate
) => {
	await setFetchInfo({
		url: URLS.PURCHASE + recordId,
		options: {
			method: 'DELETE',
			body: JSON.stringify({
				sellerId: sellerId,
				buyerId: userId,
				record: record
			}),
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json'
			}
		}
	});
	navigate('/rating', {
		state: sellerId
	});
};

export default Purchase;
