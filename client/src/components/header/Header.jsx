import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BUTTONS } from '../../constants/buttons';
import { ICONS, ICONS_SIZES } from '../../constants/icons';
import { AuthContext } from '../../contexts/Auth.context';
import Button from '../button/Button';
import ErrorPopUp from '../error-pop-up/ErrorPopUp';
import Icon from '../icon/Icon';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import {
	CartContainer,
	CartCounter,
	HeaderIcons,
	HeaderTopDark,
	HeaderTopLight,
	StyledHeader
} from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const { currentUser } = useContext(AuthContext);

	if (location.pathname !== '/') {
		return (
			<StyledHeader>
				<HeaderTopDark>
					<Logo theme='light' action={() => navigate('/')} />
				</HeaderTopDark>
			</StyledHeader>
		);
	}

	return (
		<StyledHeader>
			<HeaderTopLight>
				<Logo theme='dark' action={() => navigate('/')} />
				{!currentUser && (
					<Button
						action={() => navigate('/register')}
						type={BUTTONS.BORDERED}
						src={ICONS.login}
					>
						Register/Login
					</Button>
				)}
				{currentUser && (
					<>
						<Menu open={open} />
						<HeaderIcons>
							<Icon
								action={() => {
									setOpen(!open);
								}}
								src={currentUser?.name ? ICONS.user : ICONS.userBell}
								size={ICONS_SIZES.big}
							/>
							<CartContainer>
								<Icon
									src={ICONS.cart}
									size={ICONS_SIZES.big}
									action={() => navigate('/user-cart')}
								/>
								<CartCounter>({currentUser.cart.length})</CartCounter>
							</CartContainer>
							<Button
								type={BUTTONS.BORDERED}
								src={ICONS.addRecordLight}
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
						</HeaderIcons>
					</>
				)}
			</HeaderTopLight>
		</StyledHeader>
	);
};

export default Header;
