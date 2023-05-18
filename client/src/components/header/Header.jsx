import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BUTTONS } from '../../constants/buttons';
import { ICONS, ICONS_SIZES } from '../../constants/icons';
import { AuthContext } from '../../contexts/Auth.context';
import Button from '../button/Button';
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
	const { currentUser, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	if (location.pathname !== '/')
		return (
			<StyledHeader>
				<HeaderTopDark>
					<Logo theme='light' />
				</HeaderTopDark>
			</StyledHeader>
		);

	return (
		<StyledHeader>
			<HeaderTopLight>
				<Logo theme='dark' />
				{!currentUser && !loading ? (
					<Button
						action={() => navigate('/register')}
						type={BUTTONS.BORDERED}
						src={ICONS.login}
					>
						Register/Login
					</Button>
				) : (
					currentUser && (
						<>
							<Menu open={open} />
							<HeaderIcons>
								<Icon
									action={() => {
										setOpen(!open);
									}}
									src={ICONS.user}
									size={ICONS_SIZES.regular}
								/>
								<CartContainer>
									<Icon src={ICONS.cart} size={ICONS_SIZES.big} />
									<CartCounter>(0)</CartCounter>
								</CartContainer>
							</HeaderIcons>
						</>
					)
				)}
			</HeaderTopLight>
		</StyledHeader>
	);
};

export default Header;
