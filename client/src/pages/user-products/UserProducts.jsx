import { useContext } from 'react';
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
const UserProducts = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<UserProductsContainer>
			<Title type={TITLES_TYPES.PAGE}>YOUR RECORDS</Title>
			<UserProductsHeader>
				<ProfileImage src={currentUser.profileImage} size='small' />
				<ProductButtonsContainer>
					<Button type={BUTTONS.USER}>{currentUser.userName}</Button>
					<Button type={BUTTONS.ADD} action={() => navigate('/add-product')}>
						Sell new record
					</Button>
				</ProductButtonsContainer>
			</UserProductsHeader>
		</UserProductsContainer>
	);
};

export default UserProducts;
