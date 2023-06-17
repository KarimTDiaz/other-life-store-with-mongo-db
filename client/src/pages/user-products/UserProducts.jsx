import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';
import NothingToShow from '../../components/nothing-to-show/NothingToShow';
import RecordsList from '../../components/records-list/RecordsList';
import Title from '../../components/title/Title';
import UserHeaderCard from '../../components/user-header-card/UserHeaderCard';

import RatingList from '../../components/ratings-list/RatingList';
import UserSubMenu from '../../components/user-sub-menu/UserSubMenu';
import { BUTTONS } from '../../constants/buttons';
import { LIST_ITEMS_OPTION } from '../../constants/listItemsOptions';
import { URLS } from '../../constants/requests';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { UserProductsContainer } from './styles';

const UserProducts = () => {
	const [error, setError] = useState('');
	const [linkSelectedUser, setLinkSelectedUser] = useState('records');
	const navigate = useNavigate();
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const { finalData: myProducts, load, wrong, setFetchInfo } = useFetch();

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.MY_PRODUCTS + currentUser.uid });
	}, [currentUser]);

	if (!currentUser || firebaseLoading || !myProducts) return <Loading />;
	if (load) return <Loading />;
	if (wrong) return <h1>Loading...</h1>;

	return (
		<UserProductsContainer>
			<UserHeaderCard user={currentUser} />
			<Title type={TITLES_TYPES.PAGE}>{TITLES.pagesTitles.userProducts}</Title>
			<Button
				type={BUTTONS.ADD}
				action={() => {
					!currentUser.name
						? setError('You must complete your profile')
						: navigate('/add-product');
				}}
			>
				Sell new record
			</Button>
			{error && (
				<ErrorPopUp action={() => navigate('/edit-profile')}>
					{error}
				</ErrorPopUp>
			)}
			<UserSubMenu state={linkSelectedUser} setState={setLinkSelectedUser} />
			{linkSelectedUser === 'records' &&
				(myProducts.length === 0 ? (
					<NothingToShow />
				) : (
					<RecordsList
						records={myProducts}
						type={LIST_ITEMS_OPTION.USER_PRODUCTS}
					/>
				))}
			{linkSelectedUser === 'ratings' && <RatingList user={currentUser} />}
		</UserProductsContainer>
	);
};

export default UserProducts;
