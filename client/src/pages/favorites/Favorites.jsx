import { useContext, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import RecordsGrid from '../../components/records-grid/RecordsGrid';
import Title from '../../components/title/Title';
import { URLS } from '../../constants/requests';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { FavoritesContainer } from './styles';

const Favorites = () => {
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const { finalData: myFavorites, load, wrong, setFetchInfo } = useFetch();

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.MY_FAVORITES + currentUser.uid });
	}, [currentUser]);

	if (!currentUser || firebaseLoading) return <h1>Loading...</h1>;
	if (load) return <Loading />;
	if (wrong) return <h1>Loading...</h1>;

	return (
		<>
			<FavoritesContainer>
				<Title type={TITLES_TYPES.PAGE}>{TITLES.pagesTitles.favorites}</Title>
				<RecordsGrid records={myFavorites} />
			</FavoritesContainer>
		</>
	);
};

export default Favorites;
