import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';
import RecordsList from '../../components/records-list/RecordsList';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import UserHeaderCard from '../../components/user-header-card/UserHeaderCard';
import { BUTTONS } from '../../constants/buttons';
import { LIST_ITEMS_OPTION } from '../../constants/listItemsOptions';
import { URLS } from '../../constants/requests';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { CartSellerData, UserCartContainer, UserCartSeller } from './styles';

const UserCart = () => {
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const {
		finalData: allUsers,
		load,
		wrong
	} = useFetch({ url: URLS.ALL_USERS });

	const {
		finalData: userCart,
		load: loadCart,
		wrong: wrongCard,
		setFetchInfo
	} = useFetch();

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.MY_CART + currentUser.uid });
	}, [currentUser]);

	const navigate = useNavigate();
	if (load || loadCart || firebaseLoading || !userCart || !allUsers)
		return <Loading />;
	if (wrong || wrongCard) return <h1>Wrong..</h1>;

	const userPackages = allUsers.reduce((packages, user) => {
		const records = userCart.filter(item => item.sellerId === user._id);
		let starterPrice = 0;
		records.map(record => (starterPrice = starterPrice + record.price));
		if (records.length > 0) {
			packages.push({
				user: user,
				packages: records,
				total: starterPrice
			});
		}

		return packages;
	}, []);

	return (
		<>
			<UserCartContainer>
				<UserHeaderCard user={currentUser} />
				<Title type={TITLES_TYPES.PAGE}>{TITLES.pagesTitles.cart}</Title>
				{userPackages.map(item => (
					<UserCartSeller key={v4()}>
						<RecordsList
							records={item.packages}
							type={LIST_ITEMS_OPTION.CART}
						/>
						<CartSellerData>
							<Text type={TEXTS_TYPES.FIELD}>
								You have {item.packages.length} articles from
								<Button
									type={BUTTONS.USER}
									action={() =>
										navigate('/seller-products', {
											state: { seller: item.user._id }
										})
									}
								>
									{item.user.userName}
								</Button>
							</Text>
						</CartSellerData>
						<p>TOTAL IS: {item.total} €</p>

						<button onClick={() => recieve(item.packages)}>send</button>
						{/* {item.packages.map(item => newIds.push(item._id))}
						{console.log(newIds)} */}
					</UserCartSeller>
				))}
			</UserCartContainer>
		</>
	);
};

export default UserCart;
