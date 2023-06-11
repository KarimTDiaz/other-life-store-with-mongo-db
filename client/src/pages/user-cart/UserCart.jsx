import { useContext, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import RecordsList from '../../components/records-list/RecordsList';
import Title from '../../components/title/Title';
import UserHeaderCard from '../../components/user-header-card/UserHeaderCard';
import { LIST_ITEMS_OPTION } from '../../constants/listItemsOptions';
import { URLS } from '../../constants/requests';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { UserCartContainer } from './styles';

const UserCart = () => {
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const { finalData: userCart, load, wrong, setFetchInfo } = useFetch();

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.MY_CART + currentUser.uid });
	}, [currentUser]);

	if (load || firebaseLoading) return <Loading />;
	if (wrong) return <h1>Wrong..</h1>;

	return (
		<>
			<UserCartContainer>
				<UserHeaderCard user={currentUser} />
				<Title type={TITLES_TYPES.PAGE}>{TITLES.pagesTitles.cart}</Title>
				<RecordsList records={userCart} type={LIST_ITEMS_OPTION.CART} />
			</UserCartContainer>
		</>
	);
};

export default UserCart;
