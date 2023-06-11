import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';
import RecordsList from '../../components/records-list/RecordsList';
import Title from '../../components/title/Title';
import UserHeaderCard from '../../components/user-header-card/UserHeaderCard';
import { BUTTONS } from '../../constants/buttons';
import { LIST_ITEMS_OPTION } from '../../constants/listItemsOptions';
import { URLS } from '../../constants/requests';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { UserProductsContainer } from './styles';

const UserProducts = () => {
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const { finalData: myProducts, load, wrong, setFetchInfo } = useFetch();
	const [error, setError] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.MY_PRODUCTS + currentUser.uid });
	}, [currentUser]);

	if (!currentUser || firebaseLoading) return <Loading />;
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
			<RecordsList
				records={myProducts}
				type={LIST_ITEMS_OPTION.USER_PRODUCTS}
			/>
		</UserProductsContainer>
	);
};

export default UserProducts;
