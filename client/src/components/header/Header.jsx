import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BUTTONS } from '../../constants/buttons';
import { ICONS, ICONS_SIZES } from '../../constants/icons';
import { URLS } from '../../constants/requests';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
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
	const navigate = useNavigate();
	const location = useLocation();
	const { currentUser, authLoading } = useContext(AuthContext);
	const { fetchData, load, wrong, setFetchInfo } = useFetch();

	useEffect(() => {
		if (!currentUser) return;
		console.log(currentUser);
		setFetchInfo({
			url: URLS.SINGLE_USER + '/' + currentUser.uid
		});
	}, [currentUser]);

	if (location.pathname !== '/')
		return (
			<StyledHeader>
				<HeaderTopDark>
					<Logo theme='light' />
				</HeaderTopDark>
			</StyledHeader>
		);
	if (load) return <h1>Loading</h1>;
	if (wrong) return <h1>wrong</h1>;

	return (
		<StyledHeader>
			<HeaderTopLight>
				<Logo theme='dark' />
				{!currentUser && !authLoading ? (
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
									src={fetchData.name ? ICONS.user : ICONS.userBell}
									size={ICONS_SIZES.big}
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
