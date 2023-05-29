import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ProfileImage from '../../components/profile-image/ProfileImage';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import {
	ProductButtonsContainer,
	UserProductsContainer,
	UserProductsHeader
} from './styles';
import RecordsGrid from '../../components/records-grid/RecordsGrid';
import { URLS } from '../../constants/requests';
import { useFetch } from '../../hooks/useFetch';

const UserProducts = () => {
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const { finalData: myProducts, load, wrong, setFetchInfo } = useFetch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.MY_PRODUCTS + currentUser.uid });
	}, [currentUser]);

	if (!currentUser || firebaseLoading) return <h1>Loading...</h1>;
	if (load) return <h1>Loading...</h1>;
	if (wrong) return <h1>Loading...</h1>;

	return (
		<UserProductsContainer>
			<Title type={TITLES_TYPES.PAGE}>YOUR RECORDS</Title>
			<UserProductsHeader>
				{currentUser?.profileImage && (
					<ProfileImage src={currentUser.profileImage} size='small' />
				)}
				<ProductButtonsContainer>
					{currentUser?.userName && (
						<Button type={BUTTONS.USER}>{currentUser.userName}</Button>
					)}
					<Button type={BUTTONS.ADD} action={() => navigate('/add-product')}>
						Sell new record
					</Button>
				</ProductButtonsContainer>
			</UserProductsHeader>
			<RecordsGrid records={myProducts} />
		</UserProductsContainer>
	);
};

export default UserProducts;
