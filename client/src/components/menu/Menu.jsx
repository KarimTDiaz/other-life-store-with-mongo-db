import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { ICONS } from '../../constants/icons';
import { MENU_LINKS } from '../../constants/menu';
import Button from '../button/Button';
import { MenuItem, MenuLink, StyledMenu } from './styles';

const Menu = ({ open }) => {
	const navigate = useNavigate();
	return (
		<>
			<nav>
				<StyledMenu open={open}>
					{MENU_LINKS.map(item => (
						<MenuItem key={item.id} open={open}>
							<MenuLink to={item.route}>{item.link}</MenuLink>
						</MenuItem>
					))}
					<Button
						type='squared'
						action={() => handleSignOut(navigate)}
						src={ICONS.logout}
					>
						SIGN OUT
					</Button>
				</StyledMenu>
			</nav>
		</>
	);
};

const handleSignOut = async (navigate, setFetchInfo) => {
	await signOut(auth);
	navigate('/');
};

export default Menu;
